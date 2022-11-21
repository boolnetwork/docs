# 运行隐私节点

如何成为 BOOLNetwork 的隐私节点，参与隐私共识。

---

## 硬件要求

:::tip

隐私节点最重要的是 SGX 环境

:::

建议成为隐私节点的最小硬件环境如下：

- OS: Ubuntu 18.04
- CPU：至少 8 核 （SGX 必须支持）
- RAM：至少 64G 内存，越大越好
- 存储： 至少 2T SSD/HHD，越大越好
- 网络： 独立 IP，至少 20M 带宽，越大越好。

|            | CPU                                                                               | 主板               | 内存                  | 固态硬盘                                           | 网络环境                                                                   | 操作系统     |
| ---------- | --------------------------------------------------------------------------------- | ------------------ | --------------------- | -------------------------------------------------- | -------------------------------------------------------------------------- | ------------ |
| 要求       | 1.支持 SGX（Software Guard Extensions;2.Intel i5 七代及以上; 、3.核心数八核及以上 | BIOS 支持开启 SGX1 | 总容量 >= 64G         | 1.存储链全节点数据，考虑数据持续增长，建议 2T 以上 | 1.带宽 >= 20M 2.全节点对网络同步要求较高，同时对外提供服务，实时性要求高。 | Ubuntu 18.04 |
| 基础推荐   | intel 酷睿 i5-9600KF or intel 酷睿 i7-7700K or intel 酷睿 i7-10700                | BIOS 支持开启 SGX1 | 2 条 32G DDR4 的内存  | 2T m.2 固态                                        | 20M 带宽                                                                   | Ubuntu 18.04 |
| 中级版推荐 | intel 酷睿 i5-9600KF or intel 酷睿 i7-7700K or intel 酷睿 i7-10700                | BIOS 支持开启 SGX1 | 4 条 32GG DDR4 的内存 | 2T m.2 固态                                        | 20M 带宽                                                                   | Ubuntu 18.04 |

## 快速启动

### 下载挖矿文件

```bash
git clone https://github.com/boolnetwork/mining-scripts.git
cd mining-scripts
```

### 激活 SGX 软件

:::tip

可根据[Intel SGX processors](https://www.intel.com/content/www/us/en/support/articles/000028173/processors.html) 查看当前 cpu 是否支持 SGX

:::

### 配置

配置 configs 目录中各服务启动参数，大多参数可以直接使用默认值，需要特别注意如下几个参数，按实际情况配置：

- watcher.toml

  - identity： 与 bool 链交互的账户，用于签名，包括设备注册、设备在线、奖励获取等。 该账户同时是设备的拥有者。
  - boot_nodes：p2p 网络的种子节点。

- monitor.toml
  - private_key: 与目标链交互的签名账户，该账户将跨链的数据提交到目标链上(relayer 服务)。
  - http_url： 目标链的 JSON RPC 接口，建议到 Infura 等节点服务提供商申请自己的账户。

### identity 账户创建

```bash
docker run -it --rm boolnetwork/bnk-node:pre-release identity generate
```

输出

```text
Secret seed:      0x71235e1458ce9d140c8b8ded28ccc1e32e62c340aef51a65e1350a387dbe08a6
Public key (hex): 0x0248e7f02dcc9f7061a090b67dede93d7381847e94955aee7996603d2225e9f77e
Account ID:       0x34a5572cb21d34354e3091564d5edc7b791e9d5f
```

领取测试币

```bash
curl https://bot.bool.network/coin/0x34a5572cb21d34354e3091564d5edc7b791e9d5f
```

### 命令

通过 docker-compose 启动。

#### 开始挖矿

```bash
docker-compose up -d
```

#### 查看挖矿状态

```bash
docker-compose logs
```

#### 停止挖矿

```bash
docker-compose stop
```

#### 更新

```bash
docker-compose pull
```

### 单独启动服务

对于挖矿指令，我们可以拆解成如下服务：

:::info

我们需要关注运行服务的数据持久化。 例子中已将关键数据目录做了磁盘映射。

:::

#### 启动节点服务

```bash
docker run --net=host --rm -e RUST_LOG=info -v `pwd`/data:/data boolnetwork/bnk-node:latest --unsafe-ws-external
```

#### 启动数据库服务

```bash
docker run --net=host --rm -e RUST_LOG=info  -v `pwd`/configs/db.toml:/bnk/db.toml -v `pwd`/data:/bnk/data boolnetwork/bnk-database:latest
```

#### 启动观察者服务

```bash
docker run --net=host --rm -e RUST_LOG=info  -v `pwd`/configs/watcher.toml:/bnk/watcher.toml boolnetwork/bnk-watcher:latest
```

#### 启动 SGX 私钥服务

```bash
docker run --rm --net=host --device /dev/sgx/enclave --device /dev/sgx/provision -v `pwd`/configs/key.toml:/bnk/key.toml -p 9701:9701  -e RUST_LOG=info boolnetwork/bnk-sgx-key-server
```

#### 启动链监视服务

```bash
docker run --net=host --rm -e RUST_LOG=warn,info=bnk_monitor  -v `pwd`/configs/monitor.toml:/bnk/monitor.toml -v `pwd`/data:/bnk/data boolnetwork/bnk-monitor:latest
```

#### 启动中继服务

若要成为中继人则需执行如下命令

```bash
docker run --net=host --rm -e RUST_LOG=debug boolnetwork/bnk-relayer:latest -w=http://127.0.0.1:8720 -m=http://127.0.0.1:8740 -p=8750
```

参数说明：

- `-w`：观察者服务的访问链接。
- `-m`: 链监视服务的访问链接。
- `-p`: 默认值为 3000， 需按照配置文件填写，这里是 8750

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
git clone ...
```

### 激活 SGX 软件

::: tip
可根据[Intel SGX processors](https://www.intel.com/content/www/us/en/support/articles/000028173/processors.html) 查看当前 cpu 是否支持 SGX
:::

在终端执行以下命令，执行后计算机应该会重新启动。

```bash
cd mining-store/tools
sudo ./sgx_enable
sudo reboot
```

### 配置

在 configs 目录配置参数，大多参数可以直接使用默认值，需要特别注意如下几个参数，按用户实际情况配置：

- watcher.toml

  - identity： 与 bool 链交互的账户，用于签名，包括设备注册、设备在线、奖励获取等。 该账户同时是设备的拥有者。
  - boot_nodes：
  - peer_key：p2p 网络的通讯的身份。

- monitor.toml
  - private_key: 与目标链交互的签名账户，该账户将跨链的数据提交到目标链上。
  - http_url： 目标链的 JSON RPC 接口，建议到 Infura 等节点服务提供商申请自己的账户。

### 命令

开始挖矿

```bash

```

查看挖矿状态

```bash

```

停止挖矿

```bash

```

启动节点

```bash
docker run -itd -e RUST_LOG=debug -v /mnt/lky/data2:/data -p 30333:30333 -p 9944:9944 boolnetwork/bnk-node:pre-release --dev --rpc-cors 127.0.0.1 --validator --bootnodes /dns/node.bool.network/tcp/30334/p2p/12D3KooWRHfE3Qpm8iBrSrMDpeVwkmJ7nYHgjGyynYNwzwizg9wL --unsafe-ws-external
```

启动 database server

```bash
docker run --net=host -it --rm -e RUST_LOG=info  -v `pwd`/configs/db.toml:/bnk/db.toml -v `pwd`/data:/bnk/data boolnetwork/bnk-database:latest
```

启动 watcher server

```bash
docker run --net=host -it --rm -e RUST_LOG=info  -v `pwd`/configs/watcher.toml:/bnk/watcher.toml boolnetwork/bnk-watcher:latest
```

启动 SGX-KEY-SERVER

```bash
docker run --rm --net=host --device /dev/sgx/enclave --device /dev/sgx/provision -v `pwd`/configs/key.toml:/bnk/key.toml -p 9701:9701  -e RUST_LOG=info boolnetwork/bnk-sgx-key-server
```

启动 monitor

```bash
docker run --net=host -it --rm -e RUST_LOG=info  -v `pwd`/configs/monitor.toml:/bnk/monitor.toml -v `pwd`/data:/bnk/data boolnetwork/bnk-monitor:latest
```

## 问题

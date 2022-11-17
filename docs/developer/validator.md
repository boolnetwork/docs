# 运行验证节点

如何成为 BOOLNetwork 的验证节点，参与算法共识。

---

## 前言

BOOLNetwork 上运行的验证节点，不仅要为自己的利益负责，还要为现任提名人的利益负责，如果验证节点作恶被惩罚了，那么提名人也要连带责任，奖励和惩罚机制详细参考 NPos。验证节点非常有价值，它们保证网络的安全性。

### 需要质押多少 BOL

质押是必要的，目前在测试网阶段，只要少量从水龙头领取的代币。

## 启动节点

:::tip
官方未开源代码，因此不支持从源代码编译二进制。
:::

### 使用 Docker

Docker 运行是现在唯一方案，可以通过官方的镜像启动节点。你可以用一个简单的单行命令来完成:

```bash
docker run boolnetwork/bnk-node:latest --validator --name "name on telemetry"
```

:::tip
如果你想运行一个 RPC 服务节点，让第三方应用程序连接 例如 Polkadot.js Apps，或者运行你自己的应用程序。 使用标志`--unsafe-rpc-external` 和`--unsafe-ws-external` 来运行完整的节点，这样才能让外部访问 RPC 端口。更多的详细信息通过`docker run --rm boolnetwork/bnk-node:latest --help`查看。 如果想后台运行，则使用标志`-d`。
:::

**节点启动信息**

```text
2022-10-26 08:58:09 BoolNetwork Node
2022-10-26 08:58:09 ✌️  version 0.6.5-fd2757a-x86_64-linux-gnu
2022-10-26 08:58:09 ❤️  by BoolNetwork, 2021-2022
2022-10-26 08:58:09 📋 Chain specification: BoolNetwork Testnet
2022-10-26 08:58:09 🏷 Node name: name on telemetry
2022-10-26 08:58:09 👤 Role: AUTHORITY
2022-10-26 08:58:09 💾 Database: RocksDb at /bool/.local/share/bnk-node/chains/boolnetwork_testnet/db
2022-10-26 08:58:09 ⛓  Native runtime: moonbase-139 (moonbase-1.tx1.au1)
2022-10-26 08:58:09 🔨 Initializing Genesis block/state (state: 0xb597…b932, header-hash: 0xf45a…fbe8)
2022-10-26 08:58:09 👴 Loading GRANDPA authority set from genesis on what appears to be first startup.
2022-10-26 08:58:09 ⏱  Loaded block-time = 3000 milliseconds from genesis on first-launch
2022-10-26 08:58:09 👶 Creating empty BABE epoch changes on what appears to be first startup.
2022-10-26 08:58:09 🏷 Local node identity is: 12D3KooWPf5RWmdJfPEX3gvRqq6B9TAeHCsafVw7odmWcdNxavmh
```

:::info 节点同步例子

```text
2022-10-26 09:07:03 ✨ Imported #163667 (0xb005…ad0b)
2022-10-26 09:07:04 💤 Idle (1 peers), best: #163667 (0xb005…ad0b), finalized #163665 (0x9bd2…b9e2), ⬇ 1.3kiB/s ⬆ 0.9kiB/s
2022-10-26 09:07:06 ✨ Imported #163668 (0xe53e…5b3b)
2022-10-26 09:07:09 ✨ Imported #163669 (0x1453…d85f)
2022-10-26 09:07:09 💤 Idle (1 peers), best: #163669 (0x1453…d85f), finalized #163666 (0x78ff…5a4b), ⬇ 1.3kiB/s ⬆ 1.0kiB/s
2022-10-26 09:07:12 ✨ Imported #163670 (0x7450…ed20)
2022-10-26 09:07:14 💤 Idle (1 peers), best: #163670 (0x7450…ed20), finalized #163668 (0xe53e…5b3b), ⬇ 1.2kiB/s ⬆ 0.9kiB/s
```

:::

#### 设置节点密钥

要成为有效的验证人还需要设置[Session Keys](https://wiki.polkadot.network/docs/learn-keys#session-keys)。 通过如下步骤：

1. 进入 docker 环境

```bash
docker exec --it `CONTAINER_ID` bash
```

2. 在 docker 内执行命令行获取 Session Keys

```bash
curl -X POST http://127.0.0.1:9933 -H "Content-type: application/json" -d '{"id":1,"jsonrpc":"2.0","method":"author_rotateKeys","params":[]}'
```

你将得到如下：

```text
{"jsonrpc":"2.0","result":"0x963d40e26c1d69acf3f75f96cd7782576382713b650d2ea81f5c8dbeb3797e1f17df3a8ab0d3a2dc3218972fdebe47a4463523ae1bbc0a6c91f3b33ace76c0eb","id":1}
```

:::tip
请务必保存输出的公钥集`0x96***0eb`，为后续操作准备。
:::

## 硬件要求

- OS: Ubuntu 18.04 或者 Linux Kernel 5.16 .
- CPU：至少 4 核
- 内存：至少 16G 内存，越大越好
- 存储： 至少 1T SSD/HHD，越大越好
- 网络： 独立 IP，至少 20M 带宽，越大越好。

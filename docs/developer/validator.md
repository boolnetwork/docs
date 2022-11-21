# Run Validator Node

How to become a validator node of BOOLNetwork and participate in Algorithm consensus.

---

## Introduction

The validator node running on BOOLNetwork is not only responsible for its interests, but also for the interests of the nominators. If the validator node is punished for doing evil, the nominators should also be punished. Refer to NPos for details on the reward and punishment mechanism. The validator node is very valuable, they ensure the security of the network.

### How much BOL do you need to pledge?

Pledging is necessary, currently in the testnet stage, with only a small amount of tokens collected from the faucet.

## Startup Node

:::tip
The official source code is not open, so compiling binary from the source code is not supported.
:::

### Using Docker

Docker is the only solution right now, and Node can be started via the official images. You can do it with a simple command:

```bash
docker run boolnetwork/bnk-node:latest --validator --name "name on telemetry"
```

:::tip
If you want to run an RPC service Step, let third-party apps connect, such as Polkadot.js Apps, or run your own. Use the flags`--unsafe-rpc-external` and `--unsafe-ws-external` to run the full Node, which allows external access to the RPC port. See more details at `docker run --rm boolnetwork/bnk-node:latest --help`. If you want to run in the background, use the flag `-d`.
:::

**Node start information**

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

:::info Node synchronization example

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

#### Set Node Key

To be a valid validator you also need to set [Session Keys](https://wiki.polkadot.network/docs/learn-keys#session-keys). Follow these steps：

1. Enter the docker environment

```bash
docker exec --it `CONTAINER_ID` bash
```

2. Get `Session Keys` from the command line in docker

```bash
curl -X POST http://127.0.0.1:9933 -H "Content-type: application/json" -d '{"id":1,"jsonrpc":"2.0","method":"author_rotateKeys","params":[]}'
```

You will get the following：

```text
{"jsonrpc":"2.0","result":"0x963d40e26c1d69acf3f75f96cd7782576382713b650d2ea81f5c8dbeb3797e1f17df3a8ab0d3a2dc3218972fdebe47a4463523ae1bbc0a6c91f3b33ace76c0eb","id":1}
```

:::tip
Be sure to save the output public key set `0x96***0eb` for subsequent operations。
:::

## Hardware requirements

- OS: Ubuntu 18.04 or Linux Kernel 5.16.
- CPU At least 4 cores
- Memory: At least 16G memory, the bigger the better
- Storage: at least 1T SSD /HHD, the bigger the better
- Network: Independent IP, at least 20M bandwidth, the bigger the better.

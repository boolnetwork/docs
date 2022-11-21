# Run as Privacy Node

How to become a privacy node of BOOLNetwork and participate in privacy consensus

---

## Hardware requirements

:::tip

Privacy Nodes Must run in SGX Environment

:::

The Minimum Hardware Environments recommended to be Privacy Nodes are as follows:

- OS: Ubuntu 18.04
- CPU: At least 8 cores (SGX must support)
- RAM: at least 64G memory, the bigger the better
- Storage: at least 2T SSD /HHD, the bigger the better
- Network: Independent IP, at least 20M bandwidth, the bigger the better.

|             | CPU                                                                                                             | Motherboard                      | RAM                     | Storage                                                                                                            | Network       | OS           |
| ----------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------- | ------------ |
| requirement | 1. Support SGX (Software Guard Extensions; 2.Intel i5 7th generation or later; 3. Number of cores Eight or more | The BIOS supports  enabling SGX1 | Total capacity >= 64 GB | The data is stored on all nodes in the storage chain. If the data continues to grow, more than 2 TB is recommended | 20M Bandwidth | Ubuntu 18.04 |
| basic       | intel Core i5-9600KF or intel Core i7-7700K or intel Core i7-10700                                              | BIOS support SGX1                | two 32GB DDR4 memory    | 2T m.2 SSD                                                                                                         | 20M Bandwidth | Ubuntu 18.04 |
| middle      | intel Core i5-9600KF or intel Core i7-7700K or intel Core i7-10700                                              | BIOS support SGX1                | four 32GG DDR4 memory   | 2T m.2 SSD                                                                                                         | 20M Bandwidth | Ubuntu 18.04 |

## Quick start

### Download scripts

```bash
git clone https://github.com/boolnetwork/mining-scripts.git
cd mining-scripts
```

### Activate SGX software

:::tip

According to the [Intel SGX processors](https://www.intel.com/content/www/us/en/support/articles/000028173/processors.html) to see if the current CPU supports SGX

:::

### Configure

Configure each service startup parameter in the configs directory. Most of the parameters can directly use the default values. You need to pay special attention to the following parameters and configure them according to the real condition:

- watcher.toml

  - identity： The account that interacts with the BOOLNetwork blockchain and is used for signing, including device registration, device online, reward acquisition, etc. The account is also the owner of the device.
  - boot_nodes：Bootstrap node for p2p networks.

- monitor.toml
  - private_key: The account that interacts with the target chain and submits cross-chain data to the target chain.
  - http_url： The target chain JSON RPC interface, it is recommended to apply for your account with Blockchain service providers such as Infura, and Alchemy.

### Create Identity

```bash
docker run -it --rm boolnetwork/bnk-node:pre-release identity generate
```

Output:

```text
Secret seed:      0x71235e1458ce9d140c8b8ded28ccc1e32e62c340aef51a65e1350a387dbe08a6
Public key (hex): 0x0248e7f02dcc9f7061a090b67dede93d7381847e94955aee7996603d2225e9f77e
Account ID:       0x34a5572cb21d34354e3091564d5edc7b791e9d5f
```

Get testnet coin:

```bash
curl https://bot.bool.network/coin/0x34a5572cb21d34354e3091564d5edc7b791e9d5f
```

### Command

Start the service via docker-compose.

#### Start running

```bash
docker-compose up -d
```

#### View run logs

```bash
docker-compose logs
```

#### Stop running

```bash
docker-compose stop
```

#### Update images

```bash
docker-compose pull
```

### Start the service singly

For the run instruction, we can break it down into the following services:

:::info

We need to focus on the data persistence of the running service. In the example, the key data directory has been disk mapped.

:::

#### Start the BOOLNetwork Node service

```bash
docker run --net=host --rm -e RUST_LOG=info -v `pwd`/data:/data boolnetwork/bnk-node:latest --unsafe-ws-external
```

#### Start the database service

```bash
docker run --net=host --rm -e RUST_LOG=info  -v `pwd`/configs/db.toml:/bnk/db.toml -v `pwd`/data:/bnk/data boolnetwork/bnk-database:latest
```

#### Start the watcher service

```bash
docker run --net=host --rm -e RUST_LOG=info  -v `pwd`/configs/watcher.toml:/bnk/watcher.toml boolnetwork/bnk-watcher:latest
```

#### Start SGX Private Key Service

```bash
docker run --rm --net=host --device /dev/sgx/enclave --device /dev/sgx/provision -v `pwd`/configs/key.toml:/bnk/key.toml -p 9701:9701  -e RUST_LOG=info boolnetwork/bnk-sgx-key-server
```

#### Start the chain monitoring service

```bash
docker run --net=host --rm -e RUST_LOG=warn,info=bnk_monitor  -v `pwd`/configs/monitor.toml:/bnk/monitor.toml -v `pwd`/data:/bnk/data boolnetwork/bnk-monitor:latest
```

#### Start the relay service

To become a relay, you need to execute the following command

```bash
docker run --net=host --rm -e RUST_LOG=debug boolnetwork/bnk-relayer:latest -w=http://127.0.0.1:8720 -m=http://127.0.0.1:8740 -p=8750
```

Parameter description:

- `-w`：Access link for the observer service.
- `-m`: The access link for the chain monitoring service.
- `-p`: The default value is `3000`, which needs to be filled in according to the configuration file, here is `8750`

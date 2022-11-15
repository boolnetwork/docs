# 参与

参与 BOOLNetwork 测试网，体验不一样的跨链方案。

---

BOOL Network 是一个去中心化的、安全的、隐私的全链互操作网络。该网络是无准入限制的，任何人都可以在其上构建去中心化的全链互操作协议如跨链桥，支持以稳定、高效以及低成本方式使全链（如异构链和预言机）互联互通。众所周知，所有的全链互操作行为可以简化为由一个中继人将一个区块链信息（或者链下数据）投递到另外一个区块链内，但是安全的且去中心的可信中继人是难以实现的。为了解决这个问题，我们设计了一种基于 MPC、ZKP 和 TEE 技术的中继人基础层（Layerbase）网络。更具体的说，该网络提供了一种隐私的动态委员会机制来管理私钥，它能与主流区块链的核心公私钥机制完美兼容，并使用 BOOL 独创的 环可验证随机函数(Ring VRF) 选举算法和 P2P 网络保证委员会成员身份的隐私性。与此同时，所有委员会的程序运行在 TEE 中，保证关键组件的保密性和完整性。（备注：典型的中继人有中继链、中间人、预言机和中心化机构等；全链互操作：不仅表示链与链之间的连接还表示链下和链上的连接。）

BOOL Network 存在四种角色：

1. 全节点——维护区块稳定；
2. 设备供应商——提供 TEE 设备；
3. 跨链桥供应商——提供跨链桥服务；
4. 中继人——跨链服务中提供目标链上链服务；

## 应该用什么钱包

BOOLNetwork 链的账户是以太坊兼容的，因此安装了 Metamask 插件的浏览器能与链快速交互， 参考[钱包](/tools/wallet)。

## 如何获取测试币

官方提供了[水龙头](https://faucet.bool.network/)免费领取测试币。为了领取测试币，你只要输入由 MetaMask 等钱包上创建的地址，我们不会让你输入其他任何账户信息。请等待几秒钟到账。

**获取其他测试币**

如果你需要获取更多非官方测试链的资产，并与 BOOLNetwork 链交互。你可以尝试如下水龙头：

- [Goerli 水龙头](https://goerli-faucet.mudit.blog)(Goerli)
- [Polygon 测试网水龙头](https://faucet.polygon.technology/)(Polygon Mumbai)
- [Binance 测试网水龙头](https://testnet.binance.org/faucet-smart)(BSC Testnet)

## 通过以下任一方式加入
### [验证人与提名人](/testnet/staking)
### [设备供应商](/testnet/device-provider)
### [跨链桥供应商](/testnet/bridge-provider)
### [中继人](/testnet/relayer)
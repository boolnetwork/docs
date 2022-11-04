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

### 参与算法共识

#### 加入提名人节点

1. 进入控制面板-节点板块，选择成为提名人（已成为提名人需先停止，然后重新选择成为验证人）

![join_node](/img/testnet/join_node.png)

2. 选择被提名人（即验证人），最多可选择 16 个

![select_validator](/img/testnet/select_validator.png)

3. 设置质押数量及收入分配
   继续质押：所获奖励继续质押到账户，
   直接收益：所获奖励不继续质押，转到个人可领取账户。

![set_nominator](/img/testnet/set_nominator.png)

4. 配置完成即可创建成功

![nominator_completed](/img/testnet/nominator_completed.png)

#### 加入验证人节点

1. 参考开发者-运行验证节点板块，运行相关节点
2. 进入控制面板-节点板块，选择成为验证人（已成为提名人需先停止，然后选择成为验证人）

![join_validator](/img/testnet/join_validator.png)

3. 设置费率、是否允许第三方加入及 RotateKey：
   费率：成为该验证人的提名人每获得单位奖励需支付的费率；
   允许新提名：允许则第三方可成为提名人，反之则不可；
   RotateKey：节点程序运行时提供，用于绑定账户及验证人节点关系。
   设置质押数量及收入分配：
   继续质押：所获奖励继续质押到账户，
   直接收益：所获奖励不继续质押，转到个人可领取账户。

![set_validator](/img/testnet/set_validator.png)

4. 配置完成，创建成功。

![validator_completed](/img/testnet/validator_completed.png)

#### 加入设备供应商

1. 参考开发者-运行隐私节点板块，运行隐私节点程序

2. 使用钱包账户登录 Dashboard

![connect_wallet](/img/testnet/connect_wallet.png)

3. Dashboard-Device 页等待设备上线，上线后初始状态为“未上架”

![dashboard_device](/img/testnet/dashboard_device.png)

4. Dashboard-Provider 页创建 Provider

![create_provider](/img/testnet/create_provider.png)

5. 配置设备状态-绑定 PID

:::: tip
绑定刚刚创建的 Provider ID
::::

![set_provider](/img/testnet/set_provider.png)

6. 配置设备状态-开始工作（工作后享受基础奖励）

![start_minting](/img/testnet/start_minting.png)

7. 配置设备状态-加入隐私服务（享受服务奖励，可不加入）

![start_service](/img/testnet/start_minting.png)

#### 加入跨链桥供应商

1. 首先进入并登录 Dsahboard-Committee 板块，创建委员会(1 个跨链桥至少需要 2 组委员会)

![create_committee](/img/testnet/create_committee.png)

2. 设置成员数及委员会副本数量

![set_committee](/img/testnet/set_committee.png)

3. 设置完成后提交即可成功创建委员会

![committee_completed](/img/testnet/committee_completed.png)

4. 切换到 Dsahboard-Bridge 板块，创建跨链桥。（Token 为跨链兑换币种，链选择多条部署即可相互跨转）

![create_bridge](/img/testnet/create_bridge.png)

5. 部署跨链合约

![deploy_contract](/img/testnet/deploy_contract.png)

6. 部署完成

![bridge_completed](/img/testnet/bridge_completed.png)

### 参与隐私共识

### 创建委员会

### 创建桥

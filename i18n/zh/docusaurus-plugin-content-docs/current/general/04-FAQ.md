# FAQ

一些最常被问到的问题。

---

## 技术

### BOOLNetwork 的桥与其他桥有什么区别？

BOOLNetwork 本质是另一个采用 TEE 节点网络作为外部验证者的 AMB 桥项目。 为保证跨链资产安全性，BOOLNetwork 在此基础上做了增加了 TEE 节点的轮值和匿名选举机制。不仅让外部攻击难上加难，而且几乎可以杜绝内部串谋。

### MPC 技术在本产品在怎么被应用的？

我们的动态委员会应用了 MPC 技术。管理一个委员会的所有节点通过 MPC 技术对待验证的信息进行签名。

### Ring VRF protocol 是怎样实现的？

Ring VRF 主要是对委员会节点的身份信息进行隐私保护，实现委员会匿名的动态轮值。它的算法细节较为复杂，具体的实现方式在我们的[论文](https://ieeexplore.ieee.org/document/9903072)中有详细的论证。

### 动态委员会是什么？扮演了什么样的角色？

动态委员会类似是跨链交易中的公证人，负责目标事件的监听和验证，对目标链交易进行签名。

### BOOL 链扮演了什么样的角色？

BOOL 链可视为一个公开的可信的分布式账本，一方面记录动态委员会的全生命流程（从创建到换届到销毁）保证委员会的行为真实可信。 另一方面用于记录跨链消息，并对消息共识，满足消息全链追踪。

### 如何在 BOOLNetwork 上开发

目前是测试网，您可以在 BoolScan 的[控制面板]创建跨链兼容的桥。请关注我们的 [Twitter](https://twitter.com/Bool_Official) 和 [Discord](https://discord.gg/DVd4q9qq7a)，了解我们的更新。

## 测试网

### 如何获取测试币 BOL

BOOLNetwork 账户体系与以太坊相同。官方提供了[水龙头](https://faucet.bool.network/)免费领取测试币。

### 测试币 BOL 是否有价值

没有，现阶段测试币 BOL 没有价值。在测试网网络上操作或获取 BOL 只是为了测试，参与节点质押、申请参与委员会选举的门票、支付跨链手续费。

:::tip
如果你有问题没有在这里回答，请在我们的 [Discord](https://discord.com/invite/DVd4q9qq7a) 上提问!我们的团队和生态系统始终在线，随时准备讨论新的想法和问题。
:::
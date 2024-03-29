# 术语

与 BOOLNetwork 平台、网络、工具和区块链技术相关的关键术语列表。

---

## 可信执行环境

TEE 的全称 trusted execution environment，它是移动设备（智能手机、平板电脑、智能电视）CPU 上的一块区域。这块区域的作用是给数据和代码的执行提供一个更安全的空间，并保证它们的机密性和完整性。

TEE 在安全方面注重如下： 开放环境的使用，使得设备暴漏于各种攻击之下； 隐私，个人信息如联系人，短消息，照片，视频等，需要不被盗窃，丢失或者受到恶意软件的攻击； 内容保护，对于 DRM 而言，条件接收服务或者内容保护的许可等也倾向于使用硬件级别的保护； 公司数据，比如登陆 VPN 的凭据等的保护； 连接性保护，在 3G，4G，wifi，乃至 NFC 等方面，密钥资源的保护； 金融风险，比如金融交易中的用户交互数据（交易内容，交易额，用户输入 PIN 等）。

## Intel SGX

Intel® Software Guard Extensions (Intel® SGX)保护选定的代码和数据不被泄露和修改。开发者可以把应用程序划分到 CPU 强化的 encalve（飞地）中或者内存中可执行的保护区域，即使在受攻击的平台中也能提高安全性。使用这种新的应用层可信执行环境，开发者能够启用身份和记录隐私、安全浏览和数字管理保护（DRM）或者任何需要安全存储机密或者保护数据的高保障安全应用场景中。

机密性和完整性：即使在 OS、BIOS、VMM 或者 SMM 层存在特权恶意软件的情况下也能保证。 低学习曲线：和父应用程序类似的 OS 编程模型，并且在主 CPU 上执行。 远程认证和提供：远程部分能够认证一个应用程序 enclave 的身份，并且安全地将密钥、凭据和敏感数据提供给 enclave。 最小可能的攻击面：CPU 边界成为攻击面外围，所有的数据、内存、外围之外的 I/O 都是加密的。

## 安全多方计算

安全多方计算（Secure Muti-party Computation，简称 MPC，亦可简称 SMC 或 SMPC）问题首先由华裔计算机科学家、图领奖获得者姚期智教授于 1982 年提出。简单来说，安全多方计算协议作为密码学的一个子领域，其允许多个数据所有者在互不信任的情况下进行协同计算，输出计算结果，并保证任何一方均无法得到除应得的计算结果之外的其他任何信息。

## 门限签名方案

门限签名方案（Threshold Signature Scheme）是一种多方安全计算协议，由门限秘密共享技术和数字签名技术组成。 1991 年，Desmedt-Frankel 首次提出了(t,n)门限签名方案。(t,n)门限签名方案是指由 n 个成员组成一个签名群体，该群体有一对公钥和私钥，群体内大于等于 t 个合法、诚实的成员组合可以代表群体用群私钥进行签名，任何人可利用该群体的公钥进行签名验证。

## 零知识证明

零知识证明的英文全称是 Zero-knowledge Proofs，简写为 ZKP ，是一种非常有用的密码学方法。零知识证明的本质就是在不揭晓我所知道或拥有的某样东西的前提下，向别人证明我有很大几率（零知识证明说到底是一个概率上的证明）确实知道或拥有这个东西。更通俗的说，证明者（prover）能够在不向验证者（verifier）提供任何有用信息的情况下，使验证者（verifier）相信某个论断是正确的。

## Substrate

由 Parity 一个基于 rust 的开发区块链框架。Substrate 附带了构建区块链所需的许多模块和功能，包括 P2P 网络、共识机制、质押、加密货币、链上治理模块等等，它大大减少了实现区块链所需的时间和工程工作。

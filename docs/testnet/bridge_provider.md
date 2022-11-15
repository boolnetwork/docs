# 跨链桥供应商

提供跨链桥用于完成跨链需求获取收益

---

1. 首先进入并登录 Dsahboard-Committee 板块，创建委员会(1 个跨链桥至少需要 2 组委员会)
![create_committee](/img/testnet/create_committee.png)

2. 设置成员数及委员会副本数量
- **成员数**: 委员会单个副本的成员数，成员越多该委员会越安全，但签名时间会变长
- **委员会副本数**：委员会不同副本的签名权益相同，彼此为良性竞争关系
- 
![set_committee](/img/testnet/set_committee.png)

3. 设置完成后提交即可成功创建委员会
- **委员会创建需要一定时间，显示公钥即表示该委员会创建成功，可用于部署跨链桥**

![committee_completed](/img/testnet/committee_completed.png)

4. 切换到Dsahboard-Bridge板块，创建跨链桥。（Token 为跨链兑换币种，链选择多条部署即可相互跨转，选择）

![create_bridge](/img/testnet/create_bridge.png)

5. 选择对应链以及委员会进行跨链合约部署

![deploy_contract](/img/testnet/deploy_contract.png)

6. 部署完成后点击提交，跨链桥创建完成

![bridge_completed](/img/testnet/bridge_completed.png)
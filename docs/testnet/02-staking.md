# 验证人与提名人

申请成为验证人参与出块或提名人进行质押来获取收益

---
## 加入提名人节点

1. 进入控制面板-节点板块，选择成为提名人（已成为验证人需先停止，然后重新选择成为提名人） 

![join_node](/img/testnet/join_node.png)

2. 选择被提名人（即验证人），最多可选择 16 个

![select_validator](/img/testnet/select_validator.png)

3. 设置质押数量及收入分配
   继续质押：领取所获奖励时将资金继续质押到账户。
   直接收益：领取所获奖励时所获奖励不继续质押，转到个人可领取账户。

![set_nominator](/img/testnet/set_nominator.png)

4. 配置完成即可创建成功，质押金额激活需等待一定周期，如果提名了多名验证人， 
   对每位验证人的质押分配将在质押金额激活时由[phragmen算法](https://wiki.polkadot.network/docs/learn-phragmen)决定。

![nominator_completed](/img/testnet/nominator_completed.png)

## 加入验证人节点

1. 参考[开发者-运行验证节点板块](/developer/validator)，运行相关节点
2. 进入控制面板-节点板块，选择成为验证人（已成为提名人需先停止，然后选择成为验证人）

![join_validator](/img/testnet/join_validator.png)

3. 设置费率、是否允许第三方加入及 RotateKey：
- **费率**: 分发奖励时验证人所收取的奖励比例，对于其他条件相同的验证人，
费率越低意味着提名人所获奖励越多；
- **允许新提名**: 允许则第三方可成为该验证人的提名人，反之则不可；
- **RotateKey**: 节点程序运行时提供，用于绑定账户及验证人节点关系。
- **设置质押数量及收入分配**: 继续质押：所获奖励继续质押到账户，
直接收益：所获奖励不继续质押，转到个人可领取账户。

![set_validator](/img/testnet/set_validator.png)

4. 配置完成，创建成功。成为验证人需等待一定周期，被选中后不参与出块人会产生相应惩罚，扣除部分质押。

![validator_completed](/img/testnet/validator_completed.png)

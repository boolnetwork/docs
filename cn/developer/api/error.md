# Error

---

Some pallet error about bool network

- **[facility](#facility)**
- **[mining](#mining)**
- **[committee](#committee)**
- **[staking](#staking)**



## facility

### InvalidReport => 无效的设备注册报告

### InvalidSignature => 签名错误

### NotRegister => 设备未注册

### LowVersion => 版本过低  

### DIdentityExist => 设备已绑定报告

### HashExist => 哈希重复

### DeviceExist => 设备已注册

### NotOwner => 所有权错误

### DeviceWorking => 设备已工作

### InvalidVersion => 版本错误

## mining

### NotProvider => 无效供应商id

### InvalidIdentity => 设备所有权错误

### NoDevice => 供应商未绑定该设备

### DeviceAlreadyBind => 供应商已绑定该设备

### NotEnoughBalance => 可用余额不足

### InvalidWithdrawalAmount => 赎回金额过大

### PledgeOverFlow => 超出供应商质押容量上限

### StakeInfoNotExist => 未质押该供应商

### NoRewardToClaim => 没有可领取的奖励

### InvalidCapacity => 质押设置量过小

### StakingUsrOverflow => 供应商被质押人数超过上限

### CoolDown => 赎回奖励操作冷却中

### InvalidSession => 心跳周期错误

### InvalidIndex => 索引错误

### ProviderInvalidStatus => 供应商状态错误

### DeviceInvalidStatus => 设备状态错误

### RetainMintPledge => 供应商赎回金额过大

### InvalidPids => 无效的供应商id

## committee

### InvalidParams => 参数错误

### InvalidChannelState => 跨链桥状态错误

### InvalidCommitteeState => 委员会状态错误

### NotMember => 非委员会成员

### MissionStateNormal => 跨链签名任务状态正常

### NotChannelCreator => 跨链器所有权错误

### NotCommitteeCreator => 委员会所有权错误

### RegistersNotEnough => 设备加入服务数不足

### AddressExist => 委员会已绑定合约地址

### CandidateExist => 委员会候选人重复

### InvalidForkId => 无效的副本id

### DuplicateChange => 换届报告重复

### IncorrectCandidate => 委员会候选人已满

### CommitteeAlreadyUsed => 委员会已绑定跨链桥

### IncorrectCid => 无效的委员会id

### DeviceNotServing => 设备未加入服务

### InvalidDeviceState => 设备状态错误

### MissionTimeout => 签名任务已超时

## staking

### AlreadyBonded => 虚拟账户已绑定

### AlreadyPaired => 虚拟账户已存在

### InsufficientValue => 质押数目过低

### BadState => 无效账户

### CallNotAllowed => 候选人选举期，无法操作

### NotStash => 虚拟账户未创建

### NotController => 虚拟账户所有权错误

### NoMoreChunks => 质押减少次数已达上限

### EmptyTargets => 验证人列表为空

### TooManyTargets => 验证人列表过长

### BadTarget => 该验证人不允许被提名

### InvalidEraToReward => 无效的奖励周期

### AlreadyClaimed => 该周期奖励已领取


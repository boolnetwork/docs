# Error

---

Some pallet error about bool network

- **[facility](#facility)**
- **[mining](#mining)**
- **[committee](#committee)**
- **[staking](#staking)**

## facility

### InvalidReport => Invalid device registration report

### InvalidSignature => Signature error

### NotRegister => The device is not registered

### LowVersion => The version is too early

### DIdentityExist => A report has been bound to the device

### HashExist => The transaction hash repetition

### DeviceExist => The device has been registered

### NotOwner => Operator ownership error

### DeviceWorking => The device is working

### InvalidVersion => invalid device version

## mining

### NotProvider => Invalid provider Id

### InvalidIdentity => device ownership error

### NoDevice => The provider does not bind the device

### DeviceAlreadyBind => The Provider has bound the device

### NotEnoughBalance => Insufficient available balance

### InvalidWithdrawalAmount => Redemption amount is too large

### PledgeOverFlow => The provider's pledge capacity is exceeded

### StakeInfoNotExist => The provider was not pledged

### NoRewardToClaim => There are no claimable rewards

### InvalidCapacity => The amount of pledge setting is too small

### StakingUsrOverflow => The number of provider pledged exceeded the limit

### CoolDown => Redemption reward operation cooldown

### InvalidSession => The proof of heartbeat cycle error

### InvalidIndex => Error of index

### ProviderInvalidStatus => provider status error

### DeviceInvalidStatus => Device status error

### RetainMintPledge => The provider redemption amount is too large

### InvalidPids => Invalid vendor id

## committee

### InvalidParams => Committee parameter error

### InvalidChannelState => The status of the cross-chain bridge is incorrect

### InvalidCommitteeState => Committee status error

### NotMember => Non-committee Member

### MissionStateNormal => The cross-chain signature task status is normal

### NotChannelCreator => Cross-chain ownership error

### NotCommitteeCreator => Committee ownership error

### RegistersNotEnough => The number of devices added to the service is insufficient

### AddressExist => The committee has bound the contract address

### CandidateExist => Committee candidates repeat

### InvalidForkId => Invalid committee copy id

### DuplicateChange => The transition report is repeated

### IncorrectCandidate => The committee is full of candidates

### CommitteeAlreadyUsed => The council has bound the cross-chain bridge

### IncorrectCid => Invalid committee id

### DeviceNotServing => The device is not added to the service

### InvalidDeviceState => Device status error

### MissionTimeout => The signature task timed out

## staking

### AlreadyBonded => The virtual account has been bound

### AlreadyPaired => The virtual account already exists

### InsufficientValue => The number of pledges is too low

### BadState => Invalid account

### CallNotAllowed => Candidate election period, unable to operate

### NotStash => The virtual account is not created

### NotController => Incorrect virtual account ownership

### NoMoreChunks => The number of pledge reductions has reached its limit

### EmptyTargets => The validator list is empty

### TooManyTargets => The authenticator list is too long

### BadTarget => The verifier is not allowed to be nominated

### InvalidEraToReward => Invalid reward cycle

### AlreadyClaimed => This cycle award has been received

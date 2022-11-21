# Constants

---

The following sections contain Constants methods are part of the BoolNetwork runtime. On the api, these are exposed via `api.consts.<module>.<method>`.

- **[mining](#mining)**
- **[committee](#committee)**

---

## mining

### eraBlockNumber: `u32`

- **interface**: `api.consts.mining.eraBlockNumber`
- **summary**: Heartbeat epoch.

### maxUser: `u8`

- **interface**: `api.consts.mining.maxUser`
- **summary**: Max user number deposit to provider.

### mintPledge: `u128`

- **interface**: `api.consts.mining.mintPledge`
- **summary**: Min balance provider must deposit to self.

### punishAmount: `u128`

- **interface**: `api.consts.mining.punishAmount`
- **summary**: Balance to punish offline device(standby -> offline).

### rewardSession: `u32`

- **interface**: `api.consts.mining.rewardSession`
- **summary**: Rewards epoch to distributed.

---

## committee

### changeDuration: `u32`

- **interface**: `api.consts.committee.changeDuration`
- **summary**: Duration for committee to ReShare.

### epochDuration: `u32`

- **interface**: `api.consts.committee.epochDuration`
- **summary**: Committee's epoch.

### rvrfDuration: `u32`

- **interface**: `api.consts.committee.rvrfDuration`
- **summary**: Duration for devices to enter.

### timeLimit: `u32`

- **interface**: `api.consts.committee.timeLimit`
- **summary**: Tx valid limit.

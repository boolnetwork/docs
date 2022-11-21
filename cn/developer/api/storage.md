# Storage

---

The following sections contain Storage methods are part of the BoolNetwork runtime. On the api, these are exposed via `api.query.<module>.<method>`.

custom type:

```
"DIdentity": {
    "version": "u16",
    "pk": "Vec<u8>"
},
"Device": {
    "owner": "AccountId",
    "did": "DIdentity",
    "report": "Vec<u8>",
    "state": "DeviceState"
},
"DeviceState": {
    "_enum": [
      "Unmount",
      "Stop",
      "Standby",
      "Offline",
      "Serving",
      "TryExit"
    ]
},
"StakingState": {
    "user": "AccountId",
    "locked": "Balance",
    "start_time": "u64"
},
"ProviderId": "u32",
"ProviderInfo": {
    "pid": "ProviderId",
    "owner": "AccountId",
    "devices": "Vec<DIdentity>",
    "cap_pledge": "Balance",
    "total_pledge": "Balance",
    "score": "u128",
    "rewards": "Balance",
    "punishment": "Balance",
    "staking_user_num": "u8",
    "status": "ProviderState"
},
"ProviderState": {
    "_enum": [
      "Stop",
      "Working"
    ]
},
"StakeInfo": {
    "locked": "Balance",
    "available_rewards": "Vec<(ProviderId, DIdentity, Balance)>"
},

"CommitteeId": "u32",
"CommitteeState": {
    "_enum": [
      "Creating",
      "Initializing",
      "Stop",
      "Working",
      "CreateFinished"
    ]
},
"ChannelState": {
    "_enum": [
      "Stop",
      "Working"
    ]
},
"CryptoType": {
    "_enum": [
      "Ecdsa",
      "Bls",
      "Schnorr"
    ]
},
"Channel": {
    "channel_id": "u32",
    "info": "Vec<u8>",
    "cids": "Vec<(CommitteeId, u32)>",
    "state": "ChannelState"
},
"Parameters": {
    "t": "u16",
    "n": "u16"
},
"Committee": {
    "cid": "CommitteeId",
    "epoch": "u32",
    "parameters": "Parameters",
    "pubkey": "Vec<u8>",
    "state": "CommitteeState",
    "crypto": "CryptoType",
    "fork": "u8",
    "channel_id": "u32",
    "chain_id": "u32",
    "anchor": "Vec<u8>"
  },
"TxSource": {
    "chain_type": "u16",
    "uid": "Vec<u8>",
    "from": "Vec<u8>",
    "to": "Vec<u8>",
    "amount": "U256"
},
"BlockNumber": "u32",
"TxMessage": {
    "cid": "u32",
    "epoch": "u32",
    "sid": "u64",
    "msg": "Vec<u8>",
    "txsource": "TxSource",
    "signature": "Vec<u8>",
    "time_limit": "BlockNumber",
    "choose_index": "Vec<u16>",
    "status": "TxStatus"
},
"EpochChange": {
    "msg": "Vec<u8>",
    "signature": "Vec<u8>",
    "pubkey": "Vec<u8>"
},
"TxStatus": {
    "_enum": [
      "Unsigned",
      "Finished",
      "Abnormal"
    ]
}
```

- **[facility](#facility)**
- **[mining](#mining)**
- **[committee](#committee)**

---

## facility

### rootSigner(): `Vec<u8>`

- **interface**: `api.query.facility.rootSigner`
- **summary**: Get root signer pk.

### deviceInfo(`DIdentity`): `Device`

- **interface**: `api.query.facility.deviceInfo`
- **summary**: Get device info from a did.

### deviceAmount(): `u16`

- **interface**: `api.query.facility.deviceAmount`
- **summary**: Amount of all device.

### reportToIdentity(`DIdentity`): `Vec<u8>`

- **interface**: `api.query.facility.reportToIdentity`
- **summary**: Get report belong to did.

### versionToPk(`Vec<u8>`): `u16`

- **interface**: `api.query.facility.versionToPk`
- **summary**: Get version about the device.

### hashToVersion(`u16`): `Vec<u8>`

- **interface**: `api.query.facility.hashToVersion`
- **summary**: Get hash bind with the version.

### versionList(): `Vec<u16>`

- **interface**: `api.query.facility.versionList`
- **summary**: Get version list on the chain.

---

## mining

### pid(): `ProviderId`

- **interface**: `api.query.mining.pid`
- **summary**: Get total number about provider.

### providerToPid(`ProviderId`): `ProviderInfo`

- **interface**: `api.query.mining.providerToPid`
- **summary**: Get provider info from a pid.

### stakeLedger(`AccountId32`): `StakeInfo`

- **interface**: `api.query.mining.stakeLedger`
- **summary**: Account's all locked balance and available rewards for all pid and device.

### stakingList(`ProviderId`): `Vec<StakingState>`

- **interface**: `api.query.mining.stakingList`
- **summary**: User list for provider about pledge info.

### challenges(`u32`): `U256`

- **interface**: `api.query.mining.challenges`
- **summary**: Get challenges number about the session.

### workingDevices(`u32`): `Vec<(DIdentity, bool)>`

- **interface**: `api.query.mining.workingDevices`
- **summary**: Get device list need to send heartbeat.

### scoreToDid(`DIdentity`): `u128`

- **interface**: `api.query.mining.scoreToDid`
- **summary**: Get device's score.

### accountPids(`AccountId32`): `Vec<ProviderId>`

- **interface**: `api.query.mining.accountPids`
- **summary**: Get all pids belong to account.

---

## committee

### cid(): `CommitteeId`

- **interface**: `api.query.committee.cid`
- **summary**: Total committee numbers.

### channelId(): `u32`

- **interface**: `api.query.committee.channelId`
- **summary**: Total channel numbers.

### channelInfo(`u32`): `Channel`

- **interface**: `api.query.committee.channelInfo`
- **summary**: Get channels' information.

### channelCreator(`u32`): `AccountId32`

- **interface**: `api.query.committee.channelCreator`
- **summary**: Creator for channel.

### sids(`CommitteeId`): `u64`

- **interface**: `api.query.committee.sids`
- **summary**: Transaction number for every committee.

### committees(`CommitteeId`): `Committee`

- **interface**: `api.query.committee.committees`
- **summary**: Get committee info.

### committeeCreate(`CommitteeId`): `AccountId32`

- **interface**: `api.query.committee.committeeCreate`
- **summary**: Creator for committee.

### registers(): `Vec<DIdentity>`

- **interface**: `api.query.committee.registers`
- **summary**: All devices join into the pool and ready to enter committee.

### snapshot(): `Vec<Vec<u8>>`

- **interface**: `api.query.committee.snapshot`
- **summary**: Registered devices' snapshot for vrf and update by session.

### committeeMembers(`CommitteeId, (u32, u8)`): `Vec<Vec<u8>>`

- **interface**: `api.query.committee.committeeMembers`
- **summary**: Current working committee members at target epoch and fork_id.

### candidates(`CommitteeId, (u32, u8)`): `Vec<Vec<u8>>`

- interface: `api.query.committee.candidates`
- **summary**: Current working committee candidates at target epoch and fork_id.

### txMessages(`CommitteeId, H256`): `TxMessage`

- **interface**: `api.query.committee.txMessages`
- **summary**: Tx messages info about the committee and hash.

### cRandomness(`CommitteeId, u32`): `u64`

- **interface**: `api.query.committee.cRandomness`
- **summary**: The epoch randomness for committees' current epoch.

### epochChanges(`(CommitteeId, u32)`): `Vec<(u8, EpochChange)>`

- **interface**: `api.query.committee.epochChanges`
- **summary**: Epoch change message(e.g. signature) submitted by new epoch members.

### rewardsForFork(`(CommitteeId, u32, u8)`): `(u128, Vec<Vec<u8>>)`

- **interface**: `api.query.committee.rewardsForFork`
- **summary**: Rewards for committee's fork_id at the epoch

### voteForFork(`(CommitteeId, u32, u8, Vec<u8>)`): `Vec<Vec<u8>>`

- **interface**: `api.query.committee.voteForFork`
- **summary**: Report evil vote about the members.

### committeeTime(`CommitteeId`): `(u32, u32)`

- **interface**: `api.query.committee.committeeTime`
- **summary**: Create time and Working time about the committee.

---

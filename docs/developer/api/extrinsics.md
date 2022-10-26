# Extrinsics

---

The following sections contain Extrinsics methods are part of the BoolNetwork runtime. On the api, these are exposed via `api.tx.<module>.<method>`.

custom type:

```
"ExitParameters": {
    "_enum": {
      "Normal": "Vec<ProviderId>",
      "Force": "(CommitteeId, u8, Vec<u8>, Vec<u8>)"
    }
},
"HandleConnection": {
    "_enum": {
      "Cid": "CommitteeId",
      "CommitteeParam": "(u16, u16, (u128, u128), CryptoType, u8)"
    }
},
```

- **[facility](#facility)**
- **[mining](#mining)**
- **[committee](#committee)**

## facility

### register(report: `Vec<u8>`, version: `u16`, signature: `Vec<u8>`)

- **interface**: `api.tx.facility.register`
- **summary**: Register device.

### unregister(pre_did: `DIdentity`)

- **interface**: `api.tx.facility.unregister`
- **summary**: Unregister device.

### issue(version: `u16`, enclave_hash: `Vec<u8>`)

- **interface**: `api.tx.facility.issue`
- **summary**: Update version list.

### updateIdentity(did: `DIdentity`, new_version: `u16`)

- **interface**: `api.tx.facility.updateIdentity`
- **summary**: Upgrage device's version.
- ***

## mining

### create(cap: `u128`)

- **interface**: `api.tx.mining.create`
- **summary**: Create a new provider with set max pledge capacity.

### mount(pid: `ProviderId`, did: `DIdentity`)

- **interface**: `api.tx.mining.mount`
- **summary**: Mount a device to a provider.

### partMount(pid: `ProviderId`, dids: `Vec<DIdentity>`)

- **interface**: `api.tx.mining.partMount`
- **summary**: Mount a batch of devices to provider.

### unmount(pid: `ProviderId`, did: `DIdentity`)

- **interface**: `api.tx.mining.unmount`
- **summary**: Mount a device to a provider.

### partUnmount(pid: `ProviderId`, dids: `Vec<DIdentity>`)

- **interface**: `api.tx.mining.partUnmount`
- **summary**: Unmount a batch of devices.

### stopAndUnmount(pid: `ProviderId`, did: `DIdentity`)

- **interface**: `api.tx.mining.stopAndUnmount`
- **summary**: Stop one device and unmount from the provider.

### partStartMint(pids: `Vec<ProviderId>`)

- **interface**: `api.tx.mining.partStartMint`
- **summary**: Start devices mining, function will be successful.

### startMint(pids: `Vec<ProviderId>`)

- **interface**: `api.tx.mining.startMint`
- **summary**: Start all devices in providers to mint.

### partStopMint(pids: `Vec<ProviderId>`)

- **interface**: `api.tx.mining.partStopMint`
- **summary**: Stop devices mining, function will be successful.

### stopMint(pids: `Vec<ProviderId>`)

- **interface**: `api.tx.mining.stopMint`
- **summary**: Stop all devices in provider to mint.

### deposit(pid: `ProviderId`, amount: `u128`)

- **interface**: `api.tx.mining.deposit`
- **summary**: User can deposit balances to a provider.

### withdraw(pid: `ProviderId`, amount: `u128`)

- **interface**: `api.tx.mining.withdraw`
- **summary**: Withdraw pledge balances from a provider.

### claimRewards()

- **interface**: `api.tx.mining.claimRewards`
- **summary**: Claim all available rewards to their account

### partClaimRewards(pids: `Vec<ProviderId>`)

- **interface**: `api.tx.mining.partClaimRewards`
- **summary**: Claim target providers available rewards to their account

### partDevicesStartMint(pid: `ProviderId`, dids: `Vec<DIdentity>`)

- **interface**: `api.tx.mining.partDevicesStartMint`
- **summary**: Batch devices belong to the provider start mint

### partDevicesStopMint(pid: `ProviderId`, dids: `Vec<DIdentity>`)

- **interface**: `api.tx.mining.partDevicesStopMint`
- **summary**: Batch devices belong to the provider stop mint

### partProvidersStartMint(pid_and_dids: `Vec<(ProviderId, Option<Vec<DIdentity>>)>`)

- **interface**: `api.tx.mining.partProvidersStartMint`
- **summary**: Batch devices belong to providers start mint

### partProvidersStopMint(pid_and_dids: `Vec<(ProviderId, Option<Vec<DIdentity>>)>`)

- **interface**: `api.tx.mining.partProvidersStopMint`
- **summary**: Batch devices belong to providers stop mint

### partProvidersUnmount(pid_and_dids: `Vec<(ProviderId, Option<Vec<DIdentity>>)>`)

- **interface**: `api.tx.mining.partProvidersUnmount`
- **summary**: Batch devices belong to providers try to unmount

---

## committee

### partJoin(pids: `Vec<ProviderId>`)

- **interface**: `api.tx.committee.partJoin`
- **summary**: Devices join register pool and will successfully.

### join(pids: `Vec<ProviderId>`)

- **interface**: `api.tx.committee.join`
- **summary**: Devices can join to Register-List if it want to be committee-members.

### partExit(exit_params: `ExitParameters`)

- **interface**: `api.tx.committee.partExit`
- **summary**: Device exit from Register-List and will not enter at next epoch

### exit(exit_params: `ExitParameters`)

- **interface**: `api.tx.committee.exit`
- **summary**: Device exit from Register-List and will successfully.

### createChannel(chains: `(u16, u16)`, info: `Vec<u8>`, connection: `(HandleConnection, HandleConnection)`)

- **interface**: `api.tx.committee.createChannel`
- **summary**: Create a new channel and connect to two Committee.

### createCommittee(t: `u16`, n: `u16`, fee: `(u128, u128)`, crypto: `CryptoType`, fork: `u8`)

- **interface**: `api.tx.committee.createCommittee`
- **summary**: Create a committee with parameters.

### activeCommittee(cid: `CommitteeId`, address: `Vec<u8>`)

- **interface**: `api.tx.committee.activeCommittee`
- **summary**: Bind anchor address with committee.

### requestSign(cid: `CommitteeId`, hash: `H256`)

- **interface**: `api.tx.committee.requestSign`
- **summary**: Request committee to sign the abnormal tx

### partDevicesJoin(pid: `ProviderId`, dids: `Vec<DIdentity>`)

- **interface**: `api.tx.committee.partDevicesJoin`
- **summary**: Target devices want to join committee server

### partDevicesExit(pid: `ProviderId`, dids: `Vec<DIdentity>`)

- **interface**: `api.tx.committee.partDevicesExit`
- **summary**: Target devices want to exit committee server

### partProvidersJoin(pid_and_dids: `Vec<(ProviderId, Option<Vec<DIdentity>>)>`)

- **interface**: `api.tx.committee.partProvidersJoin`
- **summary**: Target providers and devices want to join committee server

### partProvidersExit(pid_and_dids: `Vec<(ProviderId, Option<Vec<DIdentity>>)>`)

- **interface**: `api.tx.committee.partProvidersExit`
- **summary**: Target providers and devices want to exit committee server

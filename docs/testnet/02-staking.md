# Validators and Nominators

Apply to become a validator to participate in block production or nominator to pledge to obtain income

---

## Join the nominator

1. Go to the `Control Panel` - `Node section` and select become a nominator (If you have become a validator, you need to stop first, and then re-select become a Nominator)

![join_node](/img/testnet/join_node.png)

2. Select validators, maximum to 16

![select_validator](/img/testnet/select_validator.png)

3. Set the number of pledges and earnings distribution
   - Continue Pledge: Continue to pledge funds to the account when claiming the reward.
   - Direct benefit: The rewards will not continue to be pledged, but transferred to the personal spendable account.

![set_nominator](/img/testnet/set_nominator.png)

4. Automatically activate the pledged deposit for some epoch. If multiple validators are nominated, the pledge allocation to each validator will be determined by the [phragmen Algorithm](https://wiki.polkadot.network/docs/learn-phragmen) when the pledge amount is activated.

![nominator_completed](/img/testnet/nominator_completed.png)

## Join the validator

1. Reference [Run Validator Node](/developer/validator), to run a valid node.
2. Go to the `Control Panel` - `Node section` and select become a Validator (if you have become a nominator, you need to stop first, and then select 'Become a Validator)

![join_validator](/img/testnet/join_validator.png)

3. Set commission, allows third parties to join, and RotateKey:

- **Commission**: The percentage of the reward received by the validator when the reward is distributed. If the rewards are the same, the lower the commission means that the nominators will receive more rewards.
- **Allowing third parties to join**: if permitted, a third party may become a nominator for the validator, but not otherwise.
- **RotateKey**: it is used to bind the account and validate the node relationship.
- **Set the amount of pledge and income distribution**:
  - Continue Pledge: Continue to pledge funds to the account when claiming the reward.
  - Direct benefit: The rewards will not continue to be pledged, but transferred to the personal spendable account.

![set_validator](/img/testnet/set_validator.png)

4. To become a validator, you need to wait for some epoch. Once selected, those who do not participate in block production will be punished accordingly, and part of the pledge will be deducted.

![validator_completed](/img/testnet/validator_completed.png)

# FAQ

Some of the most frequently asked questions.

---

## Technology

### What is the difference between BOOLNetwork's bridge and others?

BOOLNetwork is another AMB bridge project that uses TEE network as an external validator. To ensure the security of cross-chain assets, BOOLNetwork has added TEE node rotation and anonymity election mechanism. Not only makes external attacks more difficult, but also almost eliminates internal collusion.

### How is MPC technology used in this product?

Our dynamic committees involve in MPC technology. All nodes that handle a committee are signed cross-chain messages by MPC technology.

### How is the Ring VRF protocol implemented?

Ring VRF mainly protects the identity information of the committee and realizes the dynamic rotation of committee anonymity. The details of its Algorithm are more complex, and the specific implementation method is demonstrated in detail in our [paper](https://ieeexplore.ieee.org/document/9903072).

### What is a dynamic committee? What role does it play?

In contrast to the notary scheme of cross-chain technology, The dynamic committee is similar to a notary, responsible for monitoring and verification of source events, and signing the target chain transactions.

### What role does the BOOL chain play?

The BOOL chain can be regarded as an open and trusted distributed ledger. On the one hand, it records the whole life process of the dynamic committee (from creation to change to destruction) to ensure the authenticity of the committee's behavior. On the other hand, it is used to record cross-chain messages and agree on messages to meet the full chain tracking of messages.

### How to develop on BOOLNetwork?

Currently, you can create cross-chain compatible bridges in BoolScan's [Control Panel] on Testnet. Follow us on [Twitter](https://twitter.com/Bool_Official) and [Discord](https://discord.gg/DVd4q9qq7a) for updates.

## Testnet

### How do I get BOL?

The BOOLNetwork account system is the same as that of Ethereum. The office provides a [faucet](https://faucet.bool.network/) to receive test coins for free.

### Does the BOL have any value?

No, there is no value in BOL at testnet stage. Obtaining BOL on the testnet network is just for testing, participating in node pledges, applying for tickets to participate in committee elections, and paying cross-chain transaction fees.

:::tip

If you have a question not answered here, ask it on our [Discord](https://discord.com/invite/DVd4q9qq7a). Our team and ecosystem are always online, ready to discuss new ideas and questions.

:::

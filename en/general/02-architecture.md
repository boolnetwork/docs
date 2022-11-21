# Architecture

Understand the internal structure of BOOLNetwork

---

## BOOLNetwork

The BOOLNetwork blockchain uses a Modularization layered design that separates the consensus layer from the execution layer (dynamic committee). The consensus layer is responsible for maintaining a decentralized ledger and is used to provide services such as clearing and settlement for the BOOLNetwork; the execution layer generates a dynamic hidden committee according to business requirements and provides customers with services such as consensus calculation including threshold signatures. Specifically:

- The consensus layer only handles relatively simple operations such as Token transfer, staking, and unbinding.
- Each dynamic committee of the execution layer is separated, and different dynamic committees can make corresponding optimization adjustments for different needs, and complete the operation independently of each other.
- Anyone who has a CPU that satisfies the standard to carry TEE and pledges a certain value of BOL tokens can become a miner.
- Miners provide off-chain consensus computing and routing services to the outside world in the form of dynamic committees.

At this stage, the goal is to achieve decentralized cross-chain services based on trusted Hardware and secure multi-party computing technology on the substrate framework, providing users with stable, efficient, and low-cost asset cross-chain.

The implementation of the chain is divided into two parts: on-chain logic and off-chain services.

The on-chain logic is divided into a device registration module, a mining module, and a committee module:

- Device registration module: Users register devices through this module, providing idle resources, and can register general devices, special devices, special devices, etc. Registered special devices such as servers with intel SGX can join the network as a decentralized cross-chain infrastructure.

- Mining module: For users who provide hardware or token resources, the network will reward tokens. To ensure the availability of system resources, the user's device must stay online during mining, otherwise, it will be punished.

- Committee module: As a scheduling module implemented across the chain, committee information is recorded on the chain. To ensure the high privacy of the committee, an RVRF selection Algorithm based on zero-knowledge proofs is designed to avoid users exposing information.

Off-chain services are divided into monitoring services, relay services, and private key management services:

- Listening service: The listening service is responsible for getting events from the BOOLNetwork blockchain or other chains such as Ethereum, and synthesizing the data according to system requirements.

- Relayer service: As an auxiliary service of the cross-chain system, the main role is to bring the verified cross-chain information from the BOOLNetwork blockchain, and then submit it to the target chain to obtain rewards. In theory, anyone can act as a relayer service. To avoid repeated uploading of invalid data, it can be selected through governance.

- Private key management service: It is the core component of the cross-chain system and is responsible for storing the private key used when cross-chain. Each miner node can be regarded as a private key management service. The system selects a part of nodes from a group of miners as a committee, and these nodes jointly maintain the private key. The private key management service will support multiple signature protocols, such as ECDSA, BLS, Schnorr, etc. The private key service must run in SGX, so it needs to be registered with the Intel service and submit the identity to the chain when starting.

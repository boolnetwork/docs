---
id: modules
title: Modules
sidebar_label: Modules
---

![modules](/img/modules.png)

Gateway components can exist independently of bool chain. In an open network, honest threshold signature nodes need unified input to produce legal signatures. Therefore, it is necessary to make a consensus on the input information before signing.

Blockchain is essentially a distributed database system, so it conforms to the CAP theorem. Bitcoin adopts the POW consensus algorithm. When a new block is accepted by some nodes, if the user visits the node that has not been updated, the data obtained by the user is inconsistent. Therefore, from the perspective of distributed data system, bitcoin blockchain system is an AP system, which is not applicable to the consensus of gateway.

The BOOL chain uses babe + grandpa hybrid consensus algorithm, babe is responsible for the block, and grandpa is responsible for the final determination. After the final determination through the grandpa algorithm, it can be considered as a CP system. Therefore, the input information is uniformly signed by the gateway components after the consensus of BOOL chain.

Gateway components can also be combined with Tendermint algorithm to ensure the consistency of messages.

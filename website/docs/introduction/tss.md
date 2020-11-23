---
id: tss
title: Threshold Signature
sidebar_label: Threshold Signature
---

At present, there are two main modes in the cross chain scheme: light node and multi sign. The multi signature mode can effectively avoid the problems of too centralized authority and the project side doing evil. However, the multi signature scheme needs the support of chain virtual machine, which requires high requirements for the chain signature algorithm and poor universality. The scalability of light node mode is seriously insufficient. When multi chain and cross chain are involved, light nodes of corresponding chains need to be realized. Therefore, we introduce a threshold signature protocol to remedy the above defects.

Threshold signature is a multi-party secure computing protocol, which is composed of threshold secret sharing technology and digital signature. Bool platform is a cross link gateway based on threshold signature protocol. How does token cross chain work on the platform? The relay chain selects a group of nodes to participate in secret sharing to generate shared private keys. The cross link behaviors of users on the sub chain are collected by the gateway and then routed to the target chain. The cross chain operation of token has two layers: mapping and redemption. Mapping can be understood as locking the token of sub chain on the public account, otherwise redemption is releasing the token on the public account. A simple AB heterogeneous chain token conversion process, cross chain events on a chain are monitored by the gateway, and the gateway forms a consensus and signs the event, and submits the event to the relay chain; on the relay chain, the operation logic of routing, verification and exchange will be automatically executed; finally, the events in the chain monitored by the gateway are submitted to the B chain after the internal consensus and signature.


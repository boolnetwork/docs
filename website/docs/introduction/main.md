---
id: main
title: Platform architecture
sidebar_label: Platform architecture
---

BOOL Network is a trustless and decentralized cross-chain gateway platform. It like a Oracle which combining threshold signature technology and blockchain technology. It is used to solve the cross-chain problem of heterogeneous chain.

Based on the cross-chain requirements, a general inter chain message routing protocol, BMRP is designed(blockchain message router protocol) that aims to provide a unified cross-chain message transmission specification, and eliminate the obstacles of cross-chain message mutual authentication caused by different consensus algorithm, account structure and encryption mechanism.

![architecture](/img/architecture.png)

## System

* BOOL chain: responsible for on chain governance, threshold node maintenance, routing rule configuration, and sub-chain configuration. In order to ensure the safety of the chain, high availability should be taken into account.

* Gateway: the core element of BMRP, it is a component that adapts to multiple chains, and can collect data on various chains. It mainly maintains the external message order. It is composed of consensus component, collection component and threshold component. The collection component is composed of a general multi-chain library and a standard agent. The multi-chain library provides the ability to read and write different blockchain data, and is an essential tool for accessing Web3 services. The standard proxy library is to package the centralized service into a block chain like structure based on the public-private key management mechanism, so that it can access to the collection component.

* Sub-chain: a sub-chain is a blockchain registered on the relay chain. It can be a federation chain, a public chain, or even a centralized service after being accessed through a sub-chain converter. This is similar to COSMOS.

* Parachain: BOOL Network is developed on the basis of substrate framework, which is in the Polkadot system and can be used as parachain.
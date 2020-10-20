id: main
title: Platform architecture
sidebar_label: Platform architecture
---

Based on the cross chain requirements, a general inter chain message routing protocol, bmrp, is designed(blockchain message router protocol) aims to provide a unified cross chain message transmission specification, and eliminate the obstacles of cross chain message mutual authentication caused by different consensus algorithm, account structure and encryption mechanism.

The main roles of boolnetwork platform are relay chain, gateway and sublink. Relay chain is responsible for message recording, verification and other functions. Gateway is responsible for heterogeneous chain access, processing and assembly of external messages, message chain and other responsibilities. The sublink is a blockchain registered on the relay chain. It can be an alliance chain, a public chain, or even a centralized service. By accessing the relay chain, the sub chains can communicate with each other.

![architecture](/static/architecture.png)
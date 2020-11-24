---
id: gateway
title: Gateway
sidebar_label: Gateway
---

Gateway can be regarded as an interactive component linking different blockchain systems. It is mainly composed of signature module and forwarding module.

The gateway should meet the following functions:

1. Monitor the cross chain events on the corresponding blockchain and sign;

2. Forward the signed data to the corresponding blockchain;

3. Support received and executed request status query on blockchain.


![gatewayRouter](/img/gateway_router.png)

The gateway is mainly composed of four parts: collection, routing rules, consensus algorithm and threshold signature. The consensus and signature module share the point-to-point communication protocol, and the collection module obtains the sub-chain information through RPC.

A common message forwarding process is as follows:

1) The collection module captures the sub-chain information M according to the configuration.

2) M information is pushed to the routing module. The routing module parses and converts the M information, M -> N.

3) N message is pushed to consensus and threshold signature module.

4) Consensus module broadcast N message to nodes through Libp2p.

5) Libp2p receives the broadcast information and returns it to the consensus module.

6) After reaching a consensus on CN message, push it to the threshold signature module, N -> CN.

7) The threshold signature module signs CN messages and broadcasts them through Libp2p.

8) Libp2p returns the received distributed signature information to the threshold signature module.

9) After several rounds of interaction, the final signature result is pushed to the acquisition module, CN -> SCN.

10) The collection module links the signed information.
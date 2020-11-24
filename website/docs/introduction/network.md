---
id: network
title: Network Protocol
sidebar_label: Network Protocol
---

The communication model of threshold signature is a key point to realize practical threshold system. The consensus protocols used in distributed systems need to consider the potential error channel. Therefore, when we discuss the distributed system, we must first define the communication settings, that is, the network model. A point-to-point network is formed between threshold nodes, which means that every message will be broadcast to each node in the network through the gossip protocol.

Because transactions, signatures, and blocks are delivered in the protocol, it takes some time for messages to synchronize between participants. If messages can be arbitrarily delayed or even discarded, Threshold signature protocol must take this into account.

Therefore, the network model is set as follows:

* Each threshold node knows the public key of other threshold nodes;

* The information sent by each threshold node must have its own signature;

* The threshold node can verify the authenticity of the message according to the public key and signature;

* The number of threshold nodes needs to meet the basic number of algorithm requirements.
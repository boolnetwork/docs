---
id: tss
title: Threshold Signature
sidebar_label: Threshold Signature
---

At present, there are two main modes in the cross-chain scheme: light node and multi sign. The multi signature mode can effectively avoid the problems of too centralized authority and the project side doing evil. However, the multi signature scheme needs the support of chain virtual machine, which requires high requirements for the chain signature algorithm and poor universality. The scalability of light node mode is seriously insufficient. When multi chain and cross-chain are involved, light nodes of corresponding chains need to be realized. Therefore, we introduce a threshold signature protocol to remedy the above defects.

Threshold signature is a multi-party secure computing protocol, which is composed of threshold secret sharing technology and digital signature. BOOL Network platform is a cross-chain gateway based on threshold signature protocol. How does token cross-chain work on the platform? The relay chain selects a group of nodes to participate in secret sharing to generate shared private keys. The cross-chain behaviors of users on the sub-chain are collected by the gateway and then routed to the target chain. The cross-chain operation of token has two layers: mapping and redemption. Mapping can be understood as locking the token of sub-chain on the public account, otherwise redemption is releasing the token on the public account. A simple AB heterogeneous chain token conversion process, cross-chain events on a chain are monitored by the gateway, and the gateway forms a consensus and signs the event, and submits the event to the relay chain; on the relay chain, the operation logic of routing, verification and exchange will be automatically executed; finally, the events in the chain monitored by the gateway are submitted to the B chain after the internal consensus and signature.

## Withdrawal mechanism

The function of the threshold node is to save the private key, which determines the assets. We all know that threshold signature can implement (T, N) mode. There are n nodes in total. When the number of participating nodes is greater than T + 1, they can sign together. As the threshold node exits, it will inevitably reach a certain state, that is, it can not reach the minimum threshold T of the signature. We can think that the private key is lost, so the design of the threshold node exit mechanism is very careful.

The ideal situation is that the threshold node will never exit, because of various force majeure, the so-called "ideal". When threshold nodes form a (T, N) set, theoretically, M (N-T-1) nodes are allowed to exit, so that the remaining nodes can ensure the normal operation of the algorithm. The more secure way is to transfer the production data to other threshold nodes and make the old production materials invalid. In this way, the number of threshold nodes in n set is maintained, and the **private key fragment transfer protocol** is designed. If node a exits, the algorithm randomly selects the threshold node B in the non-N set. Through the encryption channel, the private key of node a will be transferred to node B. after that, node a will no longer be selected as the signature node by the algorithm.

Several states of threshold node:

1. Offline status: the mortgage has been fined and there is no mortgage.

2. Standby status: sufficient mortgage and no private key escrow.

3. Operation status: sufficient mortgage and private key escrow.

4. Exit status: the private key will no longer be assigned when applying for exit.

The nodes in offline state and exit state will not be selected as signature nodes by the algorithm.

## Key fragment transfer protocol

Suppose the TSS player A wants to transfer his private key s to another TSS player B. Typically, this can be realized by using a key exchange protocol and a symmetric-key encryption scheme, such the standard AES algorithm. The idea is that after performing the key exchange protocol, A and B will establish a shared secret key. Then A uses the shared key and the AES algorithm to encrypt s, and sends the ciphertext to B. Finally, B decrypts the ciphertext using the shared key and obtains the plaintext, which is the private key s. The protocol is depicted as follows.

1. Key Exchange Protocol:
Public parameters：p: a large prime, Zp is a cyclic group，g: generator of Zp.

![keyExchangeStep1](/img/key_exchange_protocol1.png)

2. Key Transfer Using AES：

![keyExchangeStep2](/img/key_exchange_protocol2.png)
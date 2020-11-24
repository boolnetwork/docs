---
id: node
title: Node type
sidebar_label: Node Type
---

There are three main contributors of blockchain data, i.e., the genesis block, the external message and the internal transaction.

## Full node

The full node is used to record data, which can be regarded as a backup database. Its main responsibility is to synchronously verify the blocks produced by the node and execute external data. Users can query the current information or recent historical data through the full node. deploy the full node, and the application can directly interact with the full node without the third-party infrastructure. In addition, the full node can open the archive mode, that is, all the historical blocks and status trees are maintained. In the archive mode, all historical data from the genesis block can be queried. For example, a block browser may query the historical data on the chain.

## Verification node

The verification node is first a full node, which can verify all the information in the chain. Secondly, the verifier information is registered on the chain to participate in the consensus mechanism, which can produce blocks. All illegal behaviors will be punished to reduce the BOL of the verifier's mortgage; for the legal verifier, rewards will be given, and the verification node will accept the block reward and handling fee.

## Threshold node

The threshold node contains the function of the full node. It needs to access the data on the chain and update the status under the chain in real time. Threshold node is an important element of high availability and high security gateway, and it is also the only entrance of external data link. The threshold nodes must be able to communicate with each other, which is the basis of the threshold signature algorithm. At the same time, it can access the sub-chain information in real time, which can effectively identify malicious threshold nodes.

## Light node

Another type is light node. The light node only stores the current state and does not store historical information, so it cannot recover the complete chain from the creation block. Light nodes are used for special devices, such as mobile phones.
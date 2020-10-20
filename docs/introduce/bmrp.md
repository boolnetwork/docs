---
id: bmrp
title: Blockchain Message Router Protocol
sidebar_label: Blockchain Message Router Protocol
---

In the blockchain paradigm, asymmetric encryption is usually used to ensure the security of assets. Private key signature is required to modify the status on the blockchain. In the public chain architecture, in order to prevent DoS attacks, the cost mechanism is introduced. However, this brings about the difficulty of handling fee clearing caused by different asset values across message chains on different blockchains. Through the introduction of resource free trading mechanism, we can achieve real-time clearing of cross chain message costs, without human intervention, and system access to asset balance.

At the same time, considering the difference of verification methods caused by different account book structure and encryption mechanism, we designed the following cross link protocol to facilitate the verification of relay chain.

Protocol field:
* `Version`:Protocol version.
* `From`: Cross-chain message source gate.
* `To`: Cross-chain message target gate.
* `Action`: Operation content. like (name + params).  Should register in router.
    - `name` type: There are two type,The execution class is used to perform operations on the target chain; the asset class is used for asset swap.
* `Timestamp`： the time when the message operation on the chain was generated.
* `Fee`：<option> For this cross link message, the relay chain agent is allowed to deduct the cost. It consists of (account + amount).

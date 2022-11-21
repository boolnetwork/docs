# Glossary

List of key terms related to the BOOLNetwork platform, network, tools, and blockchain technology

---

## Trusted Execution Environment

TEE The full name of the trusted execution environment, is a mobile device (smartphones, tablets, smart TV) CPU area. The role of this area is to provide a more secure space for the execution of data and code and to ensure their confidentiality and integrity.

TEE In terms of security, we pay attention to the following: the use of open environments, so that devices are exposed to various attacks; privacy, personal information such as contacts, short messages, photos, videos, etc., need not be stolen, lost or attacked by malicious software; content protection, for DRM, conditional access to services or content protection licenses also tend to use Hardware-level protection; company data, such as login VPN credentials, etc.; connectivity protection, in 3G, 4G, wifi, and even NFC Other aspects, the protection of key resources; financial risks, such as user interaction data in financial transactions (transaction content, transaction amount, user input PIN, etc.).

## Intel SGX

Intel ® Software Guard Extensions (Intel ® SGX) protect selected code and data from disclosure and modification. Developers can partition applications into CPU Enhanced enclaves or in-memory executable-protected areas, increasing security even on compromised platforms. Using this new application layer Trusted Execution Environment, developers can enable identity and record privacy, secure browsing and digital management protection (DRM), or any high-security application scenario that requires the secure storage of secrets or protection of data.

Confidentiality and integrity: Guaranteed even in the presence of privileged malicious software at the OS, BIOS, VMM, or SMM layers. Low learning curve: OS programming model similar to the parent application and executed on the master CPU. Remote authentication and provisioning: The remote part can authenticate an application enclave and securely provide keys, credentials, and sensitive data to the enclave. Minimum possible Attack Surface: CPU boundary becomes the Attack Surface perimeter, and all data, memory, and I/O outside the perimeter are encrypted.

## Secure Multi-Party Computation

The problem of Secure Multi-party Computation (MPC, also referred to as SMC or SMPC) was first proposed by Professor Yao Qizhi, a Chinese-American computer scientist and figure award winner in 1982. Simply put, Secure Multi-party Computation Protocol, as a subfield of cryptography, allows multiple data owners to perform collaborative calculations without mutual trust, output calculation results, and ensure that no one party can get any other information than the calculation results they deserve.

## Threshold Signature Scheme

A threshold signature scheme is a multi-party secure computing protocol, which consists of threshold secret sharing technology and digital signature technology. In 1991, Desmedt-Frankel first proposed the (t, n) threshold signature scheme. (t, n) The threshold signature scheme refers to a signature group composed of n members. The group has a pair of public and private keys. In the group, more than or equal to t legal and honest member combinations can sign with the group private key on behalf of the group, and anyone can use the public key of the group for signature verification.

## Zero-Knowledge Proof

Zero-knowledge proofs (Zero-knowledge Proofs) are a very useful cryptographic method. The essence of zero-knowledge proofs is to prove to others that I have a high probability (zero-knowledge proofs are ultimately probabilistic proofs) that I do know or possess something without revealing what I know or possess. More generally, a prover can convince a verifier that an assertion is correct without providing any useful information to the verifier.

## Substrate

A rust-based blockchain framework developed by Parity. Substrate ships with many of the modules and features needed to build a blockchain, including P2P networks, consensus mechanisms, staking, cryptocurrency, on-chain governance modules, and more, which greatly reduces the time and engineering effort required to implement a blockchain.

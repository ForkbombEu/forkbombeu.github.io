---
layout: "~/layouts/PageLayout.astro"
---
# W3C-DID METHOD

> W3C-DID method for blockchain oracles and interoperability: https://dyne.github.io/W3C-DID  

![Zenroom logo](https://zenroom.org/wp-content/uploads/2019/11/zenroom.png)


Decentralized Identifiers (DID) is now an official web standard from the World Wide Web Consortium (W3C). DIDs are cryptographic digital identifiers not tied to any central authority. 


> They are designed to enable individuals and organizations to generate their own identifiers using systems they trust," the specification explains. "These new identifiers enable entities to prove control over them by authenticating using cryptographic proofs such as digital signatures.

In 2022 Dyne.org have implemented a W3C-DID method, which has been approved by the W3C governing board and included in the official [DID method list](https://www.w3.org/TR/did-spec-registries/#did-methods).  

## Focus on cryptography
The first focus for the method was to register Zenswarm Oracles identities, in a way that is both machine and human readable and anchored to a blockchain.
The DID document for the blockchain oracle produced by the method contains a set of public keys **ECDSA, EDDSA, Schnorr, Ethereum address as well as a [Dilithium quantum-proof public key](https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms)**.

## Blockchain anchoring and SSI
The DID and the DID Document are produced and resolved by our Controller, who also notarizes the DID Document on Dyne.org's Ethereum test network and [Planetmint](https://planetmint.io/).

The DID Document is currently created by the DID controller during the announce process. The announce includes a cryptographic handshake, described in the “Oracle key issuance” chapter where the ephemeral secret key (eSK) is exchanged. Then the DID Document is created, stored on a Redis local database as well as on blockchain. The txId containing the DID Document is then stored in Redis and  is contained in the Oracle’s DID Document under the key “alsoKnownAs”.

The specs are available at: [https://dyne.github.io/W3C-DID/#/](https://dyne.github.io/W3C-DID/#/) and the DID controller is deployed at [https://did.dyne.org/docs/](https://did.dyne.org/docs/) 



---
layout: "~/layouts/PageLayout.astro"
---
# Zenswarm

> Swarm of blockchain oracles https://github.com/dyne/zenswarm and https://github.com/dyne/zenswarm-oracle/

![Zenswarm logo](https://raw.githubusercontent.com/dyne/zenswarm/main/docs/zenswarm.svg)

## Blockchain oracles

Blockchains are self-contained networks that can compute and store information coming from external sources but are unable to access information outside the blockchain. Blockchain oracles bridge this gap:

A blockchain oracle is a third-party service that connects smart contracts with the outside world, primarily to feed information in from the world, but also the reverse. 

Blockchain oracles listen to blockchain nodes and are triggered by transactions: in return they deliver information collected from external sources that are fed to a smart contract.

## Why Zenswarm? 

Zenswarm solves a number of problems: 
- Can do **blockchain cryptography off-chain** such as: 
  - Verify batches of signatures
  - Listen to a transaction on Blockchain A and produce a signature/transaction on Blockchain B (and C and D...) 
  - Listen to transactions/events and store data along with storing data on Database/file/Git/IPFS
  - Listen to transactions/events and pass their content to an API
  - A combination of all the above
- Read/write data onto: 
  - SQL, Redis, InfluxDB
  - File
  - Git
  - IPFS
- General computation, process data from/to
  - Blockhain transactions
  - API
  - Databases
- Other cryptography
  - Zero knowledge proofs: zkSNARKs (Coconut), BBS+
  - W3C-VC signatures and verifications
  - Verify signatures using pks from W3C-DIDs
  - Hashing and verification: SHA256/512, keccak256, HMAC, KDF, PBKDF, Blake
  - Asymetric signatures and encryption: ECDSA, EDDSA, Schnorr, BBS
  - Homomorphic multisignature on BLS12321
 
## Features
In order to overcome these interoperability challenges, Dyne.org developed Zenswarm’s oracles. Along with the core functionalities mentioned above our component offers an array of extra features 
- Blockchain interoperability (with Bitcoin, Ethereum, Fabric, Sawtooth, Iota, Planetmint and more)
- Performs a wide range of cryptographic algorithms and flows
- Has a built-in a W3C-DID Controller and Resolver
- Can run on mobile, IoT and embedded devices 
- Multiple Oracles can perform the same query from different locations, returning a signed output, offering off-chain consensus
- Are programmed in Zencode, making the code very readable and easy to maintain, and the same code can run on any platform supported by Zenroom (Linux, Windows, Mac, iOS, browser).


## Zenswarm dashboard

Zenswarm comes with a [dashboard](https://github.com/dyne/Zenswarm-Dashboard) to monitor the oracles:

![Zenswarm dashboard](/images/Zenswarm-Dashboard2.png)

Oracles operations are displayed in real-time along with their public keys

![Zenswarm dashboard](/images/Zenswarm-Dashboard3.png)


## Repos: 

Current: https://github.com/dyne/zenswarm-oracle/

Old version (developed in the EBSI PCP): https://github.com/dyne/zenswarm






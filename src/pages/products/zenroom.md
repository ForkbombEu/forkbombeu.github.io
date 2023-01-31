---
layout: "~/layouts/PageLayout.astro"
---
# Zenroom

> Ultra-portable lightweight VM for cryptography and blockchain interop: https://zenroom.org/ 

![Zenroom logo](https://zenroom.org/wp-content/uploads/2019/11/zenroom.png)


## Blockchain interop
Blockchain interoperability is the ability of blockchains to communicate with other blockchains, enabling data exchange and transfers of tokens or assets across different distributed ledger technologies. 

Zenroom offers **interoperability** between **Bitcoin, Ethereum, Fabric, Sawtooth, Iota, Planetmint**, meaning that a single Zenroom smart contract can perform operations on each of these ledgers, allowing operations as NFT or token transfer along with multilayer and multi-source data notarization. The capability has been used to develop the blockchain oracle [Zenswarm](https://forkbomb.eu/products/zenswarm).

## Ultra-portable and ultra-light
Zenroom is a tiny secure execution environment that integrates in any platform and application, even on a chip or a web page. It can authenticate, authorize access and execute human-readable smart contracts for blockchains, databases and much more.


## Nextgen cryptography
Zenroom performs signatures and verifications using **ECDSA**, **EDDSA**, **Schnorr** on the most widely used elliptic curves such as **SECP256K1**, **BLS381**, **ED25519** (and many more, see full [list](https://github.com/dyne/Zenroom/blob/master/build/config.mk#L294-L297)). Additionally, Zenroom is capable of **zero knowledge proofs** based on [Coconut](https://arxiv.org/pdf/1802.07344.pdf), **multi-party computation** based on [Reflow Multisignature](https://ui.adsabs.harvard.edu/abs/2021arXiv210514527R/abstract), **W3C-VC** and **quantum-proof cryptography** based on the NIST competition winners (see our post on [Medium](https://medium.com/think-do-tank/quantum-proof-cryptography-e23b165b3bbd)).

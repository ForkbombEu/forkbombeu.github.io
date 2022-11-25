---
layout: "~/layouts/PageLayout.astro"
---
# The Zenroom stack

> Multiplatform blockchain interop using the stand-alone virtual machine Zenroom: https://zenroom.org/ 

![Zenroom logo](https://zenroom.org/wp-content/uploads/2019/11/zenroom.png)


## Programmable by non-programmers

Programmable in the English-like DSL [Zencode](https://decodeproject.eu/blog/smart-contracts-english-speaker.html): based on Gherkin (BDD), Zencode is designed to be readable by non-programmer and written with minimal training. Zencode can be written in the online IDE “Apiroom”, which offers auto-complete, examples of each statement and extensive documentation.

## Ultra portable

Based on the crypto virtual machine “Zenroom”: a super lightweight and ultra-portable component written in C, running on any architecture, on any OS, also running in the browser and in ultra low-power chips such as Cortex-M. Zenroom comes with binding for most programming languages and a single API, used to execute Zencode and returning the output as a buffer.

## Modular
Microservices: the stack is designed to operate as an orchestra of microservices, with minimal dependencies and low footprint. Apiroom enables developers to create Dockerfiles and installers for microservices, entirely programmed in Zencode. 

## Interoperable
Blockchain interoperability is the ability of blockchains to communicate with other blockchains, enabling data exchange and transfers of tokens or assets across different distributed ledger technologies. 

In Zenroom 3.0, Dyne,org implemented **interoperability** between **Bitcoin, Ethereum, Fabric, Sawtooth, Iota, Planetmint**, meaning that a single Zenroom smart contract can perform operations on each of these ledgers, allowing operations as NFT or token transfer along with multilayer and multi-source data notarization.

The capability has been exploited in Dyne.org’s blockchain oracle technology [Zenswarm](https://github.com/dyne/zenswarm).

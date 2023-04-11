---
layout: "~/layouts/PageLayout.astro"
---
# W3C-DID METHOD

> Federated, multi-storage, extendable, Zenroom-based W3C-DID implementation 

![Zenroom logo](https://zenroom.org/wp-content/uploads/2019/11/zenroom.png)


Decentralized Identifiers (DID) is now an official web standard from the World Wide Web Consortium (W3C). DIDs are cryptographic digital identifiers not tied to any central authority. 


> They are designed to enable individuals and organizations to generate their own identifiers using systems they trust," the specification explains. "These new identifiers enable entities to prove control over them by authenticating using cryptographic proofs such as digital signatures.

In 2022 Dyne.org have implemented a W3C-DID method, which has been approved by the W3C governing board and included in the official [DID method list](https://www.w3.org/TR/did-spec-registries/#did-methods).  


## 4-Levels federated DIDs

In our implementation, users' DIDs are created by 3rd level organizations named `Context`. Each *Context* is granted a DID along with the ability to create DIDs by a 2nd level organizations, named `Domain`. A *Domain* receives its DID and privileges by the 1st level organization, the `global admin`.  

In the graph below, the `EU` is the global admin, each country is a `Domain` while each city is a `Context`:  



```

		| [D]France
		|   
(GA)EU 	|
		|  
		|			          | user1
		|		   | (C) Rome |
		|		   | 	      | user2
		| [D]Italy | 
				   |
				   |		   | user-3
				   | (C) Milan |
							   | user-4
							   | user-5
							  							  
```


## Explorer

Our DID implementation comes with a mobile friendly DID explorer, you can see it below or at [https://explorer.did.dyne.org/](https://explorer.did.dyne.org/).

<iframe src="https://explorer.did.dyne.org/" title="DID Explorer" width="800" height="700" style="background: #FFFFFF;">DID Explorer</iframe>



## Easy to extend
Our entire W3C-DID method has been implemented using the [Zenroom stack](https://forkbomb.eu/products/zenroom-stack/), meaning that data structures are easy to modify, more complex authentication methods can be employed (including **multi-signature** and zero **knowledge proof**) and **W3C-VC** can be combined with the DID.


## End-to-end cryptography
Each `write operation` requires a cryptographic signature of it's relevant controller: the creation and deletion (disabling) of a DID requires a cryptographic signature from the parent organization, the update operation requires the signature of an admin (`context`, `domain` or `global admin`) hierarchically above it. 

In the example above, the `user-5` can be modified by `Milan` or `Italy` or `EU`, but *not* by `Rome` or `France`.

## Focus on cryptography
The first focus for the method was to register Zenswarm Oracles identities, in a way that is both machine and human readable and anchored to a blockchain.
The DID document for the blockchain oracle produced by the method contains a set of public keys **ECDSA, EDDSA, Schnorr, Ethereum address as well as a [Dilithium quantum-proof public key](https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms)**.

## Passwordless microservices 
When security is a must, services creating DIDs of any level can optionally operate offline, in order not to have private keys on the servers. DIDs can be signed manually using the built in CLI. This scenario is recommended for the global admin microservice.

## Multiple storage possibilities
The Zenroom ecosystem components allows the DID documents to be stored in differently ways, including: 
- File system
- Redis
- SQL databases
- Git
- IPFS
- [Distributed storage](https://forkbomb.eu/products/zenswarm-storage)
- Blockchain

## Blockchain anchoring and SSI
At creation, the DID Documents are notarized on blockchain (Ethereum, Fabric and [Planetmint](https://planetmint.io/) are possible). The txId containing the DID Document is then stored in the DID Document in the metadata.


## Try it now
 
Create your test DID: the test DID is created under the ''sandbox.test'' context, you can resolve it and see in the DID explorer. by following the instructions below:
 
1) Generate your private and public keys in the frame below:

<iframe src="https://forkbomb.eu/products/did-test-1-generate_keys_pks/" title="Keygen" width="700" height="700">Generate private and public keys</iframe>


2) Copy the public keys generated in the frame above, submit it and see the DID produced in the output:


<iframe src="https://forkbomb.eu/products/did-test-2-generate_sandbox_did_doc/" title="Produce DID" width="700" height="1200">Produce and register DID</iframe>

If the DID creation was successful, you should receive an output like: 

```json

{
  "DID": "did:dyne:sandbox.test:FqrHzg1YToYaXEzkyFkX3ZCGxAxZPW3THBcTd6fhyQhy",
  "DID_show_explorer": "https://explorer.did.dyne.org/details/did:dyne:sandbox.test:FqrHzg1YToYaXEzkyFkX3ZCGxAxZPW3THBcTd6fhyQhy",
  "resolve_DID": "https://did.dyne.org/dids/did:dyne:sandbox.test:FqrHzg1YToYaXEzkyFkX3ZCGxAxZPW3THBcTd6fhyQhy"
}
```

## Links
- DID explorer [http://explorer.did.dyne.org/](http://explorer.did.dyne.org/)
- Documentation: [https://dyne.github.io/W3C-DID/#/](https://dyne.github.io/W3C-DID/#/) 


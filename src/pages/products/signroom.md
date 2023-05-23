---
layout: "~/layouts/PageLayout.astro"
---
# Signroom

> Signroom: electronic signature service based on Zenroom  https://github.com/ForkbombEu/signroom/ 

![Signroom logo](/images/SignRoom_logo.png)

User-friendly web-based service, leveraging Zenroom's cryptographic capabilities, allowing users sign documents and objects, using W3C-DID identities. 

## Features 

- Signatures: 
  *	Sign and verify messages and documents (pdf, doc, excel files, pictures etc) using quantum proof signature, ECDSA, EDDSA and Schnorr signatures
  *	Sign and verify documents using XADES, PADES, CADES, JADES for the signatures supported by the standards
  *	Produce and verify zero-knowledge proof credentials, for "privacy by de-sign" disposable identities

- Cryptography:
  *	Produce and verify W3C-VC credentials, using the standard ECDSA signa-ture, as well quantum-proof signature using the ietf draft implementation
  *	Produce and verify multi-signature, using "privacy by design" principles, based on the "Reflow" crypto multi-signature paper
  
## Advanced features

* DID and identity wallet: users receive a DID containing all their public keys, based on [https://dyne.org/W3C-DID/](https://dyne.org/W3C-DID/) 
* DID documents can be stored which can be stored on file -system, database, git, IPFS and blockchain. 
* Web based and mobile friendly
* APIs: the signature, credential and verification flows will be made available to third party integration via documented REST APIs. 


## Source-code

Repo: https://github.com/ForkbombEu/signroom (currently private)






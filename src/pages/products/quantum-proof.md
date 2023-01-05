---
layout: "~/layouts/PageLayout.astro"
---
# Quantum-proof cryptography 

> Multiplatform, easy to integrate quantum proof cryptography in Zenroom: https://zenroom.org

![Zenroom logo](https://zenroom.org/wp-content/uploads/2019/11/zenroom.png)


## Why quantum-proof crypto?

Imagine that it’s fifteen years from now and someone announces the successful construction of a large quantum computer. The New York Times runs a frontpage article reporting that all of the public-key algorithms used to protect the Internet have been broken. Users panic. What exactly will happen to cryptography? (Daniel J. Bernstein “Introduction to post-quantum cryptography”, 2009). See see our post on [Medium](https://medium.com/think-do-tank/quantum-proof-cryptography-e23b165b3bbd).

## The standards
A six-year effort managed by NIST, which in 2016 called upon the world’s cryptographers to devise and then vet encryption methods that could resist an attack from a future quantum computer that is more powerful than the comparatively limited machines available today. The selection ended in 2022 and constitutes the beginning of the finale of the agency’s post-quantum cryptography standardization project.

## Human readable quantum-proof crypto
Dyne.org implemented in our Zenroom virtual machine, 3 of the 6 algorithms selected by the NIST competition, precisely the signature algorithm Dilithium2 and the key-exchange algorithms Kyber and NTRUP (also implemented in the latest OpenSSH). Since Zenroom is fully portable on most OS and hardware platforms, the quantum-proof algorithms can be used on servers, desktop, mobile apps, can run in the browser as well as on ultra-low power Cortex-M chips.

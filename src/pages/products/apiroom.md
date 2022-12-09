---
layout: "~/layouts/PageLayout.astro"
---
# Zenswarm

> Zencode IDE, rapid prototyping and deployment of microservices https://apiroom.net/ 

![apiroom logo](/images/apiroom.png)

## Zencode IDE

Write Zencode smart contracts in a breeze, using: 

- Auto-complete: type a keyword in the editor and pick the best statement from a list
- Examples: navigate the examples and use them as a base for your smart contract
- Syntax highlight: let Apiroom suggest if a statement is properly formatted

Apiroom's front-end embeds Zenroom (trans-compiled in WASM and packed into an [npm package](https://dev.zenroom.org/#/pages/zenroom-javascript2b)) therefore the Zencode smart contracts are executed in the browser as they would be on a different platform or on blockchain.

![apiroom shot1](https://dev.zenroom.org/_media/images/apiroom/Shot5Autocomplete.png)

## Microservice rapid prototyping

Along with Zenroom, Apiroom embeds [Restroom-mw](https://dyne.org/restroom-mw/#/), an npm package that exposes the Zenroom VM to a REST API.
Thi allows you to write Zencode smart contract, and deploy it on Apiroom as an API. You can later search and edit the APIs you have deployed: 

![apiroom shot2](https://dev.zenroom.org/_media/images/apiroom/Shot7LinkApi.png)

You can also test the APIs using the OpenAPI component built in Apiroom:

![apiroom shot2](https://dev.zenroom.org/_media/images/apiroom/Shot8Swagger.png)

![apiroom shot3](https://dev.zenroom.org/_media/images/apiroom/Shot10Swagger.png)



## Microservice rapid deployment

After prototyping, you can export a group of smart-contracts (turned into APIs) into a Dockerfile or a shell script, that can be deployed on a server to bring the microservice to production
 
![apiroom shot4](https://dev.zenroom.org/_media/images/apiroom/ApiroomExportToDocker.png)



See [Apiroom's user manual](https://dev.zenroom.org/#/pages/apiroom) for more info or play with [Apiroom online](https://apiroom.net/)
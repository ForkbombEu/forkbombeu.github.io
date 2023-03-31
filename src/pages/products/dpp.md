---
layout: "~/layouts/PageLayout.astro"
---
# Digital Product Passport

> Flexible and interoperable, DID-based, blockchain anchored DPP 

![Zenroom logo](https://zenroom.org/wp-content/uploads/2019/11/zenroom.png)


The European Commission is [investing heavily](https://www.digitaleurope.org/digital-product-passport/) in the standardization of the DPP, but a general standard is still far away in the future. Therefore for a DPP to be while adopted, it has to be generic enough, easy to operate and interoperable.

## Fetures and applications
Our DPP is cross-sectoral, flexible, based on common rules, principles, taxonomy, and standards. The is based on the [ValueFlows](https://www.valueflo.ws/ ontology, covers circular economy, offers **tracking and tracing** of products and materials, collaboration on designs and delivery of services. The DPP accommodates **complex supply chains scenarios, where multiple products or services make their way into the final product**, as for example a custom made bicycle based on open source designs, repurposed clothing or refurbished machines.  

## DPP modelisation and interoperability 
Our DPP data structure is based on the [ValueFlows](https://www.valueflo.ws/) ontology and is produced by the [Zenflows](https://github.com/interfacerproject/zenflows) back-end, which is programmable in GraphQL. ValueFlows is flexible enough to accommodate most ***economic flows, actors, processes and events**.

Such a power and flexibility, come with an inherently high level of complexity: in order to tackle complexity and minimize uncertainties in the development, we implemented a workflow to prototype complex GraphQL queries and flows using [Jupyter Notebook](https://github.com/interfacerproject/Interfacer-notebook): 

![DPP shot1](/images/DPPModel1.jpg)



This allows us and third party developers to accelerate development and:

- Extract data from Zenflows, to be imported into different data structures and systems 
- Inject data into Zenflows, from an ERP, an IoT device, a mobile application
- Visualize complex data structures, see the **interactive example below**:


<iframe src="https://interfacerproject.github.io/Interfacer-notebook/" title="DPP interactive" width="1000" height="750">DPP Interactive</iframe>


## Technology
The actors performing operations in the products and services stored in the DPP, are described using the [W3C-DID](w3c-did) method based on [Zenroom](https://forkbomb.eu/products/zenroom), making the resolution of the actors interoperable, verifiable and private. The DPP along with the W3C-DID is anchored on blockchain, making it tamper-proof. It's generation and storage can be triggered by smart-contracts. The DPP is stored as a JSON object and can be easily adapted or translated to other file formats.

---------

The DPP is developed in collaboration with the [Intefacer](https://www.interfacerproject.eu/) consortium and is the evolution of a prototype developed within the case-study winner H2020 [REFLOW Project](https://ec.europa.eu/research-and-innovation/en/projects/success-stories/all/six-european-cities-gear-more-circular-future).
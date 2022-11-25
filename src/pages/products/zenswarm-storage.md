---
layout: "~/layouts/PageLayout.astro"
---
# Zenswarm storage: 

> Distributed key-value storage for caching and sharding, https://github.com/dyne/zenswarm-storage 

![Zenswarm storage logo](https://raw.githubusercontent.com/dyne/zenswarm-storage/main/docs/images/zenswarm-storage.png)

Blockchains are inefficient for storing and safeguarding huge volumes of data, a viable solution to storing and scalability problems is sharding. Sharding consists of breaking large tables of data into smaller pieces, referred to as shards, which are stored in containers based on rules such as geolocation and data type. 

Zenswarm-storage offers caching and sharding, aiming at high availability of data, to store arbitrarily large data objects, optionally pegged to a blockchain without overloading the blockchain. 
The distributed storage is based on the “VShards” functionality provided by the Tarantool engine and  contains data objects, grouped by user defined policies (e.g. by data type and provenance). 
Tarantool’s sharding uses central data containers and replicas grouped into “buckets” (see the VShard architecture). Client application can store and retrieve data via HTTP API calls: 

```bash
 
# STORE
curl -X POST zenswarm-storage.domain:8081/store -d '{"key": "my-key", "value": {"my": "data"}}'

# RETRIEVE
curl zenswarm-storage.domain:8081/retrieve/my-key
# OR
curl -X POST zenswarm-storage.domain:8081/retrieve -d '{"key": "my-key"}'
```

When pegging the data to a blockchain, a blockchain transaction stores the hash and the URI of the data, and the txid stored on the Zenswarm-storage container along with the data.
The result is a distributed database, similar to IPFS, but with the performance of an in-memory key-value storage and without the hashing used to identify objects on IPFS. 
Zenswarm-storage can also be used as a caching engine, where sharded data expires based on rules, thus offering

High availability of data through wide-area network disruptions
Local distribution of highly-requested data in regional areas
Fast automated creation of multiple data sources for advanced verification schemes


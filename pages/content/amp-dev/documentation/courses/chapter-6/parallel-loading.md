---
$title@: Parallel Loading
$order: 10
leveled: false
---

*How can we reduce loading times for a web-accessible triple store?*

## Context

It is quite common for triple stores to expose an HTTP based API to support data loading. E.g. via SPARQL 1.1 Update or the SPARQL 1.1. Uniform Protocol. It can be inefficient or difficult to POST very large datasets over HTTP, e.g. due to protocol time-outs, network errors, etc.

## Solution

Chunk the data to be loaded into smaller files and use a number of worker processes to submit data via parallel HTTP requests.

## Example(s)

Most good HTTP client libraries will support parallelization of HTTP requests. E.g. PHP's `curl_multi` or Ruby's `typhoeus` library.

## Discussion

Parallelization can improve any process. Because an RDF graph is a set of triples there is no ordering critera for adding statements to a store. This means that it is usually possible to divide up an RDF data dump into a number of smaller files or chunks for loading via parallel POST requests.

This approach works best when the RDF data is made available as N-Triples, because the chunking can be done by simply splitting the file on line numbers. This isn't possible with RDF/XML or Turtle files that use prefixes or other syntax short-cuts.

The one caveat to this approach is if the data contains blank nodes. It is important that all statements about a single blank node are submitted in the same batch. Either avoid using bnodes, or split the file based on a

Having a single preferred property for display labels encourages convergence but doesn't preclude the use of more specific properties for other purposes. For example the literal value of the `skos:prefLabel` property can be formatted for display, leaving other properties, e.g. `rdfs:label`, `foaf:name`, etc to express alternatives or variations in labels or naming. A client that is aware of the meaning of specific predicates may choose to build labels using alternate logic, but having a label unambiguously specified simplifies application development.

## Related

- [`Parallel Retrieval`](../chapter-6/parallel-retrieval)

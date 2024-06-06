---
$title@: Parallel Retrieval
$order: 9
leveled: false
---

*How can we improve performance of an application dynamically retrieving Linked Data?*

## Context

An application that draws on data from the web may typically be retrieving a number of different resources. This is especially true if using the [`Follow Your Nose`](../chapter-6/label-everything) pattern to discover data.

## Solution

Use several workers to make parallel GET requests, with each work writing into a shared RDF graph.

## Example(s)

Most good HTTP client libraries will support parallelization of HTTP requests. E.g. PHP's `curl_multi` or Ruby's `typhoeus` library.

## Discussion

Parallelization of HTTP requests can greatly reduce retrieval times, e.g. to time of the single longest GET request.

By combining this approach with [`Resource Caching`](../chapter-6/resource-caching) of the individual responses, an application can maintain a local cache of the most requested data, which are then combined and parsed into a single RDF graph for driving application behavior.

In practice though there is no real difference between the structures as data cannot be easily merged into an existing sequence, e.g. to append values. Both also suffer from being poorly handled in SPARQL 1.0 (there is no way to query or construct an arbitrary sized list or sequence without extensions); SPARQL 1.1 property paths remedy the querying aspects.

## Related

- [`Follow Your Nose`](../chapter-6/label-everything)
- [`Parallel Loading`](../chapter-6/parallel-loading)

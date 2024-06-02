---
$title: Parallel Retrieval
$order: 9
leveled: false
---

*How can we improve performance of an application dynamically retrieving Linked Data?*

## Context

An application that draws on data from the web may typically be retrieving a number of different resources. This is especially true if using the `Follow Your Nose <follow-your-nose.html>` pattern to discover data

## Solution

Use several workers to make parallel GET requests, with each work writing into a shared RDF graph

## Example(s)

Most good HTTP client libraries will support parallelization of HTTP requests. E.g. PHP's `curl_multi <#>` or Ruby's `typhoeus <#>` library.

## Discussion

Parallelization of HTTP requests can greatly reduce retrieval times, e.g. to time of the single longest GET request.

By combining this approach with `Resource Caching <resource-caching.html>` of the individual responses, an application can maintain a local cache of the most requested data, which are then combined and parsed into a single RDF graph for driving application behavior.

Parallelization is particularly useful for AJAX based applications as browsers are particularly well optimized for making a large number of parallel HTTP requests.

## Related

- `Follow Your Nose <follow-your-nose.html>`
- `Parallel Loading <parallel-loading.html>`

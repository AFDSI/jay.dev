---
$title@: URI Resolver
$order: 16
leveled: false
---

*How can we customize the application behavior associated with resolving (de-referencing) a URI into RDF statements?*

## Context

Linked Data applications typically acquire additional relevant data by adopting

However in practice simple de-referencing, i.e. performing a GET request on a URI, is not always desirable. For example:

- An mobile application may need to work in an off-line mode where remote data is not available
- Continuous testing scenarios may need to rely on predictable data for driving test assertions and, in addition, may need to be executable in a self-contained environment without use of network services
- Security constraints may require network requests to be routed via an intermediary service
- A local mirror may be available which can provide a better quality of service
- A remote service may be intermittently or completely unavailable, requiring a local mirror to be substituted on either a temporary or permanent basis

## Solution

Application code should address de-referencing requests to URI resolver. Broadly, a URI resolver is a function that maps from a URI to a stream from which RDF triples can be consumed. A URI resolver might consist of an application component or could be deployed as a network addressable service (i.e. a proxy server).

Application code should defer to the URI resolver in order to source RDF statements and provide configuration options to specify which URI resolver (e.g. implementation or service location) should be used. Simple de-referencing behavior may still be used as fallback behavior if no URI resolver is available.

## Example(s)

A Linked Data browser loads and displays resources as directed by user behavior, e.g. clicking on links in the user interface. A user selects to view a resource. When a user requests that the browser displays a resource, `http://example.org/person/1`, instead of performing a GET request on the resource the browser invokes a pre-configured URI resolver to retrieve the description of the resource.

The URI resolver has been set up to direct requests matching a pattern of `http://example.org/*` to a local triple store that contains a mirror of the remote data. However when the user visits `http://other.example.org/document/123` the URI resolver does not have any prior knowledge of the resource and falls back to a simple GET request on the resource URI.

In neither case does the browser (or the user) need to know how the description was actually retrieved.

## Discussion

Adding some extra indirection around the de-referencing of URIs into RDF statements provides some much needed flexibility when dealing with network issues such as intermittently available connections; unreliable remote services; and security constraints. Applications that support the configuration of URI resolvers provide options for customising and optimising application behavior based on local requirements.

URI resolvers are not a new concept and have been used in many different systems. SGML and XML processing pipelines typically support URI resolver components to allow resources to be cached locally or even bundled with an application. More broadly, HTTP proxy servers fulfill the role for general web requests.

The indirection offered by URI resolvers make them an ideal location in which to provide additional behavior. For example all of the following can be implemented using a URI resolver component:

- Caching of RDF descriptions as they are retrieved, e.g. in an in-memory, file system, or document store
- Substitution of a local mirror of the data in preference for the remote version
- Substitution of a local mirror of the data in preference for the remote version, but only where the remote service is unavailable
- Serving of a fixed response, regardless of URI (e.g. to support testing scenarios)
- Retrieval of both the remote description of a resource plus local `annotations` to mix public and private data
- `parallel retrieval` of the description of a resource that is spread across any combination of local or remote locations
- Provision of reasoning over retrieved data to augment data against a vocabulary
- Provision of support for resolution of non-HTTP URI schemes -  On-demand conversion of non-RDF data into RDF statements

With suitable configuration, URI resolvers can potentially be chained together to create a de-referencing pipeline that can deliver some complex application behaviors with a simple framework.

There are some Linked Data applications that provide URI resolver services, this includes generic Linked Data browsers. At their simplest the browsers simply provide additional HTML presentation of retrieved data. But in some cases the retrieved data is both directly accessible (i.e. the service acts as a proxy) and may be supplemented with local caches, annotation, or inferencing, as outlined above. To support de-referencing typically use a [`Rebased URI`](../chapter-2/rebased-uri).

## Related

- [`Follow Your Nose`](../chapter-6/label-everything)

## Further Reading

- [`Diverted URI pattern`](<#>)
- [`The Jena FileManager and LocationMapper`](<#>)
- [`Entity management in XML applications`](<#>)

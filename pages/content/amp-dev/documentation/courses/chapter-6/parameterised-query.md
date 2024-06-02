---
$title: Parameterized Query
$order: 11
leveled: false
---

*How to avoid continual regeneration and reparsing of SPARQL queries that differ only in a few bound variables?*

## Context

Many applications continually execute a small number of queries which differ only in terms of a few parameters. For example generating a `Bounded Description <bounded-description.html>` of a resource might involve a standard query that varies only by the resource URI being referenced. Other queries might vary based on date ranges, page offsets, etc. Re-generating queries as text strings can be fiddly and makes for messy application code. This is particularly true when the query then needs to be serialised and submitted over the SPARQL protocol: URL encoding issues can easily cause problems. In addition a query engine incurs extra overhead when repeatedly parsing the same query.

## Solution

Define each repeated query as as query template which can be parsed once by the query engine. The query should define variables for those aspects of the query that might vary. The variables can then be bound to the query before execution. Supplying the values for these parameters will typically involve an engine specific API call.

## Example(s)

Apache Jena uses a ``QueryExecutionFactory`` to support creation of queries. Query objects can be pre-compiled. An initial set of bindings for a query can be provided in order to `create a specific QueryExecution <#>`. These initial bindings are simply a map from variable name to value.

## Discussion

This pattern is well understood in the SQL database world: Prepared Statements have been in use for many years. SPARQL processors are now starting to add similar features, which simplifies working with queries from application code.

At present the SPARQL Protocol does not support specification of initial bindings as additional query string parameters. However some Linked Data publishing platforms have added support for parameterized queries, as extensions to the core protocol, allowing additional query parameters to be automatically injected into the query prior to execution. This makes it simpler for users to share queries and adjust their parameters.

SPARQL 1.1 provides `a ``BINDINGS`` keyword <#>` which can be used to declare that certain variables should be injected into a graph pattern. This was added primarily to support federated query use cases, but can also be used to support some parameterisation of queries.

A map of named-value pairs which describe some initial query bindings can also be interpolated directly into a query by looking for appropriately named query variables. This interpolation has been done in several ways:

- sing some additional custom syntax to mark up the variable, e.g. ``%{var}``. This means that the query is no longer valid SPARQL into variables have been substituted
- By using the fact that SPARQL provides to naming syntaxes for variables, and defining ``$var`` to be those that are bound before execution and ``?var`` those that are bound during execution (or vice versa). This relies on local convention.
- By binding any query variable using any valid SPARQL syntax. The downside to this option is that additional external context is required to identify those variables that must be bound prior to execution. The other options allow these to be identified from just the query itself, although in practice it is often useful to be able to known the expect type, format or legal values for a parameter which will require additional configuration anyway.

Parameterized Queries are a core feature of the `Named Query <named-query.html>` pattern.

## Related

- `Named Query <named-query.html>`

## Further Reading

- `SPARQL 1.1. Bindings <#>`

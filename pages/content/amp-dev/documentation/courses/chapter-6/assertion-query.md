---
$title: Assertion Query
$order: 2
leveled: false
---

*How can a dataset be tested for known patterns?*

## Context

There are a number of circumstances in which it is useful to test for patterns in a dataset. The most common is likely to be discovery of whether there is data available about a specific resource or from a specific vocabulary. Another very common use of pattern detection is to validate a dataset to check that it conforms to a specific structure. The latter is very common when testing the data generated by an application, e.g. during development or ongoing maintenance, or to check data received from third-party systems.

## Solution

Use a SPARQL ``ASK`` or ``CONSTRUCT`` query to probe the dataset for known patterns

## Example(s)

The following will return true if the specified pattern is found:

[sourcecode:html]
   <!-- Is there any data about a specific resource? -->
   ASK WHERE {
    <http://www.example.org/person/bob> ?p ?o.
   }
[/sourcecode]

## Discussion

As described in the `Transformation Query <transformation-query.html>` pattern, SPARQL provides a declarative syntax for certain kinds of operations on RDF graphs. The SPARQL ``ASK`` query form is intentionally provided to support making assertions against an RDF dataset. It is therefore useful in the role of testing the output of an application (e.g. for unit testing) or acceptance testing incoming data received from a third-party.

In some cases it is useful to run a number of queries against a dataset and generate suitable warning messages if any of the assertions succeed. Instead of using an ``ASK`` query, a ``CONSTRUCT`` query can be used instead, allowing a simple message to be generated as output. These messages can then be used to, e.g. produce a test report from a dataset:

[sourcecode:html]
   CONSTRUCT {
    _:msg ex:message "Every person should have a name".
   } 
   WHERE {
    ?person a foaf:Person;
    OPTIONAL {
      ?person foaf:name ?name.
      }
    FILTER (!bound(?name)) 
   }
[/sourcecode]

## Related

- `Transformation Query <transformation-query.html>`

## Further Reading

- The `Schemarama <http://isegserv.itd.rl.ac.uk/schemarama/>` testing framework uses the ``CONSTRUCT`` variant of this pattern.
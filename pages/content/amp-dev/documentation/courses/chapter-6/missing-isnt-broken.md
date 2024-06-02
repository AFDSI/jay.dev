---
$title: Missing Is not Broken
$order: 7
leveled: false
---

*How do we handle the potentially messy or incomplete data we use from the web?*

## Context

In RDF anyone can say anything, anywhere. In other words anyone can make statements about a resource and publish that to the web for others to use. There is no requirement about how much data needs to be published: there are no validation rules that require a minimum amount of data. This means that data on the web may be of varying quality or of varying detail.

This variation is partly a factor of the flexibility of the model, but is really also a fact of life when dealing with any data or content found on the web: even within well-defined standards there may be varying levels of detail available.

How do we deal with this in our Linked Data applications?

## Solution

Recognize that "missing isn't broken".

## Example(s)

An application might chose to render as much of a FOAF profile (for example) as it can, even though individual profiles might be of varying details.

## Discussion

This pattern is really just a restatement of `Postel's Law <#>`: *Be conservative in what you send; be liberal in what you accept*. This advice is particularly applicable when dealing with any data or content obtained from the web. Applications ought to be tolerant of missing or invalid data and make best effort to process or render what is available

In a Linked Data context this advice is particularly applicable as the flexibility of the RDF model means that there is greater chance for variation in detail across data sources. Rather than rely on schema or document validation, as in XML or relational database systems, to identify and reject data, applications should be designed to be more tolerant.

Of course an application may require some minimum data in order to do anything useful with some data. Although if a data publisher has followed the `Label Everything <label-everything.html>` pattern then at a minimum a data browser, for example, may still be able to render the name of the resource.

Unlike other approaches, where data is found to be missing, Linked Data provides additional opportunities for finding more data by supplementing the available data with additional sources, E.g. by using the `Follow Your Nose <follow-your-nose.html>` pattern.

## Related

- `Follow Your Nose <follow-your-nose.html>`
- `Label Everything <label-everything.html>`

## Further Reading

- `Missing Isn't Broken <#>`


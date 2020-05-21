

//  query

```curl -XPOST localhost:9200/_opendistro/_sql -d '{"query": "SELECT * FROM cars WHERE Origin LIKE 'US%' LIMIT 5"}' -H 'Content-Type: application/json'```


// json

```{
    "error": {
      "reason": "Invalid SQL query",
      "details": "illegal sql expr : SELECT * FROM cars WHERE Origin LIKE US% LIMIT 5",
      "type": "ParserException"
    },
    "status": 400
  }```
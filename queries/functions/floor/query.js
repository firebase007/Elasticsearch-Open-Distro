

```curl -XPOST localhost:9200/_opendistro/_sql -d '{"query": "SELECT floor(Acceleration) AS Acceleration FROM cars LIMIT 5"}' -H 'Content-Type: application/json'```
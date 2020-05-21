

```curl -XPOST localhost:9200/_opendistro/_sql -d '{"query": "SELECT date_format(Year, 'Y') FROM cars LIMIT 5"}' -H 'Content-Type: application/json'```
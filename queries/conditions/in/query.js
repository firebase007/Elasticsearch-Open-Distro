curl -XPOST localhost:9200/_opendistro/_sql -d '{"query": "SELECT * FROM cars WHERE Origin IN ('USA', 'Japan') LIMIT 5"}' -H 'Content-Type: application/json'
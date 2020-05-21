
curl -XPOST localhost:9200/_opendistro/_sql -d '{"query": "SELECT * FROM cars WHERE Horsepower BETWEEN 70 AND 90 LIMIT 5 "}' -H 'Content-Type: application/json'

// group by query

curl -XPOST localhost:9200/_opendistro/_sql -d '{"query": "SELECT * FROM cars GROUP BY range(Cylinders, 4,6,7) LIMIT 5"}' -H 'Content-Type: application/json' 
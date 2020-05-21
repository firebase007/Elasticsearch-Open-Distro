

curl -XPOST localhost:9200/_opendistro/_sql -d '{"query": "SHOW TABLES LIKE cars"}' -H 'Content-Type: application/json' 
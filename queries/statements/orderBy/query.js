
//  order by query

curl -XPOST localhost:9200/_opendistro/_sql -d '{"query": "SELECT * FROM cars ORDER BY _id asc LIMIT 5"}' -H 'Content-Type: application/json'
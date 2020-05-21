


curl -XPOST localhost:9200/_opendistro/_sql -d '{"query": "SELECT  count(distinct Weight_in_lbs) FROM cars "}' -H 'Content-Type: application/json'
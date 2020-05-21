

curl -XPOST localhost:9200/_opendistro/_sql -d '{"query": "SELECT min(Horsepower) AS Horse_power FROM cars"}' -H 'Content-Type: application/json'

curl -H 'Content-Type: application/json' -X POST localhost:9200/_opendistro/_sql/_explain -d '{"query" : "SELECT Origin,Horsepower FROM cars WHERE Cylinders > 4 LIMIT 5"}' 
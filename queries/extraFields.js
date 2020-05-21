

//  query 

`curl -H 'Content-Type: application/json' -X POST localhost:9200/_opendistro/_sql -d '{"query" : "SELECT Origin, Horsepower, Miles_per_Gallon FROM cars LIMIT 5","filter" : {"range" :{"Weight_in_lbs" : {"lt" : 4000}}}}'`



// json


```{
    "took": 6,
    "timed_out": false,
    "_shards": {
            "total": 1,
            "successful": 1,
            "skipped": 0,
            "failed": 0
    },
    "hits": {
            "total": {
                    "value": 339,
                    "relation": "eq"
            },
            "max_score": 0.0,
            "hits": [{
                    "_index": "cars",
                    "_type": "_doc",
                    "_id": "182",
                    "_score": 0.0,
                    "_source": {
                            "Origin": "Europe",
                            "Horsepower": 70,
                            "Miles_per_Gallon": 29
                    }
            }, {
                    "_index": "cars",
                    "_type": "_doc",
                    "_id": "128",
                    "_score": 0.0,
                    "_source": {
                            "Origin": "USA",
                            "Horsepower": 150,
                            "Miles_per_Gallon": 15
                    }
            }, {
                    "_index": "cars",
                    "_type": "_doc",
                    "_id": "156",
                    "_score": 0.0,
                    "_source": {
                            "Origin": "Japan",
                            "Horsepower": 97,
                            "Miles_per_Gallon": 24
                    }
            }, {
                    "_index": "cars",
                    "_type": "_doc",
                    "_id": "170",
                    "_score": 0.0,
                    "_source": {
                            "Origin": "USA",
                            "Horsepower": 95,
                            "Miles_per_Gallon": 18
                    }
            }, {
                    "_index": "cars",
                    "_type": "_doc",
                    "_id": "57",
                    "_score": 0.0,
                    "_source": {
                            "Origin": "Europe",
                            "Horsepower": 90,
                            "Miles_per_Gallon": 28
                    }
            }]
    }
}```
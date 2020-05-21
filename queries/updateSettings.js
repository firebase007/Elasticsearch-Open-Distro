

//  query 

curl -H 'Content-Type: application/json' -X PUT localhost:9200/_cluster/settings -d '{"transient" : {"opendistro.sql.enabled" : false}}'


//  json result


{
    "acknowledged": true,
    "persistent": {},
    "transient": {
            "opendistro": {
                    "sql": {
                            "enabled": "false"
                    }
            }
    }
}
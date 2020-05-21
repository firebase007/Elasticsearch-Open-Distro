'use strict'

const fs = require('fs');
require('dotenv').config()
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

// impoort json to ingest to our cluster
const data = JSON.parse(fs.readFileSync(__dirname + '/demo.json'));


const index= process.env.ES_INDEX;
const type = process.env.ES_TYPE;

const writeDataToES = async (index, data) => {
    for (let i = 0; i < data.length; i++ ) {
      await client.create({
        refresh: true,
        index: index,
        id: i,
        body: data[i]
      }, (error, res) => {
        if (error) {
          console.error("Failed to import data to ES", error);
          return;
        }
        else {
          console.log("Successfully imported data", res);
        }
      });
    }
};
  

writeDataToES(index, data);





 





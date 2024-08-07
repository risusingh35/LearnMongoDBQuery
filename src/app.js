const express = require('express')
const { queryIndex } = require('./query/queryIndex')
const startApp = () => {
    console.log("**********APP JS**********");
    const app = express()
    app.use(express.json());
    queryIndex()
    app.use('/', (req, res) => {
        // queryIndex()
        res.send(`<h1>Welcome to Home Route</h1>`)
    })
   
    return app
}
module.exports = startApp;

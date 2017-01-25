'use strict'

const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')

const app = express()

app.set('port', (process.env.PORT || 5000)) //use the envrionment port or use 5000

//allows us to process the data
app.use(bodyParse.urlencoded({extended: false})) // parses the text as URL encoded data need it like this casue browsers tend to send form data from regular forms set to POST
app.use(bodyParser.json()) //parses the text as JSON

//setting up routes(routs are how apps respond to a cliends request to a particualr endpoint(which is a url))
app.get('/', function(req, res) { //will check for first slash
	res.send("Hi I am the chat bot!!!")

})
//facebook
app.get('/webhook/', function(req, res) {

	if(req.query["hub.verify_token"] === "blondiebytes") {
		res.send(req.query['hub.challenge'])
	}
	res.send("wrong token")
})

app.listen(app.get('port'), function() {
	console.log('running port')
})
const express = require('express')
const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.listen(4000, () => {
    console.log('up on 4000')
})

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '19443cf46b0845708cec1d18633bce4a',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

try {
    app.get('/', function(req, res) {
        // ...
      });
}


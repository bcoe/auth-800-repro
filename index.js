const express = require('express');
const app = express();
const {Logging} = require('@google-cloud/logging');
// Creates a client
process.env.DEBUG_AUTH = 'true';

let logging = null
let logger = null
setInterval(async () => {
  if (!logging) {
    logging = new Logging();
// Selects the log to write to
    logger = logging.log('grpc-stress');
  }
  const metadata = {
    resource: {type: 'global'},
  }
  const entry = logger.entry(metadata, 'hello I am a log message');

  // Writes the log entry
  await logger.write(entry);
}, 3000);

app.get('/', async (req, res) => {
    console.log('Hello world received a request.');
    const target = process.env.TARGET || 'World';
    res.send(`Hello ${target}!`);
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Hello world listening on port', port);
});


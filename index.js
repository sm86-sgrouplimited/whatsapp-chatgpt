// const express = require('express')
// const app = express()
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// })
// app.listen(process.env.PORT || 3000)

const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const OPENAI_KEY = process.env.OPENAI_KEY;
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN

const configuration = new Configuration({
  apiKey: OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(express.json());

async function sendMessage(msg, from, token, id) {
  // Send message code here
}

async function handleMessage(body) {
  // Message handling code here
}

app.post('/webhook', (req, res) => {
  const body = req.body;
  console.log('req', body);

//   handleMessage(body);

  res.send('Yo!')
//   res.sendStatus(200);
});

app.get('/webhook', (req, res) => {
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];
  res.send(challenge)
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
const express = require('express')
const exphbs = require('express-handlebars')
const shitTalkGenerator = require('./generate_shitTalk')

const app = express()
const port = 3000

// Setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Setting body-parser
app.use(express.urlencoded({ extended: true }))

// Setting route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const shitTalk = shitTalkGenerator(req.body.job)
  res.render('index', { target: req.body.job, shitTalk })
})

// Starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app is now listening on port:${port}`)
})


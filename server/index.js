const express = require('express')
const pa11y = require('pa11y')
const cors = require('cors');


const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.static('public')) 
app.use(express.json())
app.get('/api/test', async (req, res) => {
  console.log('req.query.url', req.query.url)
  if (!req.query.url) {
    res.status(400).json({ error: 'url is required' })
  } else {
    const results = await pa11y(req.query.url)
    res.status(200).json(results)
  }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
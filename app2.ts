import express from 'express'
const app = express()
const port = 4000

app.get('/xxx', (req, res) => res.send('hello wor22ld!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
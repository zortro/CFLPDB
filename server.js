const express = require('express')
const db = require('./config/connection')
const routes = require('./routes')

const PORT = process.env.PORT
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on ${PORT}`)
    })
})

//example of posting
app.post('/post', (req, res) => {
    db.collection('test').insertOne({ title: "test" },
    (err, results) => {
        if (err) throw err
        res.json(results)
    })
})

//example of getting
app.get('/get', (req, res) => {
    db.collection('wine')
    .find()
    .toArray((err, results) => {
        if (err) throw err
        res.send(results)
    })
})
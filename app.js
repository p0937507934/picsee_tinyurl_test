const express = require('express')
const app = express()
const shortUrlRouter = require('./controller/url-controller')
const PORT = 5000


app.use(express.urlencoded({ extended: false }));
app.use('/', shortUrlRouter)
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(PORT, () => {
    console.log('server is running.');
})
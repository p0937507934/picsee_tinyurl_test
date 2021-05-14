const express = require('express')
const router = express.Router()
const axios = require('axios')


router.get('/shorturl/:shortUrl', async(req, res, next) => {
    const fullUrl = req.params.shortUrl
    const result = await axios.get('http://tinyurl.com/api-create.php?url=' + fullUrl)
    const shortUrl = result.data
    res.send(shortUrl)

})

module.exports = router
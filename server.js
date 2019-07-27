const express = require('express')

const postRouter = require('./data/post-router.js')

const server = express()

server.use(express.json())
server.use('/api/posts', postRouter)

server.get('/', (req, res) => {
    res.send(`
        <h2>Lambda Post API</h2>
        <p>Welcome!</p>
    `)
})

module.exports = server
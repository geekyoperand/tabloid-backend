const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = require('http').Server(app)
const PORT = 3001

const initialize = () => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cors())
    app.use("/api", routes)

    server
        .listen(PORT, () => console.log('Server started at Port : ', PORT))
        .on('error', (err) => {
            if (err.errno === 'EADDRINUSE') {
                console.log(`----- Port ${PORT} is busy, trying with port ${PORT + 1} -----`)
                app.listen(PORT + 1, () => console.log('Server started at Port : ', PORT + 1))
            } else console.log(err)
        })
}

initialize()

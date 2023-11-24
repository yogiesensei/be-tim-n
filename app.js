// const http = require('http')
// http.createServer((req, res) => {
//     res.write('OK')
//     res.end()
// }).listen(3001)

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: 'OK',
        status: 200,
        data: [{
                name: 'Nanik',
                course: 'SE',
            },
            {
                name: 'Bagus',
                course: 'DA',
            },
            {
                name: 'Icha',
                course: 'SE',
            },
            {
                name: 'Farhan',
                course: 'DA',
            },
        ]
    })
})

app.listen(3001, () => {
    console.log('server is running on port 3001')
})
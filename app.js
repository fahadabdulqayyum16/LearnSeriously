const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    try {
        return res.send({ message: `Hello NodeJs server is Running on port ${PORT}!`, success: true })
    } catch (e) {
        console.log('e', e);
        return res.send({ message: e?.message, success: false })
    }
})

// app.use('/', (req, res) => {
//     console.log();
//     try {
//         console.log(arr);
//         return res.send({ message: 'Hello World!', success: true })
//     } catch (e) {
//         return res.send({ message: e?.message, success: false })
//     }
// })

app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
})
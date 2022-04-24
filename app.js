const express = require('express')
const cors = require('cors')
const app = express()
const { mongoose } = require('./config')
const { Users } = require('./models')

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

console.log('mongoose', mongoose.connection);

const db = mongoose.connection

db.on('error', (err) => {
    console.log('err', err);
})

db.on('open', async () => {
    console.log('DB running!');
})

Users.find({}, function (err, users) {
    if (err) console.warn(err);
    console.warn(users);
})

// db.then(() => {
//     console.warn('Connected with db.');
// })

app.get('/', (req, res) => {
    try {
        return res.send({ message: `Hello NodeJs server is Running on port ${PORT}!`, success: true })
    } catch (e) {
        console.log('e', e);
        return res.send({ message: e?.message, success: false })
    }
})

app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
})
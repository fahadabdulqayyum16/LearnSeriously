const express = require('express')
const app = express()

const PORT = env.process.PORT || 8080

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
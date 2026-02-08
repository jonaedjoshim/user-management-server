const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 9000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the User Management Server!');
})

const users = [
    { id: 1, name: "Sabana", email: "sabana@gmail.com" },
    { id: 2, name: "Sabnoor", email: "sabnoorgmail.com" },
    { id: 3, name: "Sabila Noor", email: "sabilanoor@gmail.com" },
    { id: 4, name: "Safa Kabir", email: "safakabir@gmail.com" },
    { id: 5, name: "Tanjin Tisha", email: "tanjintisha@gmail.com" },
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log('users post mathod')
    console.log(req.body)
    const newUser = req.body
    newUser.id = users.length + 1

    // add user to the database
    users.push(newUser)

    res.send(newUser)
})

app.listen(port, () => {
    console.log(`User management server is running on port ${port}`);
})
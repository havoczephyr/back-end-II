const express = require("express")
const cors = require("cors")

const app = express();

const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller.js')

app.use(cors())
app.use(express.json())

const SERVER_PORT = 4004

app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

app.listen(SERVER_PORT, () => {
    console.log(`We bringin' it to ya' live @ ${SERVER_PORT}.`)
})
const express = require("express")
const morgan = require("morgan")
require("./config")

const app = express()
const PORT = process.env.PORT

app.use(morgan())
app.use(express.json())

let route = require("./network/routes")
route(app)

app.listen(PORT, () => {
    console.clear()
    console.log(`Servidor corriendo el puerto http://localhost:${PORT}`)
})
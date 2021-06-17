const express = require("express")
const controller = require("./controller")

const route = express()

route.get("/", (req, res) => {
    let msg = controller.register("Xd")
    res.json(msg)
})


module.exports = route
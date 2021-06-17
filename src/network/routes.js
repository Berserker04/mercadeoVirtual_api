const express = require("express")
const user = require("../components/user/network") 
const people = require("../components/people/network") 

const routes = (app) => {
    app.use("/user", user)
    app.use("/people", people)

    return app
}

module.exports = routes
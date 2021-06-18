const express = require("express");
const user = require("../components/user/network");
const people = require("../components/people/network");
const role = require("../components/role/network");

const routes = (app) => {
  app.use("/user", user);
  app.use("/people", people);
  app.use("/role", role);

  return app;
};

module.exports = routes;

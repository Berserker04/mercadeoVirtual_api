const express = require("express");
const user = require("../components/user/network");
const people = require("../components/people/network");
const role = require("../components/role/network");
const publication = require("../components/publication/network");
const report = require("../components/report/network");

const routes = (app) => {
  app.use("/user", user);
  app.use("/people", people);
  app.use("/role", role);
  app.use("/publication", publication);
  app.use("/report", report);
};

module.exports = routes;

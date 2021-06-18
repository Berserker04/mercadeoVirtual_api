const express = require("express");
const response = require("./response");

const user = require("../components/user/network");
const people = require("../components/people/network");
const role = require("../components/role/network");
const publication = require("../components/publication/network");
const report = require("../components/report/network");
const auth = require("../components/auth/network");
const statistics = require("../components/statistics/network");

const routes = (app) => {
  app.use("/login", auth);
  app.use("/user", user);
  app.use("/people", people);
  app.use("/role", role);
  app.use("/publication", publication);
  app.use("/report", report);
  app.use("/statistic", statistics);

  app.get("/", (req, res) => {
    response.success(req, res, 200, "Servidor corriendo");
  });
  app.all("/*", (req, res) => {
    response.error(req, res, 404, "Ruta no encontrado");
  });
};

module.exports = routes;

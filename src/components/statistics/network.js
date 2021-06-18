const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");
const validateToken = require("../auth/middlewares/valitadeteToken");

const route = express();

route.get("/user", validateToken, (req, res) => {
  controller
    .searchUser(req.headers.super_user)
    .then((result) => {
      response.success(req, res, 200, "Cantidad de usuarios", result);
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al consultar intenda más tarde.");
    });
});

route.get("/user/active", validateToken, (req, res) => {
  controller
    .searchUserActive(req.headers.super_user)
    .then((result) => {
      response.success(req, res, 200, "Cantidad de usuarios activos", result);
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al consultar intenda más tarde.");
    });
});

route.get("/user/desactive", validateToken, (req, res) => {
  controller
    .searchUserDesactive(req.headers.super_user)
    .then((result) => {
      response.success(req, res, 200, "Cantidad de usuarios desactivos", result);
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al consultar intenda más tarde.");
    });
});

route.get("/report", validateToken, (req, res) => {
  controller
    .searchReport(req.headers.super_user)
    .then((result) => {
      response.success(req, res, 200, "Cantidad de reportes", result);
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al consultar intenda más tarde.");
    });
});

route.get("/publication", validateToken, (req, res) => {
  controller
    .searchPublication(req.headers.super_user)
    .then((result) => {
      response.success(req, res, 200, "Cantidad de publicaciones", result);
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al consultar intenda más tarde.");
    });
});

module.exports = route;

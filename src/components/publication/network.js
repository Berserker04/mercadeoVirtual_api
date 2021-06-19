const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");
const validateToken = require("../auth/middlewares/valitadeteToken");

const route = express();

route.post("/", validateToken, (req, res) => {
  let { super_user } = req.headers;
  controller
    .register(super_user, req.body)
    .then((result) => {
      if (!result) return response.error(req, res, 200, "Revisa los datos.");
      response.success(req, res, 201, "Registro exíto.", result);
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al registrar intenda más tarde.");
    });
});

route.get("/", validateToken, (req, res) => {
  let filter = {
    super_user: req.headers.super_user,
    ...req.query,
  };
  controller
    .search(filter)
    .then((result) => {
      response.success(req, res, 200, "Publicaciones registrados", result);
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al registrar intenda más tarde.");
    });
});

route.put("/:_id", validateToken, (req, res) => {
  controller
    .update(req.params._id, req.body)
    .then((result) => {
      if (!result) return response.error(req, res, 200, "Revisa los datos.");
      response.success(req, res, 200, "Modificación exíto.");
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al modificar intenda más tarde.");
    });
});

route.delete("/:_id", validateToken, (req, res) => {
  controller
    .remove(req.params._id)
    .then((result) => {
      if (!result) return response.error(req, res, 200, "Revisa los datos.");
      response.success(req, res, 200, "Eliminación exítosa.");
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al eliminar intenda más tarde.");
    });
});

module.exports = route;

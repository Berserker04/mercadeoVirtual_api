const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");

const route = express();

route.post("/", async (req, res) => {
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

route.get("/", (req, res) => {
  let filter = {
    user_id: req.headers.user_id,
    ...req.query,
  };
  controller
    .search(filter)
    .then((result) => {
      response.success(req, res, 200, "Reportes registrados", result);
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al registrar intenda más tarde.");
    });
});

route.put("/:_id", async (req, res) => {
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

route.delete("/:_id", async (req, res) => {
  controller
    .remove(req.params._id)
    .then((result) => {
      if (!result) return response.error(req, res, 200, "Revisa los datos.");
      response.success(req, res, 200, "Eliminación exíta.");
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al eliminar intenda más tarde.");
    });
});

module.exports = route;

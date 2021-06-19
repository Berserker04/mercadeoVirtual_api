const express = require("express");

const response = require("../../network/response");
const controller = require("./controller");
const validateToken = require("../auth/middlewares/valitadeteToken");

const route = express();

route.post("/", (req, res) => {
  controller
    .register(req.body)
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
  if (!req.headers.user_id)
    return response.error(req, res, 403, "No autorizado");
  let filter = {
    user_id: req.headers.user_id,
    ...req.query,
  };
  controller
    .search(filter)
    .then((result) => {
      response.success(req, res, 200, "Usuarios registrados", result);
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al registrar intenda más tarde.");
    });
});

route.get("/id/:_id", validateToken, (req, res) => {
  controller
    .search({ ...req.params })
    .then((result) => {
      response.success(req, res, 200, "Usuarios registrados", result);
    })
    .catch((error) => {
      console.error(error);
      response.error(req, res, 500, "Error al registrar intenda más tarde.");
    });
});

route.patch("/:_id", validateToken, (req, res) => {
  let filter = {
    user_id: req.headers.superuser_id,
    ...req.params,
  };
  let data = { state: req.body.state };
  controller
    .changeState(filter, data)
    .then((result) => {
      if (!result) return response.error(req, res, 200, "Revisa los datos.");
      response.success(req, res, 200, "Estado modificado.");
    })
    .catch((error) => {
      console.error(error);
      response.error(
        req,
        res,
        500,
        "Error al cambiar el estado intenda más tarde."
      );
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

module.exports = route;

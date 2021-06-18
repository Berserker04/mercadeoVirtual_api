const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("./config");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(morgan());
app.use(express.json());

let route = require("./network/routes");
route(app);
  
app.listen(PORT, () => {
  console.clear();
  console.log(`Servidor corriendo el puerto http://localhost:${PORT}`);
});

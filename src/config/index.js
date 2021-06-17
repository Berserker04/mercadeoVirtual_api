if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

// Conexión a la base de datos
const DB_DEV = process.env.DB_DEV
const mongoose = require('mongoose');
mongoose.connect(DB_DEV, { useUnifiedTopology: true, useNewUrlParser: true, server: { poolSize: 3 } });
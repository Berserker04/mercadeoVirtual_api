const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roles = new Schema({
  name: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },
});

module.exports = mongoose.model("roles", roles);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
  email: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  permits: {
    type: Object,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },
  person_id: {
    type: Schema.Types.ObjectId,
    ref: "people",
    required: true,
  },
  //   role_id: {
  //     type: Schema.Types.ObjectId,
  //     ref: "roles",
  //     required: true,
  //   },
  state: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", users);

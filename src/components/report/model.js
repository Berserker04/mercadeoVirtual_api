const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reports = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  person_id: {
    type: Schema.Types.ObjectId,
    ref: "people",
    required: true,
  },
  super_user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  state: {
    type: String,
    required: true,
    default: "active"
  },
  created_at: {
    type: Date,
    default: new Date()
  },
});

module.exports = mongoose.model("reports", reports);

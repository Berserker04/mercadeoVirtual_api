const Report = require("./model");

const add = async (report) => {
  let newReport = new Report(report);
  return await newReport.save({ new: true });
};

const get = async (filter = {}) => {
  return await Report.find(filter).populate("person_id");
};

const edit = async (_id, data = {}) => {
  return await Report.updateOne({ _id }, data);
};

const del = async (_id) => {
  return await Report.deleteOne({ _id });
};

module.exports = {
  add,
  get,
  edit,
  del,
};

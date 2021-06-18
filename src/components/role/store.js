const Role = require("./model");

const add = async (role) => {
  let newRole = new Role(role);
  return await newRole.save({ new: true });
};

const get = async (filter = {}) => {
  return await Role.find(filter, ["name"]);
};

const edit = async (_id, data = {}) => {
  return await Role.updateOne({ _id }, data);
};

const del = async (_id) => {
  return await Role.deleteOne({ _id });
};

module.exports = {
  add,
  get,
  edit,
  del,
};

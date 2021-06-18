const Publicatin = require("./model");

const add = async (publication) => {
  let newPublication = new Publicatin(publication);
  return await newPublication.save({ new: true });
};

const get = async (filter = {}) => {
  return await Publicatin.find(filter).populate("person_id");
};

const edit = async (_id, data = {}) => {
  return await Publicatin.updateOne({ _id }, data);
};

const del = async (_id) => {
  return await Publicatin.deleteOne({ _id });
};

module.exports = {
  add,
  get,
  edit,
  del,
};

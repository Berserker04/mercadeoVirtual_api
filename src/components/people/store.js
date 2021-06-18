const Person = require("./model");

const add = async (person) => {
  let newPerson = new Person(person);
  return await newPerson.save({ new: true });
};

const edit = async (filter = {}, data = {}) => {
  return await Person.updateOne(filter, data);
};

module.exports = {
  add,
  edit
}
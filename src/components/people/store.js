const Person = require("./model");

const add = async (person) => {
  let newPerson = new Person(person);
  return await newPerson.save({ new: true });
};

const edit = async (person) => {
  let newPerson = new Person(person);
  return await newPerson.save({ new: true });
};

module.exports = {
  add,
  edit
}
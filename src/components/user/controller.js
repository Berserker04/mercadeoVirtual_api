const bcrypt = require("bcrypt");

const storePerson = require("../people/store");
const store = require("./store");

const register = async (data) => {
  let { user, ...person } = data;

  if (!user || !person) {
    return false;
  }

  person = await storePerson.add(person).catch((e) => false);

  user.password = bcrypt.hashSync(user.password, 10);

  user.password = user = {
    ...user,
    user_id: null,
    person_id: person._id,
    permits: {
      edit: true,
      delete: true,
      hide: true,
      publish: true,
    },
    role: person._id,
    state: "active",
  };

  return await store
    .add(user)
    .then((result) => {
      result.password = "";
      return result;
    })
    .catch((e) => false);
};

const search = async (filter) => {
  return await store.get(filter).catch((e) => false);
};

const changeState = async (filter, data) => {
  return await store.edit(filter, data).catch((e) => false);
};

const update = async (filter, data) => {
  let { user, ...person } = data;

  if (!user || !person) {
    return false;
  }

  await storePerson.edit(person._id, person).catch((e) => false);

  user.password = bcrypt.hashSync(user.password, 10);

  user.password = user = {
    ...user,
    permits: {
      edit: true,
      delete: true,
      hide: true,
      publish: true,
    },
    role: person._id,
    state: "active",
  };

  return await store
    .add(user)
    .then((result) => {
      result.password = "";
      return result;
    })
    .catch((e) => false);
};

module.exports = {
  register,
  search,
  changeState,
  update
};

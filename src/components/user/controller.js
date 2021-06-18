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

  user.role_id = user.role ? user.role_id : "60cbf252a38acb24e4ebde16";

  user = {
    ...user,
    user_id: null,
    person_id: person._id,
    permits: {
      edit: true,
      delete: true,
      hide: true,
      publish: true,
    },
    state: "active",
  };

  return await store
    .add(user)
    .then((result) => {
      user.password = undefined;
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

const update = async (user_id, data) => {
  let { user, ...person } = data;

  if (!user || !person) {
    return false;
  }

  await storePerson.edit({ _id: person._id }, person).catch((e) => false);

  user.password = bcrypt.hashSync(user.password, 10);

  return await store
    .edit({ _id: user_id }, user)
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
  update,
};

const store = require("./store");

const register = async (user_id, data) => {
  if (!data) {
    return false;
  }

  return await store
    .add({ user_id, ...data })
    .then((result) => result)
    .catch((e) => false);
};

const search = async (filter) => {
  return await store.get(filter).catch((e) => false);
};

const update = async (role_id, data) => {
  if (!data) {
    return false;
  }

  return await store
    .edit(role_id, data)
    .then((result) => result)
    .catch((e) => false);
};

const remove = async (role_id) => {
  return await store.del(role_id).catch((e) => false);
};

module.exports = {
  register,
  search,
  update,
  remove,
};

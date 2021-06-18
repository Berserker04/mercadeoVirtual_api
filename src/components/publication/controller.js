const store = require("./store");

const register = async (super_user, data) => {
  if (!data) {
    return false;
  }

  return await store
    .add({ ...data, super_user })
    .then((result) => result)
    .catch((e) => false);
};

const search = async (filter) => {
  return await store.get(filter).catch((e) => false);
};

const update = async (publication_id, data) => {
  if (!data) {
    return false;
  }

  return await store
    .edit(publication_id, data)
    .then((result) => result)
    .catch((e) => false);
};

const remove = async (publication_id) => {
  return await store.del(publication_id).catch((e) => false);
};

module.exports = {
  register,
  search,
  update,
  remove,
};

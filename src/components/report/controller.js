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

const update = async (report_id, data) => {
  if (!data) {
    return false;
  }

  return await store
    .edit(report_id, data)
    .then((result) => result)
    .catch((e) => false);
};

const remove = async (report_id) => {
  return await store.del(report_id).catch((e) => false);
};

module.exports = {
  register,
  search,
  update,
  remove,
};

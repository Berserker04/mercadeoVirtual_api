const store = require("./store");

const searchUser = async (super_user) => {
  console.log(super_user);
  return 1 + (await store.getUser({ user_id: super_user }).catch((e) => false));
};

const searchUserActive = async (super_user) => {
  return (
    1 + (await store.getUserActive({ user_id: super_user }).catch((e) => false))
  );
};

const searchUserDesactive = async (super_user) => {
  return await store
    .getUserDesactive({ user_id: super_user })
    .catch((e) => false);
};

const searchReport = async (super_user) => {
  return await store.getReport(super_user).catch((e) => false);
};

const searchPublication = async (super_user) => {
  return await store.getPublication(super_user).catch((e) => false);
};

module.exports = {
  searchUser,
  searchUserActive,
  searchUserDesactive,
  searchReport,
  searchPublication,
};

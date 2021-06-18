const User = require("../user/model");
const Report = require("../report/model");
const Publication = require("../publication/model");

const getUser = async (filter) => {
  return await User.find(filter).countDocuments();
};

const getUserActive = async (filter) => {
  return await User.find({...filter, state: "active"}).countDocuments();
};

const getUserDesactive = async (filter) => {
  return await User.find({...filter, state: "desactive"}).countDocuments();
};

const getReport = async (filter) => {
  return await Report.find({super_user: filter}).countDocuments();
};

const getPublication = async (filter) => {
  return await Publication.find({super_user: filter}).countDocuments();
};

module.exports = {
  getUser,
  getReport,
  getPublication,
  getUserActive,
  getUserDesactive,
};

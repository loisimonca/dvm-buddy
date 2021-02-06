import axios from "axios";

export default {
  getUser: function () {
    return axios.get("/api/users");
  },
  createUser: function (newUser) {
    return axios.post("/api/users", newUser);
  },
  userLogin: function (data) {
    return axios.post("/api/users/login", data);
  },
  getEmployee: function () {
    return axios.get("/api/employee");
  },
  getClassified: function () {
    return axios.get("/api/classified");
  },
};

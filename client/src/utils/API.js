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
  getClassified: function () {
    return axios.get("/api/classified");
  },
  getZipCode: function (currentZip, distance) {
    return axios.get(`/api/classified/zipcode/${currentZip}/${distance}`);
  },
};

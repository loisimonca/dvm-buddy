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
  getUserById: function (userId) {
    return axios.get(`/api/users/${userId}`);
  },
  getClassified: function () {
    return axios.get("/api/classified");
  },
  getZipCode: function (currentZip, distance) {
    return axios.get(`/api/classified/zipcode/${currentZip}/${distance}`);
  },
  //grabs all available appointments to display
  getAvailAppts: function () {
    return axios.get("/api/appointments");
  },
  //needs _id from user collection
  getApptByCustomer: function (userId) {
    return axios.get(`/api/appointments/customer/${userId}`);
  },
  //needs id of schedule
  deleteAppt: function (apptId) {
    return axios.delete(`/api/appointments/${apptId}`);
  },
  //userId is the _id from user table
  setAppt: function (apptId, userId) {
    return axios.put(`/api/appointments/${apptId}`, userId);
  },
  //route needs apptDate formatted as "YYYY-MM-DD" and apptTime formatted as "hh:mm"
  createAppt: function (data) {
    return axios.post("/api/appointments/", data);
  },
};

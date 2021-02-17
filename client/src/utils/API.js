import axios from "axios";

export default {
  getUser: function () {
    return axios.get("/api/users");
  },
  getEmployee: function () {
    return axios.get("/api/users/employee");
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
  getUserIdByEmail: function (email) {
    return axios.get(`/api/users/findByEmail/${email}`);
  },
  getClassified: function () {
    return axios.get("/api/classified");
  },
  getClassifiedById: function (serviceId) {
    return axios.get(`/api/classified/${serviceId}`);
  },
  updateClassifiedById: function (serviceId, data) {
    return axios.put(`/api/classified/${serviceId}`, data);
  },
  deleteClassified: function (serviceId) {
    return axios.delete(`/api/classified/${serviceId}`);
  },
  createClassified: function (serviceInfo) {
    return axios.post("/api/classified/", serviceInfo);
  },
  updateUserById: function (userId, data) {
    return axios.put(`/api/users/${userId}`, data);
  },
  getZipCode: function (currentZip, distance, query) {
    return axios.get(
      `/api/classified/zipcode/${currentZip}/${distance}/${query}`
    );
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
  setAppt: function (apptId, user) {
    return axios.put(`/api/appointments/${apptId}`, {user});
  },
  setApptByEmail: function (user, apptId) {
    console.log("user", user);
    console.log("apptId", apptId);
    return axios.put(`/api/appointments/user/${user}`, {apptId});
  },
  //route needs apptDate formatted as "YYYY-MM-DD" and apptTime formatted as "hh:mm"
  createAppt: function (data) {
    return axios.post("/api/appointments/", data);
  },
  findOneAppt: function (apptId) {
    return axios.get(`/api/appointments/${apptId}`);
  },
  listAllAppointments: function () {
    return axios.get("/api/appointments/list/all");
  },
};

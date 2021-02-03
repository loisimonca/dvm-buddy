const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
//Add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//temporary route for test
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

//test drive for react app
app.get("/api/test", (req, res) => {
  res.json({
    name: "song",
  });
});

//add mongoDB & mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/dvm-buddy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
//connection err check
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose successfully connected");
});
connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

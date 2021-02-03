import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./component/Navbar/Navbar";
function App() {
  //express server api route test
  useEffect(() => {
    axios.get("/api/test").then((response) => {
      console.log(response.data);
    }, []);
  });
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;

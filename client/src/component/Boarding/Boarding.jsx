import React, { useEffect, useState } from "react";
import BoardingCard from "../BoardingCard/BoardingCard";
import Wrapper from "../Wrapper/Wrapper";
import * as API from "../Wrapper/API.js";
// import zipcodes from "zipcodes";
import "./Boarding.css";
// import zipcodes from "zipcodes-nearby";

// var zipcodes = require("@scope/zipcodes-nearby");
var zipcodes = require("zipcodes-nearby");

const Boarding = () => {
  const [boarders, setBoarders] = useState([]);
  const [zip, setZip] = useState("");
  const [distance, setDistance] = useState("");
  // const [sortedBoarders, setSortedBoarders] = useState([]);

  useEffect(() => {
    API.getDeveloper
      .then((res) => {
        setBoarders(res);
        console.log(boarders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleZipInputChange = (e) => {
    setZip(e.target.value);
    console.log(zip);
  };

  const handleDistanceInputChange = (e) => {
    setDistance(e.target.value);
    console.log(distance);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newSortedBoarders = zipcodes.near("95020", 10000, {
  //     datafile: "./zipcodes.csv",
  //   });

  //   console.log(newSortedBoarders);
  // };

  return (
    <Wrapper>
      <form className="zipcontainer has-text-centered">
        <input
          className="input zipcode-input"
          type="number"
          name="zip"
          value={zip}
          onChange={handleZipInputChange}
          placeholder="Search by Zipcode"
        />
        <input
          className="input distance-input"
          type="number"
          name="distance"
          value={distance}
          onChange={handleDistanceInputChange}
          placeholder="50 Miles Radius"
        />
        <button
          //  onClick={handleSubmit}
          className="button searchDistance"
        >
          <strong>Search</strong>
        </button>
      </form>
      {boarders.map((boarder) => [
        <BoardingCard
          service={boarder.service}
          name={boarder.name}
          zip={boarder.zip}
          key={boarder.id}
        />,
      ])}
    </Wrapper>
  );
};

export default Boarding;

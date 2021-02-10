import React, { useEffect, useState } from "react";
import BoardingCard from "../BoardingCard/BoardingCard";
import Wrapper from "../Wrapper/Wrapper";
import "./Boarding.css";
import API from '../../utils/API'


const Boarding = () => {
  const [boarders, setBoarders] = useState({});
  const [zip, setZip] = useState("");
  const [distance, setDistance] = useState("");
  // const [sortedBoarders, setSortedBoarders] = useState([]);

  useEffect(() => {
    API.getClassified()
      .then((res) => {
        setBoarders(res.data);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getZipCode(zip, distance)
    .then(res => {
      setBoarders(res.data)
    })
    .catch(err => console.log(err))
  };
  return (
    <Wrapper>
      <form className="zipcontainer has-text-centered" type='submit'>
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
           onClick={handleSubmit}
          className="button searchDistance"
        >
          <strong>Search</strong>
        </button>
      </form>
      {boarders.length > 0 ? boarders.map(data =>
        <BoardingCard name={data.name} zip={data.zipCode} key={data._id} />
      ):
      <h1>No Data Found</h1>
    }
    </Wrapper>
  );
};

export default Boarding;

import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import "./PetServices.css";
import BoardingCard from "../BoardingCard/BoardingCard";
import API from "../../utils/API";

const PetServices = () => {
  let arrToBeShown = [];
  const [allServices, setAllServices] = useState([]);
  const [filteredService, setFilteredService] = useState([]);
  const [zip, setZip] = useState("");
  const [distance, setDistance] = useState("");
  const [dataFromZipcode, setDataFromZipcode] = useState([]);

  useEffect(() => {
    API.getClassified()
      .then((res) => {
        setAllServices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //----------------- THIS IS THE HANDLE CATEGORY FUNCTION----------------
  const handleCategoryChange = (e) => {
    let query = e.target.value; // getting name of selected dropdown
    let display = [];
    // const newArray = filteredService.concat(allServices);

    for (let newArray of allServices) {
      if (newArray.category === query) {
        display.push(newArray);
      }
    }

    //then set displayServices
    setFilteredService(display);
    console.log(display);
  };
  //----------------- THIS IS THE HANDLE ZIP CHANGE FUNCTION----------------
  const handleZipInputChange = (e) => {
    setZip(e.target.value);
  };
  //----------------- THIS IS THE HANDLE DISTANCE CHANGE FUNCTION----------------
  const handleDistanceInputChange = (e) => {
    setDistance(e.target.value);
  };
  //----------------- THIS IS THE HANDLE SUBMIT FUNCTION----------------
  const handleSubmit = (e) => {
    e.preventDefault();
    let display = [];
    API.getZipCode(zip, distance)
      .then((res) => {
        setDataFromZipcode(res.data);

        for (var i = 0; i < res.data.length; i++) {
          filteredService.map((data) => {
            if (data === res.data[i]) {
              display.push(data);
              setFilteredService(display);
            }
          });
        }
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="serviceContainer">
      <Wrapper>
        <form className="serviceForm container has-text-centered">
          <div className="dropdown">
            {/* <div className="custom-select"> */}
            <select onChange={handleCategoryChange}>
              <option value="0">Select a Service</option>
              <option value="Walker">Walker</option>
              <option value="Boarding">Boarding</option>
              <option value="Sitter">Sitter</option>
            </select>
            {/* </div> */}
          </div>

          <input
            className="service-input zipcode-input"
            type="number"
            name="zip"
            onChange={handleZipInputChange}
            placeholder="Search by Zipcode"
          />
          <input
            className="service-input distance-input"
            type="number"
            name="distance"
            onChange={handleDistanceInputChange}
            placeholder="50 Miles Radius"
          />

          <button onClick={handleSubmit} className="button searchService">
            <strong>Search</strong>
          </button>
        </form>
        {filteredService.length > 0
          ? filteredService.map((serve) => [
              <BoardingCard
                service={serve.category}
                name={serve.name}
                zip={serve.zipCode}
                key={serve._id}
                phone={serve.tel}
              />,
            ])
          : allServices.map((serve) => [
              <BoardingCard
                service={serve.category}
                name={serve.name}
                zip={serve.zipCode}
                key={serve._id}
                phone={serve.tel}
              />,
            ])}
      </Wrapper>
    </div>
  );
};

export default PetServices;

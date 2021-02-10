import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import * as API from "../Wrapper/API.js";
import "./PetServices.css";
import BoardingCard from "../BoardingCard/BoardingCard";
// import zipcodes from "zipcodes";
// import zipcodes from "zipcodes-nearby";

// var zipcodes = require("@scope/zipcodes-nearby");
// var zipcodes = require("zipcodes-nearby");

const PetServices = () => {
  const [allServices, setAllServices] = useState([]);
  const [boarderServices, setBoarderServices] = useState([]);
  const [walkerServices, setWalkerServices] = useState([]);
  const [sitterServices, setSitterServices] = useState([]);
  // const [boarders, setBoarders] = useState([]);
  // const [zip, setZip] = useState("");
  // const [distance, setDistance] = useState("");
  // const [sortedBoarders, setSortedBoarders] = useState([]);

  useEffect(() => {
    API.getDeveloper
      .then((res) => {
        setAllServices(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleWalkerService = (e) => {
    e.preventDefault();
    const filteredServices = allServices.filter((service) => {
      return service.includes(walkerServices);
    });
    setWalkerServices(filteredServices);
  };
  // const handleZipInputChange = (e) => {
  //   setZip(e.target.value);
  //   console.log(zip);
  // };

  // const handleDistanceInputChange = (e) => {
  //   setDistance(e.target.value);
  //   console.log(distance);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newSortedBoarders = zipcodes.near("95020", 10000, {
  //     datafile: "./zipcodes.csv",
  //   });

  //   console.log(newSortedBoarders);
  // };

  document.addEventListener("DOMContentLoaded", function () {
    var $dropdowns = getAll(".dropdown:not(.is-hoverable)");
    if ($dropdowns.length > 0) {
      $dropdowns.forEach(function ($el) {
        $el.addEventListener("click", function (event) {
          event.stopPropagation();
          $el.classList.toggle("is-active");
        });
      });
      document.addEventListener("click", function (event) {
        closeDropdowns();
      });
    }
    function closeDropdowns() {
      $dropdowns.forEach(function ($el) {
        $el.classList.remove("is-active");
      });
    }
    // Close dropdowns if ESC pressed
    document.addEventListener("keydown", function (event) {
      var e = event || window.event;
      if (e.keyCode === 27) {
        closeDropdowns();
      }
    });

    // Functions
    function getAll(selector) {
      return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }
  });

  // const myFunction = (e) => {
  //   if (document.querySelector("#dropdownList a.active") !== null) {
  //     document
  //       .querySelector("#dropdownList a.active")
  //       .classList.remove("active");
  //   }
  //   e.target.className = "active";
  // };

  return (
    <div className="serviceContainer">
      <Wrapper>
        <form className="serviceForm container has-text-centered">
          <div class="dropdown">
            <div class="dropdown-trigger">
              <a
                class="dropdownButton"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>Select type of pet service</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </div>
            <div class="dropdown-menu " id="dropdown-menu" role="menu">
              <div id="dropdownList" class="dropdown-content has-text-centered">
                <Link class="dropdown-item" onClick={handleWalkerService}>
                  Walker
                </Link>
                <Link class="dropdown-item is-active">Boarder</Link>

                <Link to="/" class="dropdown-item">
                  Sitter
                </Link>
              </div>
            </div>
          </div>
          {/* <input
          className="input distance-input"
          type="number"
          name="distance"
          value={distance}
          onChange={handleDistanceInputChange}
          placeholder="50 Miles Radius"
        /> */}

          <button
            //  onClick={handleSubmit}
            className="button searchService"
          >
            <strong>Search</strong>
          </button>
        </form>

        {allServices.map((serve) => [
          <BoardingCard
            service={serve.service}
            name={serve.name}
            zip={serve.zip}
            key={serve.id}
            phone={serve.phone}
          />,
        ])}
      </Wrapper>
    </div>
  );
};

export default PetServices;

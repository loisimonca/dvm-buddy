import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import "./PetServices.css";
import BoardingCard from "../BoardingCard/BoardingCard";
import API from '../../utils/API'
const PetServices = () => {
  const [allServices, setAllServices] = useState([]);
  const [boarderServices, setBoarderServices] = useState([]);
  const [walkerServices, setWalkerServices] = useState([]);
  const [sitterServices, setSitterServices] = useState([]);

  const [zip, setZip] = useState("");
  const [distance, setDistance] = useState("");

  useEffect(() => {
    API.getClassified()
      .then((res) => {
        setAllServices(res.data);
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
  
  const handleZipInputChange = (e) => {
    setZip(e.target.value);
  }
  const handleDistanceInputChange = (e) => {
    setDistance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getZipCode(zip, distance)
    .then(res => {
      setAllServices(res.data)
    })
    .catch(err => console.log(err))
  };

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
          <div className="dropdown">
            <div className="dropdown-trigger">
              <a
                className="dropdownButton"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>Select type of pet service</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </div>
            <div className="dropdown-menu " id="dropdown-menu" role="menu">
              <div id="dropdownList" className="dropdown-content has-text-centered">
                <Link className="dropdown-item" onClick={handleWalkerService}>
                  Walker
                </Link>
                <Link className="dropdown-item is-active">Boarder</Link>

                <Link to="/" className="dropdown-item">
                  Sitter
                </Link>
              </div>
            </div>
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

          <button
             onClick={handleSubmit}
            className="button searchService"
          >
            <strong>Search</strong>
          </button>
        </form>

        {allServices.map((serve) => [
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

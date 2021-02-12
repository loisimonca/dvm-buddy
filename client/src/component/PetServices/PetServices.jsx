import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import "./PetServices.css";
import BoardingCard from "../BoardingCard/BoardingCard";
import API from "../../utils/API";
const PetServices = () => {
  const [allServices, setAllServices] = useState([]);
  const [service, setService] = useState("");
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

  //----------------- THIS IS THE HANDLE SITTER SERVICE FUNCTION----------------
  const handleCategoryChange = (e) => {
    console.log("jhello");
    let query = e.target.name; // getting name of selected dropdown
    let display = [];

    for (let service of allServices) {
      if (service.category == query) {
        display.push(service); //push service into display
      }
    }

    //then set displayServices
    setService(display);
    console.log(service);
  };

  const handleZipInputChange = (e) => {
    setZip(e.target.value);
  };
  const handleDistanceInputChange = (e) => {
    setDistance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getZipCode(zip, distance)
      .then((res) => {
        setAllServices(res.data);
      })
      .catch((err) => console.log(err));
  };
  document.addEventListener("DOMContentLoaded", function () {
    // Functions
    function getAll(selector) {
      return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }

    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
    create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
          /* When an item is clicked, update the original select box,
        and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML === this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }

    function closeAllSelect(elmnt) {
      /* A function that will close all select boxes in the document,
  except the current select box: */
      var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt === y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }

    /* If the user clicks anywhere outside the select box,
then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
  });

  return (
    <div className="serviceContainer">
      <Wrapper>
        <form className="serviceForm container has-text-centered">
          <div className="dropdown">
            <div className="custom-select">
              <select>
                <option value="0">Select a Service</option>
                <option onChange={handleCategoryChange} name="Walker" value="1">
                  Walker
                </option>
                <option
                  onChange={handleCategoryChange}
                  name="Boarder"
                  value="2"
                >
                  Boarder
                </option>
                <option onChange={handleCategoryChange} name="Sitter" value="3">
                  Sitter
                </option>
              </select>
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

          <button onClick={handleSubmit} className="button searchService">
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

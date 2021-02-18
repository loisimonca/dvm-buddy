import React, { useState } from "react";
import { numberOnly, emailVal } from "../CustomerAccount/regexSet";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./NewServiceModal.css";

const NewServiceModal = (props) => {
  const [serviceInfo, setServiceInfo] = useState({
    category: "",
    name: "",
    tel: 0,
    email: "",
    zipCode: 0,
  });
  const [match, setMatch] = useState({ matchTel: false, matchEmail: false });

  const handleChange = function (e) {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.name;
    if (id === "serviceCategory") {
      setServiceInfo({ ...serviceInfo, category: value });
    } else if (id === "serviceProviderName") {
      setServiceInfo({ ...serviceInfo, name: value });
    } else if (id === "serviceProviderPhone") {
      if (value === "" || numberOnly.test(value) === false) {
        setMatch({ ...match, matchTel: false });
      } else {
        setMatch({ ...match, matchTel: true });
        setServiceInfo({ ...serviceInfo, tel: value });
      }
    } else if (id === "serviceProviderEmail") {
      if (value === "" || emailVal.test(value) === false) {
        setMatch({ ...match, matchEmail: false });
      } else {
        setMatch({ ...match, matchEmail: true });
        setServiceInfo({ ...serviceInfo, email: value });
      }
    } else if (id === "serviceProviderZip") {
      setServiceInfo({ ...serviceInfo, zipCode: value });
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (match.matchEmail === true && match.matchTel === true) {
      API.createClassified(serviceInfo)
        .then((res) => {
          // console.log(res);
          alert("Success!");
          window.location.replace("/adminpetservices");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter a valid email and phone number");
    }
  };

  return (
    <div>
      <div className="modal is-active" id="showModal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Pet Services</p>
            <Link
              to="/adminpetservices"
              className="delete modal-close"
              aria-label="close"
            ></Link>
          </header>
          <section className="modal-card-body">
            <form onSubmit={handleSubmit} className="has-text-centered">
              <div className="ModalDropDown service-input">
                <div className="dropdown select ">
                  <select name="serviceCategory" onChange={handleChange}>
                    <option value="0">Select a Service</option>
                    <option value="Walker">Walker</option>
                    <option value="Boarding">Boarding</option>
                    <option value="Sitter">Sitter</option>
                  </select>
                </div>
              </div>

              {/* <div className="user-login-with-account">
                <input
                  autoComplete="off"
                  type="text"
                  name="serviceCategory"
                  placeholder="Category"
                  onChange={handleChange}
                />
              </div> */}
              <div className="user-login-with-account">
                <input
                  autoComplete="off"
                  type="text"
                  name="serviceProviderName"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>
              <div className="user-login-with-account">
                <input
                  autoComplete="off"
                  type="text"
                  name="serviceProviderPhone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>
              <div className="user-login-with-account">
                <input
                  autoComplete="off"
                  type="text"
                  name="serviceProviderEmail"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="user-login-with-account">
                <input
                  autoComplete="off"
                  type="text"
                  name="serviceProviderZip"
                  placeholder="Zipcode"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  className="create-account-submit-btn"
                  type="submit"
                  value="Submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NewServiceModal;

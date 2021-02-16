import React, { useState, useEffect } from "react";
import { numberOnly, emailVal } from "../CustomerAccount/regexSet";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";

const EditServiceModal = (props) => {
  const [currentServiceInfo, setCurrentServiceInfo] = useState({});
  const [updatedServiceInfo, setUpdatedServiceInfo] = useState({});
  const [match, setMatch] = useState({ phone: false, email: false });
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    API.getClassifiedById(id)
      .then((res) => {
        setCurrentServiceInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = function (e) {
    e.preventDefault();
    const value = e.target.value;
    const id = e.target.name;
    if (id === "serviceCategory") {
      setUpdatedServiceInfo({ ...updatedServiceInfo, category: value });
    } else if (id === "serviceProviderName") {
      setUpdatedServiceInfo({ ...updatedServiceInfo, name: value });
    } else if (id === "serviceProviderPhone") {
      if (value === "" || numberOnly.test(value) === false) {
        setUpdatedServiceInfo({ ...match, phone: false });
      } else {
        setMatch({ ...match, phone: true });
        setUpdatedServiceInfo({ ...updatedServiceInfo, tel: value });
      }
    } else if (id === "serviceProviderEmail") {
      if (value === "" || emailVal.test(value) === false) {
        setUpdatedServiceInfo({ ...match, email: false });
      } else {
        setMatch({ ...match, email: true });
        setUpdatedServiceInfo({ ...updatedServiceInfo, email: value });
      }
    } else if (id === "serviceProviderZip") {
      setUpdatedServiceInfo({ ...updatedServiceInfo, zipCode: value });
    }
  };

  const handleSubmit = function (id) {
    if (match.email === true && match.phone === true) {
      alert("Success!");
      API.updateClassifiedById(id)
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log("fail");
        });
      window.location.replace("/adminpetservices");
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
            <p className="modal-card-title">Edit Pet Services</p>
            <Link
              to="/adminpetservices"
              className="delete modal-close"
              aria-label="close"
            ></Link>
          </header>
          <section className="modal-card-body">
            <form onSubmit={handleSubmit} className="has-text-centered">
              <div className="user-login-with-account">
                <input
                  type="text"
                  name="serviceCategory"
                  value={currentServiceInfo.category}
                  onChange={handleChange}
                />
              </div>
              <div className="user-login-with-account">
                <input
                  autoComplete="off"
                  type="text"
                  name="serviceProviderName"
                  placeholder="Name"
                  onChange={handleChange}
                  value={currentServiceInfo.name}
                />
              </div>
              <div className="user-login-with-account">
                <input
                  autoComplete="off"
                  type="text"
                  name="serviceProviderPhone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  value={currentServiceInfo.tel}
                />
              </div>
              <div className="user-login-with-account">
                <input
                  autoComplete="off"
                  type="text"
                  name="serviceProviderEmail"
                  placeholder="Email"
                  onChange={handleChange}
                  value={currentServiceInfo.email}
                />
              </div>
              <div className="user-login-with-account">
                <input
                  autoComplete="off"
                  type="text"
                  name="serviceProviderZip"
                  placeholder="Zipcode"
                  onChange={handleChange}
                  value={currentServiceInfo.zipCode}
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

export default EditServiceModal;

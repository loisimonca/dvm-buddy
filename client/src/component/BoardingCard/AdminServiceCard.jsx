import React from "react";
import API from "../../utils/API";
import "./BoardingCard.css";

const BoardingCard = (props) => {
  //-------------------HANDLE DELETE----------------//
  const handleDelete = function (id) {
    // console.log("handle Delete id: ", id);
    if (window.confirm("Are you sure you want to delete this service?"))
      API.deleteClassified(id)
        .then((res) => {
          // console.log("success");
          window.location.replace("/AdminPetServices");
        })
        .catch((err) => {
          console.log("fail");
        });
  };
  //-----------------------HANDLE EDIT BUTTON-----------------//
  const handleEdit = function (id) {
    // console.log("handle Edit id: ", id);
    window.location.replace("/EditServiceModal/" + id);
  };
  return (
    <div>
      <div className="card-boarding">
        <div className="card-content is-centered">
          <h2 className="serviceTitle">{props.service}</h2>
          <hr className="line" />
          <h3 className="nameCard">{props.name}</h3>
          <p className="zip">Zip Code: {props.zip}</p>
          <p className="phone">Phone: {props.tel}</p>
          <p className="email">Email: {props.email}</p>
          <button
            className="edit-service-card"
            onClick={() =>
              handleEdit(
                props.id,
                props.service,
                props.name,
                props.zip,
                props.email,
                props.tel
              )
            }
          >
            Edit
          </button>
          <button
            className="delete-service-card"
            onClick={() => handleDelete(props.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardingCard;

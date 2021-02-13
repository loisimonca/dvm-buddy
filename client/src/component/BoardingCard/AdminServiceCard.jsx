import React from "react";
import "./BoardingCard.css";

const BoardingCard = (props) => {
  return (
    <div>
      <div className="card-boarding">
        <div className="card-content is-centered">
          <h2 className="serviceTitle">{props.service}</h2>
          <hr className="line" />
          <h3 className="nameCard">{props.name}</h3>
          <h4 className="zip">Zip Code: {props.zip}</h4>
          <p className="phone">Phone: {props.phone}</p>
          <button className="edit-service-card">Edit</button>
          <button className="delete-service-card">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BoardingCard;

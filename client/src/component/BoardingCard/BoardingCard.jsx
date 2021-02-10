import React from "react";
import "./BoardingCard.css";

const BoardingCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-content is-centered">
          <h2 className="serviceTitle">{props.service}</h2>
          <hr className="line" />
          <h3 className="name">{props.name}</h3>
          <h4 className="zip">Zip Code: {props.zip}</h4>
          <p className="phone">Phone: {props.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardingCard;

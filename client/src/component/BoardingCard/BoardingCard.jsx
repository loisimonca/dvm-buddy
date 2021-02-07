import React from "react";
import "./BoardingCard.css";

const BoardingCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder"
          />
        </div>
        <div className="card-content is-centered">
          <h3 className="name">{props.name}</h3>
          <h4 className="zip">{props.zip}</h4>

          <button className="button has-text-centered">
            <strong>Select Location</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardingCard;

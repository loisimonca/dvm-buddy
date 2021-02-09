import React, { Component } from "react";
import BoardingCard from "../BoardingCard/BoardingCard";
import Wrapper from "../Wrapper/Wrapper";
import boarders from "../Wrapper/Boarders.json";
import "./Boarding.css";
class Boarding extends Component {
  state = {
    boarders,
  };
  render() {
    return (
      <Wrapper>
        <div className="zipcontainer has-text-centered">
          <input
            class="input zipcode-input"
            type="number"
            placeholder="Search by Zipcode"
          />
        </div>
        {this.state.boarders.map((boarder) => (
          <BoardingCard
            name={boarder.name}
            zip={boarder.zip}
            key={boarder.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Boarding;

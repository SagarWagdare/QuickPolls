import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css"
const CreatePollCard = () => {
  return (
    <Card style={{ width: "76%", height: "200px" }} className="mx-auto shadow">
      <div className="text-center text-muted m-auto">
        <NavLink to="/CreatePoll" className="mx-auto nav_link text-dark">
          <i className="fa-solid fa-plus fa-5x"></i>
          <p className="display-5">Create a New Poll</p>
        </NavLink>
      </div>
    </Card>
  );
};

export default CreatePollCard;

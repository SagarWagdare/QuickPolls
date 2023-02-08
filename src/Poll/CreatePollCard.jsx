import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css"
const CreatePollCard = () => {
  return (
    <Card style={{ width: "500px", height: "450px" }} className="mx-auto  bg-secondary">
      <div className="text-center text-muted m-auto">
        <NavLink to="/CreatePoll" className="mx-auto nav_link text-light">
          <i class="fa-solid fa-plus fa-5x"></i>
          <p className="display-5">Create a New Poll</p>
        </NavLink>
      </div>
    </Card>
  );
};

export default CreatePollCard;

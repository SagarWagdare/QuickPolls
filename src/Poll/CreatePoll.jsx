import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import updateInputValue from "../redux/pollSlice"

const CreatePoll = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const navigate = useNavigate();
  
  const [inputValue,setInputValue] = useState(" ");
  const dispatch = useDispatch();

  const handleInputChange = (event)=>{
    setInputValue(event.target.value)
  }

  const handleClick = ()=>{
    dispatch(updateInputValue(inputValue))
  
  }

  
  return (
    <>
      <Header />
      <div className="card"
      >
        <div className="card-header">
          <h1 className="text-center">Create a new poll</h1>
        </div>
        <div className="card-body">
          <div className="form-group m-4">
            <label htmlFor="question">
              <h4>Question:</h4>
            </label>
            <input type="text" className="form-control py-3" id="question"
         
             placeholder="Enter a question"
             
             value={inputValue}
             onChange={handleInputChange}/>
          </div>
          <div className="form-group m-4">
            <label htmlFor="option1">
              <h4>Option 1:</h4>
            </label>
            <input type="text" className="form-control  py-3" id="option1" 
             
              placeholder="Enter option one"/>
          </div>
          <div className="form-group m-4">
            <label htmlFor="option2">
              <h4>Option 2:</h4>
            </label>
            <input type="text" className="form-control  py-3" id="option2" 
              
              placeholder="Enter option two"/>
          </div>

          <button
            className="btn btn-primary d-flex mx-auto m-3 p-3"
            onClick={handleClick} type="submit"
          >
            Create Poll
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePoll;

{/* <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <h4>
      {" "}
      <i className="fa-solid fa-square-poll-vertical"></i>QUICK POLLS
    </h4>
  </Modal.Header>
  <Modal.Body>
    <h4>Your Poll is Ready 😀</h4>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Cancel
    </Button>
    <NavLink to="/pollhome">
    <Button variant="primary" >Click to Redirect</Button>
    </NavLink>
  </Modal.Footer>
</Modal> */}
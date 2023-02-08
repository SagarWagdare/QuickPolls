import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import Header from "../Components/Header";

const CreatePoll = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  return (
    <>
      <Header />

      <div className="card mt-5 mx-3">
        <div className="card-header ">
          <h1 className="text-center">Create a new Poll</h1>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="question">Question:</label>
            <input
              type="text"
              className="form-control"
              id="question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="option1">Option 1:</label>
            <input
              type="text"
              className="form-control"
              id="option1"
              value={option1}
              onChange={(event) => setOption1(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="option2">Option 2:</label>
            <input
              type="text"
              className="form-control"
              id="option2"
              value={option2}
              onChange={(event) => setOption2(event.target.value)}
            />
          </div>
          <button
            className="btn btn-primary d-flex mx-auto m-3 p-3"
            onClick={handleShow}
          >
            Create Poll
          </button>
          {/* <Button variant="primary" >
        Launch demo modal
      </Button> */}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <h4>Create New Poll</h4>
            </Modal.Header>
            <Modal.Body>
              <h4>Want to Generate this Poll?</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <NavLink to="/pollhome">
                <Button variant="primary" onClick={handleClose}>
                  Save
                </Button>
              </NavLink>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default CreatePoll;

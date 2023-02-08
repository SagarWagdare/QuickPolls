import React, { useState } from "react";
import manicon from "../assets/man.png";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";
import updateInputValue from "../redux/pollSlice";
const PollHome = (props) => {
  const polls = useSelector((state) => state.polls.polls);
  const loading = useSelector((state) => state.polls.loading);
  const error = useSelector((state) => state.polls.error);
  const [inputValue, setInputValue] = useState("");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const dispatch = useDispatch();
  const storeValue = useSelector((state) => state.polls.value);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(updateInputValue(inputValue));
  };

  return (
    <>
      <Header />
      <section>
        <div className="text-center">
          <img src={manicon} alt="" style={{ width: "200px" }} />

          <h1 className="text-dark  ">
            <i className="fa-solid fa-user"></i>Welcome! {props.name}{" "}
          </h1>
        </div>
      </section>

      <section>
        <Container>


        <div className="card">
          <div className="card-header">
            <h1 className="text-center">Create a new poll</h1>
          </div>
          <div className="card-body">
            <div className="form-group m-4">
              <label htmlFor="question">
                <h4>Question:</h4>
              </label>
              <input
                type="text"
                className="form-control py-3"
                id="question"
                placeholder="Enter a question"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group m-4">
              <label htmlFor="option1">
                <h4>Option 1:</h4>
              </label>
              <input
                type="text"
                className="form-control  py-3"
                id="option1"
                placeholder="Enter option one"
              />
            </div>
            <div className="form-group m-4">
              <label htmlFor="option2">
                <h4>Option 2:</h4>
              </label>
              <input
                type="text"
                className="form-control  py-3"
                id="option2"
                placeholder="Enter option two"
              />
            </div>

            <button
              className="btn btn-primary d-flex mx-auto m-3 p-3"
              onClick={handleSubmit}
              type="submit"
            >
              Create Poll
            </button>
          </div>
        </div>
        </Container>
      </section>
     
      <section>
        {polls.map((poll, index) => (
          <Container key={index}>
            <Row>
              <Col>
                <Card className="mx-auto border-0 shadow my-5 p-3 ">
                  <Row className="text-center">
                    <Col>
                      <h3>Total Votes Count:{2}</h3>
                    </Col>
                    <Col>
                      <h3>Your Vote:{"A"}</h3>
                    </Col>
                  </Row>
                  <hr />
                  <p key={poll.id} className="display-5 text-center">
                    {poll.Question}
                  </p>

                  <Button
                    className="my-2 p-3 mx-auto btn btn-primary "
                    style={{ width: "300px" }}
                  >
                    <span>A:</span> {poll.option1}
                  </Button>
                  <Button
                    className="my-2 p-3 mx-auto btn btn-primary"
                    style={{ width: "300px" }}
                  >
                    <span>B:</span> {poll.option2}
                  </Button>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
      </section>
    </>
  );
};

export default PollHome;

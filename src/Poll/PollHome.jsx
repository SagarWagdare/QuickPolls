import React from "react";
import manicon from "../assets/man.png";
import { useSelector } from "react-redux";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import CreatePoll from "./CreatePoll";
import CreatePollCard from "./CreatePollCard";
import Header from "../Components/Header";

const PollHome = (props) => {
  const polls = useSelector((state) => state.polls.polls);
  const loading = useSelector((state) => state.polls.loading);
  const error = useSelector((state) => state.polls.error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <Header/>
      <section className="bg-black">
        <div className="text-center">
          <img src={manicon} alt="" style={{ width: "200px" }} />

          <h1 className="text-warning  "><i class="fa-solid fa-user"></i>Welcome! {props.name} </h1>
        </div>
      </section>

      <section>
        <CreatePollCard />

        {polls.map((poll) => (
          <Container>
            <Row>
              <Col>
                <Card
                  className="mx-auto border-0 shadow my-5 p-3 bg-secondary"
                  style={{ width: "500px", height: "450px" }}
                >
                  <p key={poll.id} className="display-5 text-light">
                    {poll.Question}
                  </p>

                  <Button className="my-2 p-3 btn btn-primary ">
                    {poll.option1}
                  </Button>
                  <Button className="my-2 p-3 btn btn-primary">
                    {poll.option2}
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

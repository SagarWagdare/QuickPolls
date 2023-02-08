import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./style.css"


const Home = () => {
  const polls = useSelector((state) => state.polls.polls);

  const navigate = useNavigate();
  const clicked = () => {
    navigate("/login");
  };

  return (
    <>
      {/* Navigation Page */}
      <Header />

      {/* Home Page */}

      <section>
        <Container className="mt-5">
          <Row>
            <Col>
              <Card
                className="p-4 border border-0 shadow"
                style={{ width: "600px", height: "600px" }}
              >
                <h1 className="text-center">
                  <i className="fa-solid fa-square-poll-vertical"></i>Quick
                  Polls
                </h1>
                <h3 className="text-center text-muted justify-content-center ">
                  Welcome to our poll website, where your opinion matters! We
                  are dedicated to gathering information and insights from
                  individuals like you to better understand public opinions on a
                  variety of topics. Our polls are quick, easy, and anonymous,
                  allowing you to express your thoughts and have your voice
                  heard. With a wide range of subjects to choose from, we strive
                  to keep our content relevant and up-to-date. So what are you
                  waiting for? Take a few minutes to share your thoughts and
                  make a difference today!
                </h3>
              </Card>
            </Col>
            <Col>
              <div
                className="content"
                style={{ width: "600px", height: "400px" }}
              >
                <img
                  className="rounded"
                  src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Poll Image"
                  style={{ width: "600px", height: "600px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div
          className=" bg-dark my-5 pt-4 "
          style={{ width: "100%", height: "200px" }}
        >
          <Row className="p-4 text-center text-light">
            <Col sm={4}>
              <i class="fa-solid fa-child-reaching fa-5x fa-bounce "></i>
              <h3 className="mt-4">YOUR OPINION MATTERS!</h3>
            </Col>
            <Col sm={4}>
              <i className="fa-solid fa-square-poll-vertical fa-5x fa-beat"></i>
              <h3 className="mt-4">OUR TEAM</h3>
            </Col>
            <Col sm={4}>
              <i class="fa-solid fa-spinner fa-spin-pulse fa-5x"></i>
              <h3 className="mt-4">YOU CAN CREATE A POLL</h3>
            </Col>
          </Row>
        </div>
      </section>

      <section className="bg-dark py-3">
        <h1 className="text-bg-dark text-center ">Active Polls</h1>

        {polls.map((poll, index) => (
          <Container key={index}>
            <Row>
              <Col>
                <Card
                  className="mx-auto border-0 shadow my-4 bg-light  "
                  style={{ width: "500px", height: "auto" ,}}
                >
                  <h3>
                    <i class="fa-regular fa-circle-question fa-1x"></i>
                    {poll.Question}
                  </h3>
                </Card>
              </Col>
            </Row>
          </Container>
        ))}
        <Button className=" btn btn-light d-flex mx-auto py-4 px-5" onClick={() => clicked()}>
          Add My Opinion
        </Button>
      <NavLink to="/signup">
      <h6 className="text-center text-danger p-3 fa-beat-fade"><i class="fa-solid fa-cog fa-spin"></i>You Need to Signup First, Click me  <i class="fa-solid fa-arrow-right"></i></h6>

      </NavLink>

      </section>

      
      {/* Footer  */}
      <Footer />
    </>
  );
};

export default Home;

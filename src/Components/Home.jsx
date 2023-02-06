import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <>
      {/* Navigation Page */}
      <Header />

      {/* Home Page */}

      <Container className="mt-5">
        <Row>
          <Col>
            <Card className="p-4 border border-0 shadow" style={{ width: "600px", height: "600px" }}>
              <h1 className="text-center">
                <i className="fa-solid fa-square-poll-vertical"></i>Quick Polls
              </h1>
              <h3 className="text-center text-muted justify-content-center ">
                Welcome to our poll website, where your opinion matters! We are
                dedicated to gathering information and insights from individuals
                like you to better understand public opinions on a variety of
                topics. Our polls are quick, easy, and anonymous, allowing you
                to express your thoughts and have your voice heard. With a wide
                range of subjects to choose from, we strive to keep our content
                relevant and up-to-date. So what are you waiting for? Take a few
                minutes to share your thoughts and make a difference today!
              </h3>
            </Card>
          </Col>
          <Col>
            <div
              className="content"
              style={{ width: "600px", height: "400px" }}
            >
           
              <img
                // src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Poll Image"
                style={{ width: "600px", height: "00px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer  */}
      <Footer />
    </>
  );
};

export default Home;

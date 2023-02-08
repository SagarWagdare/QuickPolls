import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { auth } from "../firebase";

const Header = () => {
  const navigate = useNavigate();

   const [user ,setUser] = useState(false);
  const signOutClick = () => {
    if(auth===true){
      setUser(true)


      navigate("/pollhome");
    }
    else{
      setUser(false)
      auth.signOut();
      navigate("/");
    }
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" className="p-3">
        <Container fluid>
          <NavLink to="/" className="nav_heading text-uppercase">
            <h2 className="text-light">
              <i className="fa-solid fa-square-poll-vertical fa-flip"></i>{" "}
              <span className="text-warning">Quick</span> Polls
            </h2>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          {user ? (
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>

              <Button
                variant="outline-light"
                className="m-2"
                onClick={() => signOutClick()}
              >
                Signout
              </Button>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <NavLink to="/login">
                <Button variant="outline-light" className="m-2">
                  Login
                </Button>
              </NavLink>
              <NavLink to="/signup">
                {" "}
                <Button
                  variant="outline-light"
                  className="m-2"
                  onClick={() => signOutClick()}
                >
                  Signup
                </Button>
              </NavLink>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

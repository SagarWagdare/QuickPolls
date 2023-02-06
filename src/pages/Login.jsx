import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Login = () => {
  return (
    <>
<Header/>
<Container>
      <Row className="pt-5">
        <Col sm={5}>
          <h2 className="text-center text-muted">Cast your vote with just a login!</h2>
          <img src="https://img.freepik.com/free-vector/internet-electronic-voting_74855-4427.jpg?size=626&ext=jpg&ga=GA1.2.1616608502.1673808878&semt=sph" alt="" 
          style={{width:"400px"}}/>
        </Col>
        <Col sm={7}>  <Form className=" border-danger text-md-start">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h3>Email Address</h3>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

          
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h3>Password</h3>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="warning" type="submit">
              Submit
            </Button>

            <h6 className='p-3'>
              Don't have an account?{" "}
              <Link to="/signup" className="text-warning">
                {" "}
                <i className="fa-solid fa-user-plus"></i>Signup here
              </Link>{" "}
            </h6>
          </Form>{" "}</Col>
      </Row>
     </Container>
    </>
  );
};

export default Login;

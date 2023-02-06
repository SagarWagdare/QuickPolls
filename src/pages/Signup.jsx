import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import SignupPollImg from "../assets/pollimg.avif";
import Header from "../Components/Header";
import { auth } from "../firebase";



const Signup = () => {
 

const navigate = useNavigate();
const [values, setValues] = useState({
  name:"",
  email: "",
  pass: "",
});

const [errorMsg, setErrorMsg] = useState(" ");

const [submitButtonDisabled,setSubmitButtonDisabled] = useState(false);

const handleSubmission = (e) => {
  e.preventDefault();
  if(!values.email||!values.pass){
      setErrorMsg(" Fill all fields")
      return;
  }
      setErrorMsg(" ")
      setSubmitButtonDisabled(true)
      createUserWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
          setSubmitButtonDisabled(false)
          const user = res.user;
          // await updateProfile(user,{
          //     displayName:values.name, 
              
          // });
          navigate("/")
        
      })
      .catch((err)=>{

          setSubmitButtonDisabled(false)
         setErrorMsg(err.message)
      })


    }
      
  
  return (
    <>
     
<Header />

<Container>
  <Row className="pt-5">
    <Col sm={4}>
      <h2 className="text-muted">
        Join the millions and make your voice heard by signing up now!
      </h2>
      <img src={SignupPollImg} alt="" />
    </Col>
    <Col sm={8}>
    <Form className=" border-danger text-md-start">
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3>Enter Name</h3>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3>Email Address</h3>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicPassword"
        onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))
        }
      >
        <h3>Password</h3>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <p>
        <b className="text-danger">{errorMsg}</b>
      </p>
      <Button className="btn" variant="warning" type="submit" onClick={handleSubmission} disabled={submitButtonDisabled}>
        Submit
      </Button>

      <h6 className="p-3 ">
        Already have an account?{" "}
        <Link to="/login" className="text-warning">
          <i className="fa-solid fa-right-to-bracket"></i>Login here
        </Link>{" "}
      </h6>
    </Form>{" "}
    </Col>
  </Row>
</Container>
    </>
  
  );
};

export default Signup;



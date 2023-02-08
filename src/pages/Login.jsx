import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Login = () => {
  

  const  navigate  = useNavigate();
const [values, setValues] = useState({
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
      signInWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
          setSubmitButtonDisabled(false)
          navigate("/pollhome")
        
      })
      .catch((err)=>{

          setSubmitButtonDisabled(false)
         setErrorMsg(err.message)
      })


    }
      
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
              <Form.Control type="email" placeholder="Enter email"
                 onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                } />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

          
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h3>Password</h3>
              <Form.Control type="password" placeholder="Password" 
                 onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <p>
        <b className="text-danger">{errorMsg}</b>
      </p>
            <Button variant="warning" type="submit" onClick={handleSubmission} disabled={submitButtonDisabled}>
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

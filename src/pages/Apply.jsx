import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router";

const Apply = () => {
  const {
    firstname,
    setfirstname,
    lastname,
    setlastname,
    email,
    setemail,
    password,
    setpassword,
  } = useContext(MyContext);

  const navigate = useNavigate();

  const applyNow = () => {
    if (firstname && lastname && email && password) {
      navigate("/home");
    } else {
      alert("all fields are required");
    }
  };

  return (
    <Container>
      <br />
      <br />
      <br />

      <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your first name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter your last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter your email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter your password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => applyNow()}>
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default Apply;

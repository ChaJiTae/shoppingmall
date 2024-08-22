import React from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login({ setAuthenticate }) {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <Col lg={6} md={6} sm={12} xs={12} className="login-container">
        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              autoComplete="current-password"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Log In
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

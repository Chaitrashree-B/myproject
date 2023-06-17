import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './LoginPage.css'; // Import the custom CSS file for LoginPage

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset the error messages
    setUsernameError('');
    setPasswordError('');

    // Perform validation
    if (!username) {
      setUsernameError('Username is required.');
      return;
    }

    if (!password) {
      setPasswordError('Password is required.');
      return;
    }

    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // After successful login
    const loggedInUsername = username; // Replace with the actual username entered during login

    // Render the LandingPage component with the username prop
    history.push('/landing', { username: loggedInUsername });
  };

  const handleForgotPassword = () => {
    // Perform forgot password logic here
    console.log('Forgot password');
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="form-control"
              />
              {usernameError && <div className="text-danger">{usernameError}</div>}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="form-control"
              />
              {passwordError && <div className="text-danger">{passwordError}</div>}
            </FormGroup>
            <Button color="primary" type="submit" block>Login</Button>
            <div className="text-center mt-3">
              <Button color="link" onClick={handleForgotPassword}>
                Forgot Password?
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

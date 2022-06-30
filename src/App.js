import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './image.jpg'
import{Navbar , Container ,Nav , Form , Button}from "react-bootstrap"
function App() {
  return (
    <div className="app">
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <br></br>
    <br></br>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Phone number:</Form.Label>
        <Form.Control type='number' placeholder='+216'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Textarea</Form.Label>
        <Form.Control as="textarea" placeholder='type something' rows={2} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <br></br>
    <img src={image} alt="picture" className='img' />
    </div>
  );
}

export default App;

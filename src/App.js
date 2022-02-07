import React, { useState } from 'react';
import logo from './logo.svg';
import { Navbar, Container, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap'
import './App.css';
import Data from "./data"

function App() {

  let [shoes, setShoes] = useState(Data)

  function ShoeList(props) {
    return (
      shoes.map((shoe, shoeIndex) =>


        <div className='list-wrap col-md-4'>
          <img className='shoe-img' src={`https://codingapple1.github.io/shop/shoes${shoeIndex + 1}.jpg`} />
          <h4>{props.shoes[shoeIndex].title}</h4>
          <p>{props.shoes[shoeIndex].content}</p>
          <p>{props.shoes[shoeIndex].price} won</p>
        </div>


      )
    )
  }


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="py-5 mb-4 bg-light rounded-3 jumbotron">
        <div className="container-fluid py-5 text-wrap">
          <h1 className="display-5 fw-bold">50% Season Off</h1>
          <p className=" fs-4 jumbotron-text p-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        </div>
        <button className="btn btn-primary btn-lg mt-4" type="button">let's shop</button>
      </div>

      <div className='container'>
        <div className='row'>
          <ShoeList shoes={shoes} />
        </div>
      </div>
    </div>
  );
}

export default App;

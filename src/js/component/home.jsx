import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
	 <Navbar bg="dark" expand="lg">
		<Container>
		  <Navbar.Brand href="#home" className="text-light">React-Bootstrap</Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
			  <Nav.Link href="#home" className="text-light">Home</Nav.Link>
			  <Nav.Link href="#link" className="text-light">Link</Nav.Link>
			  <Nav.Link href="#link" className="text-light">Dropdown</Nav.Link>
			</Nav>
		  </Navbar.Collapse>
		</Container>
	 </Navbar>	
	  <div class="p-5 mb-4 bg-light rounded-3">
      		<div class="container-fluid py-5">
        		<h1 class="display-5 fw-bold">Custom jumbotron</h1>
        		<p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
      		  <button class="btn btn-primary btn-lg" type="button">Example button</button>
      		</div>
	  </div>
	  <div className="row">
	  <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
	 <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
	 <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
	 <Card style={{ width: '21rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
	 </div>
		</div>
		
	);
};

export default Home;




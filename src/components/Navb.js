import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import logo from '../images/invet_icon.png'
import { useContext } from 'react';
import {  UserContext } from '../App';

function NavB() {
// const UserContext=UserContext;
const {state,dispatch}=useContext(UserContext);
const RenderMenu=()=>{
  if(state){
    return(
      <>
      <Navbar  expand="lg">
      <Container className="justify-content-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"   >
        <Nav className="justify-content-end" activeKey="/home">
           
            <NavLink to="/home" className='App-link'> Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/about">About</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/contact">Contact</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/fileForm">fileform</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/neccaryForm">neccessaryform</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/emailForm">email</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            
            
            <NavLink to="/logout">logout</NavLink>
            
            {/* <NavLink to="/errorPage">Error</NavLink> */}
     
            </Nav>
        </Navbar.Collapse>
      </Container>
          </Navbar>

      </>
    )
  }
  else{
    return(
      <>
      <Navbar  expand="lg">
      <Container className="justify-content-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"   >
        <Nav className="justify-content-end" activeKey="/home">
          
            
            <NavLink to="/home" className='App-link'> Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/about">About</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/contact">Contact</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/fileForm">file form</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/neccaryForm">neccessary form</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            
            <NavLink to="/emailForm">email</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            
            <NavLink to="/login">Login</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/signup">Registration</NavLink>
            
            {/* <NavLink to="/errorPage">Error</NavLink> */}
     
            </Nav>
        </Navbar.Collapse>
      </Container>
          </Navbar>

      </>
    )
  }
}

  return (
<>

{/* bg="light" */}
<Container style={{backgroundColor:'#f2f2f2', width:'100%'}}  >
<Row>
        <Col  >  
<Navbar  style={{backgroundColor:'#f2f2f2'}} expand="lg" >
      {/* <Container className="justify-content-end"> */}
        <Navbar.Brand to="/">
          <img src={logo} alt="logo"   width={70} height={30} />
          {/* React-Bootstrap */}

        </Navbar.Brand>
      {/* </Container> */}
          </Navbar>
  
        </Col>
        <Col >
        <RenderMenu></RenderMenu>
{/* <Navbar  expand="lg">
      <Container className="justify-content-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"   >
        <Nav className="justify-content-end" activeKey="/home">
          
            
            <NavLink to="/home" className='App-link'> Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/about">About</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/contact">Contact</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/login">Login</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/signup">Registration</NavLink>
            <NavLink to="/logout">logout</NavLink>
            
            <NavLink to="/errorPage">Error</NavLink>
     
            </Nav>
        </Navbar.Collapse>
      </Container>
          </Navbar> */}
  
      </Col>
      </Row>    </Container>
<div className="justify-content-end">
{/*   
<Navbar bg="light" expand="lg">
      <Container className="justify-content-end">
        <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"   >
        <Nav className="justify-content-end" activeKey="/home">
      <NavLink to="/">Home</NavLink>
            
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Registration</NavLink>
                    
            </Nav>
        </Navbar.Collapse>
      </Container>
          </Navbar>
           */}
          </div>
          {/* <AlignmentExample/> */}

</>          );
}

export default NavB;

// import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <>
      {/* <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <NavLink to="/home">Active</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink eventKey="link-1">Link</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink eventKey="link-2">Link</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink eventKey="disabled" disabled>
            Disabled
          </NavLink>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Or right-aligned</p> */}
      <Nav className="justify-content-end" activeKey="/home">
      <NavLink to="/">Home</NavLink>
            
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Registration</NavLink>
                  </Nav>
    </>
  );
}


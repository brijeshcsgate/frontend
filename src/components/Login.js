import React, { useContext, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import card_img from '../images/cerebo.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';


const Login = () => {

const {state,dispatch}=useContext(UserContext);
const navigate=useNavigate();
const loginUser=async (e)=>{
  e.preventDefault();
  const res=await fetch('/signin',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,password
    })
  });
  const data=res.json();
  if(res.status==400||!data){
    window.alert("Invalid Credentials");
  }
  else{
    dispatch({type:'USER',payload:true})
    window.alert("Login SuccessFull");
    navigate('/');
  }
}


const [email,setEmail]=useState();

const [password,setPassword]=useState();



  return (
    <div>
    <Card  className='center' >
  {/* <Card.Img variant="right" src={card_img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body> */}
  <Container>
    <Row>
      <Col sm={8}>
      <form method='POST'onSubmit={''}>
    <label>Enter your email</label><br/>
      <input 
        type="email" 
        name="email" 
        value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}
      /><br/>
      
      <label>Enter your password</label><br/>
    <input 
      type="password" 
      name="password" 
      value={password} 
      onChange={(e)=>{setPassword(e.target.value)}}
    />
    <br/>
      
      <input type="submit" onClick={loginUser} />
  </form>
      </Col>
      <Col sm={4}> <img src={card_img} alt="logo"   width='100%'  />
       </Col>
    </Row>
    
  </Container>
</Card>
  </div>

  )
}

export default Login
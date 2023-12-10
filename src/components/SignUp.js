import React, { useState } from 'react'
import {  Card, Col, Container, Row } from 'react-bootstrap'
import card_img from '../images/cerebo.png';

const style={width:'90%'};

const SignUp = () => {
const [user, setUser]=useState({name:'',email:'',phone:'',work:'',password:'',cpassword:''});


let name,value;
const handleInputs=(e)=>{
  console.log(e);
  name=e.target.name;
  value=e.target.value;
  setUser({...user,[name]:value});
}

const postData= async (e)=>{

  // it controls form reload
  e.preventDefault();
  const{name,email, phone, work, password, cpassword}=user;
  const res=await fetch("/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",

    },
    body:JSON.stringify({name,email,phone,work,password,cpassword})
    
  })
  const data=await res.json();
  
  console.log(JSON.stringify(data))
  console.log(data.status+",,,"+JSON.stringify(data))
  if(res.status===422||!data){
    window.alert("invalid registration");
    console.log('invalid registration');
  }
  else{
    
    window.alert("registration successfull");
    console.log('registration successfull');
  }
}
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
        <form onSubmit={''}>
      <br/><label>Enter your name</label><br/>
      <input   style={style}
        type="text" 
        name="name" 
        value={user.name} 
        onChange={handleInputs}
      />
      
      <br/><label>Enter your email</label><br/>
        <input   style={style}
          type="email" 
          name="email" 
          value={user.email} 
          onChange={handleInputs}
        />
        
        <br/><label>Enter your phone</label><br/>
      <input   style={style}
        type="text" 
        name="phone" 
        value={user.phone} 
        onChange={handleInputs}
      />
      
      <br/><label>Enter your work</label><br/>
        <input   style={style}
          type="text" 
          name="work" 
          value={user.work} 
          onChange={handleInputs}
        />
        
        <br/><label>Enter your password</label><br/>
      <input   style={style}
        type="password" 
        name="password" 
        value={user.password} 
        onChange={handleInputs}
      />
      
      <br/><label>Enter your cpassword</label><br/>
        <input   style={style}
          type="password" 
          name="cpassword" 
          value={user.cpassword} 
          onChange={handleInputs}
        />
        <br/>
        
        <input   style={style}type="submit" onClick={postData} />
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

export default SignUp



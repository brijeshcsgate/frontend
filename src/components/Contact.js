import Cookies from 'js-cookie';
import React, { useEffect,useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const style={border: '3px solid gray'};
const Contact = () => {

  const navigate=useNavigate();
  const myCookieValue2 = Cookies.get('jwtoken');
console.log();

const [userData,setUserData]=useState({name:'',email:'',phone:'',message:''});
  const callContactPage=async()=>{
    try{
      
    const res=await fetch('/getdata',  {
      
      credentials: 'same-origin',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `${myCookieValue2}`
      }
      
    })
    
    const data=await res.json();
    
    setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
    // console.log("data->"+data);
    if(!res.status===200){
      const error=new Error(res.error);
      throw error;
    }

  }
  catch(err){
    console.log(err);

    navigate('/login');
  }}

  useEffect(()=>{
    callContactPage();

    // checkCookie()
    // alert(myCookieValue);
    
    // alert(myCookieValue2);
  },[])

const handleInputs=(e)=>{

const name=e.target.name;
const value=e.target.value;
setUserData({...userData,[name]:value})

}
const contactform=async (e)=>{
e.preventDefault();
const {name,email,phone,message}=userData;
const res =await fetch('/contact',{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
    'Authorization': `${myCookieValue2}`
      
  },
  body:JSON.stringify({
    name,email,phone,message
  })
});
const data=await res.json();
if(!data){
  console.log('message not send');
}
else{
  alert('message send');
  setUserData({...userData,message:''});
}

}
  return (
<>
    <Container  >
    <Row className='contentCenter' >
      <Col sm={4}><Card style={style}><h6>Phone</h6>
      <p>7607807424</p></Card></Col>
      <Col sm={4}><Card style={style}><h6>Email</h6>
      <p>mauryabrijesh34@gmail.com</p></Card></Col>
      <Col sm={4}><Card style={style}><h6>Addres</h6>
      <p>lucknow, up.</p></Card></Col>
     
      </Row>
      </Container>
      <Card  className='center' >
<h6>Contact Us</h6>
      <form method='POST' onSubmit={''}>
    <label>Enter your name</label><br/>
      <input 
        type="text" 
        name="name" 
        value={ userData?.name} 
        onChange={handleInputs}
      /><br/>
      
      <label>Enter your phone</label><br/>
    <input 
      type="number" 
      name="phone" 
      value={userData?.phone} 
      onChange={handleInputs}
    />
<br/>

<label>Enter your email</label><br/>
      <input 
        type="email" 
        name="email" 
        value={ userData?.email} 
        onChange={handleInputs}
      /><br/>
      
      <label>Enter your message</label><br/>
    <input 
      type="textarea" 
      name="message" 
      value={userData.message} 
      onChange={handleInputs}
    />
    <br/>
      
      <input type="submit" onClick={contactform} />
  </form>
     </Card>
      </>
  )
}

export default Contact
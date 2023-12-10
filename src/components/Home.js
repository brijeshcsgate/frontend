import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {


  const myCookieValue2 = Cookies.get('jwtoken');
  console.log();
const [show,setShow]=useState(false);  
  const [userData,setUserData]=useState();
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
      
      setUserData(data.name);
      setShow(true)
      // console.log("data->"+data);
      if(!res.status===200){
        const error=new Error(res.error);
        throw error;
      }
  
    }
    catch(err){
      console.log(err);
  
    }}
  
    useEffect(()=>{
      callContactPage();
  
      // checkCookie()
      // alert(myCookieValue);
      
      // alert(myCookieValue2);
    },[])
  
  return (
    <Container className='App-header'>
        <p className='pt-5'>Welcome</p>
        <h3>{userData}</h3>
        <h1 >{show?'happy ,to see you back':'We are the mern Developer'}</h1>
      </Container>
  )
}

export default Home
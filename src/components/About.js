import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

// Get the value of a cookie


const About = () => {
const navigate=useNavigate();
const myCookieValue = Cookies.get('username');
const myCookieValue2 = Cookies.get('jwtoken');
console.log(myCookieValue2);

const [userData,setUserData]=useState();
  const callAboutPage=async()=>{
    try{
      
    const res=await fetch('/about',  {
      
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
    
    setUserData(data);
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
    callAboutPage();

    // checkCookie()
    // alert(myCookieValue);
    
    // alert(myCookieValue2);
  },[])
  return (
    <div style={{width:'100%',height:'100vh', backgroundColor:'green', borderRadius:'50px',textAlign:'center', margin:''}}>
      
      <table>  Basic Information
        <tr><td><b>Name:</b></td><td>{userData?.name}</td></tr>
        <tr><td><b>Email:</b></td>:<td>{userData?.email}</td></tr>
        <tr><td><b>Phone:</b></td>:<td>{userData?.phone}</td></tr>
        <tr><td><b>Work:</b></td>:<td>{userData?.work}</td></tr>
        
      </table>
      
      
    
      
      
      </div>
  )
}

export default About
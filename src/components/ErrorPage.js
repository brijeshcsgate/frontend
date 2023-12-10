import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Container className='App-header'>
        <h1 >404</h1>
        
        <p className='pt-5'>Page Not Found</p>
       <Button style={{backgroundColor:'white',border:'2px'}}> <NavLink to='/home'>Go to Home</NavLink></Button>
      </Container>
  )
}

export default ErrorPage
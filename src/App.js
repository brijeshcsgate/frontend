import React, { createContext, useReducer } from 'react'
import Navbar from './components/Navb'
import Home from './components/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact'
import SignUp from './components/SignUp'
import NavB from './components/Navb'
import Login from './components/Login'
import { Container, Nav } from 'react-bootstrap'
import ErrorPage from './components/ErrorPage'
import Logout from './components/Logout';
// import { initialState } from './reducer/UseReducer'


import {initialState, reducer} from '../src/reducer/UseReducer'
import FileForm from './components/FileForm'
import NeccaryForm from './components/NeccaryForm'
import EmailForm from './components/EmailForm'

//context api
export const UserContext=createContext();

const Routing=()=>{
  return(
<Routes> 
                 <Route exact path='/' element={<Home/>}></Route>
                 
                 <Route exact path='home' element={<Home/>}></Route>
                 <Route exact path='contact' element={<Contact/>}></Route> 
                 <Route exact path='about' element={<About/>}></Route>
                 <Route exact path='fileForm' element={<FileForm/>}></Route>
                 
                 <Route exact path='login' element={<Login/>}></Route>
                 <Route exact path='signup' element={<SignUp/>}></Route>
                 <Route exact path='logout' element={<Logout/>}></Route>
                 <Route exact path='neccaryForm' element={<NeccaryForm/>}></Route>
                 {/* EmailForm */}
                 <Route exact path='emailForm' element={<EmailForm/>}></Route>
                 
                 <Route exact path='errorPage' element={<ErrorPage/>}></Route>
         
                  </Routes>
  
  )
}

const App = () => {
const [state,dispatch]=useReducer(reducer,initialState) ; 
  return (
    <>
    <UserContext.Provider value={{state,dispatch}} >
      <NavB/>
          {/* </Router> */}
  
  <Routing/>
  </UserContext.Provider>
      </>
  )
}

export default App
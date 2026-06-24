import React, { createContext, useState } from "react";
import SelfIntroduction from "./component/SelfIntroduction";
import ParentProps from "./component/ParentProps";
import FormValidationTask from "./component/FormValidationTask";
import ConditionalListRendering from "./component/ConditionalListRendering";
import Example from "./component/Example";
// import ApiIntegration from "./component/ApiIntegration";
import APIIntegrationException from "./component/APIIntegrationException"
import UserefHookImplementation from "./component/UserefHookImplementation";
import Component1 from "./usecontexthook/Component1";
import Component2 from "./usecontexthook/Component2";
import TimerExample from "./component/TimerExample";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './Router/Home'
import About from './Router/About'
import Services from './Router/Services'
import Contact from './Router/Contact'
import Profile from './Router/Profile'
import AppDevelopment from "./Router/AppDevelopment";
import WebDevelopment from "./Router/WebDevelopment";
import UiUxDevelopment from "./Router/UiUxDevelopment";
import UserDetails from "./UseParamsHook/UserDetails";
import UserList from "./UseParamsHook/UserList";
// import Home from "./Practice/Navbars/Home";
// import About from "./Practice/Navbars/About";
// import Services from "./Practice/Navbars/Services";
// import ContactUs from "./Practice/Navbars/ContactUs";
import MiniChatApp from "./component/MiniChatApp";
import UseSearchParamHook from "./component/UseSearchParamHook";

export const Data = createContext();

export default function App() {
  // UseContext Hook Data

  // let[theme,setTheme]=useState("light")
  // let user={
  //   name:"Sanjay",
  //   email:"sanjay@gmail.com",
  //   phoneNumber:9876543210,
  //   address:"1/11,abc street,Tiruvannamalai-111111",
  //   city:"Tiruvannamalai"
  // }

  // console.log(theme);

  return (
    <div>
      {/* <SelfIntroduction/> */}
      {/* <ParentProps/> */}
      {/* <ConditionalListRendering/> */}
      {/* <FormValidationTask/> */}
      {/* <Example/> */}
      {/* <ApiIntegration/> */}
      {/* <UserefHookImplementation/> */}
      {/* <TimerExample/> */}
      {/* <div style={{padding:'0px',border:'2px solid black',width:'80%',margin:'20px auto'}}>
        <Data.Provider value={{theme,setTheme,user}}>
          <Component1/>
        </Data.Provider>
      </div> */}

      {/* <BrowserRouter>
        <div className='header'>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/profile"}>Profile</Link>
        </div>
        
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}>
            <Route path='appDev'element={<AppDevelopment/>}/>
            <Route path='webDev'element={<WebDevelopment/>}/>
            <Route path='uiuxDev'element={<UiUxDevelopment/>}/>
          </Route>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter> */}

      {/* <UserList/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='' element={<UserList/>}/>
          <Route path='/userdetails/:id/:name/:email/:phone/:address/:city/' element={<UserDetails/>}/>
        </Routes>
      </BrowserRouter> */}

      {/* PracticeWeb */}
      {/* <BrowserRouter>
        <div className="header">
          <div className="logo">Fancy-Store</div>
          <div className="prac-header">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/services"}>Services</Link>
            <Link to={"/contactus"}>Contact Us</Link>
          </div>
          <div className="user">PS</div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter> */}

      {/* <MiniChatApp/> */}

      {/* <UseSearchParamHook/> */}

        <APIIntegrationException/>
    </div>
  );
}

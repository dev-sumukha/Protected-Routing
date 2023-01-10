import React, { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './About';
import './App.css';
import SignIn from './Sigin';
import Home from './Home';
import Protected from './Protected';

function App() {
  const [isLogin,setIsLogin] = useState(false);
  // initally logged out true-->logged out

  function isAuth(){
    setIsLogin(!isLogin);
    console.log(isLogin);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route element={<Protected isLogin={isLogin}/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {isLogin?<button onClick={isAuth} >logout</button>:<button onClick={isAuth} >login</button>}
    </>
  );
}

export default App;

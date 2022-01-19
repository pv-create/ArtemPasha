import React, {FC} from 'react';
import './App.css';
import {navType} from "./Components/UI/SideBar/Types";
import Navbar from "./Components/UI/NavBar/navbar";
import Sidebar from "./Components/UI/SideBar/sidebar";
import Footer from './Components/UI/Footer/footer';



const  App:FC=()=> {
  return (

    <div>
      <Navbar/>

      <div className='container'>
        <div className="row">
          <div className="col">привет мир</div>
          <div className="col">как дела</div>
          <div className="col">что делаешь</div>
        </div>
      </div>
      <Footer/>

    </div>

  );
}

export default App;

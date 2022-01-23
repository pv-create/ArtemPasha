import React, {FC} from 'react';
import './App.css';
import {navType} from "./Components/UI/SideBar/Types";
// import NavBar from "./Components/UI/NavBar/navbar";
import Sidebar from "./Components/UI/SideBar/sidebar";
import Footer from './Components/UI/Footer/footer';
import Approuter from "./Components/approuter";
import {Layout} from "antd";
import Navbar from "./Components/UI/NavBar/navbar";
import NavBar from "./Components/UI/NavBar/navbar";

const App: FC = () => {
    return (

        <Layout>
            <NavBar/>
            <Approuter/>
            <Footer/>
        </Layout>

    );
}

export default App;

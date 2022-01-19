import React, {FC} from 'react';
import './App.css';
import {navType} from "./Components/UI/SideBar/Types";
import Navbar from "./Components/UI/NavBar/navbar";
import Sidebar from "./Components/UI/SideBar/sidebar";
import Footer from './Components/UI/Footer/footer';
import Approuter from "./Components/approuter";
import {Layout} from "antd";

const App: FC = () => {
    return (

        <Layout>
            <Navbar/>
            <Approuter/>
            <Footer/>
        </Layout>

    );
}

export default App;

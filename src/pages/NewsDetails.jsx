import React from 'react';
 import Header from "./Shered/Header"
import Navbar from './Shered/Navbar';
import RightSideNav from './Shered/RightSideNav';
const NewsDetails = () => {
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="col-span-3">

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default NewsDetails;
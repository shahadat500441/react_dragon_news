import React from 'react';
import logo from "../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src={logo} alt="" />
            <p>Journalism without Fair or Favour</p>
            <p className="text-xl ">{moment().format("dddd, MMMM D, YYYY  ")}</p>
        </div>
    );
};

export default Header;
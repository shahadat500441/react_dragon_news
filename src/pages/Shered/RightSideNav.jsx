import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZon1 from "../../assets/swimming.png"
import qZon2 from "../../assets/playground.png"
import qZon3 from "../../assets/class.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full">
                <FaGoogle />
                Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub />
              Github
                </button>

            </div>
            <div className="p-4  " >
                <h2 className="text-3xl mb-4">Find Us On</h2>
               <a className=" flex items-center text-lg p-4 border rounded-t-lg" href="">
                <FaFacebook className="mr-3" />
                <span>Facebook</span>
               </a>
               <a className=" flex items-center text-lg p-4 border-x " href="">
                <FaTwitter className="mr-2"   />
                <span>Facebook</span>
               </a>
               <a className=" flex items-center text-lg p-4 border rounded-b-lg" href="">
                <FaInstagram className="mr-2"  />
                <span>Facebook</span>
               </a>
            </div>

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-bold">Q Zon</h2>
               <img src={qZon1} alt="" />
               <img src={qZon2} alt="" />
               <img src={qZon3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;
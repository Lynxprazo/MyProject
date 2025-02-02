import React,{useState} from "react";
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import {FcViewDetails} from "react-icons/fc"
import {IoIosArrowForward} from "react-icons/io"
import { IoIosSettings } from "react-icons/io";
import "./mainComponet.css";
import { NavLink } from "react-router-dom";

const Navlink = () => {
    const[isclicked , setisclicked] = useState()
  return (
    <div>
      <div className="sidebar">
        <div className="firstsection">
          <span className="first">
            <b>
              <FaHome />
            </b>
            <p>
              <NavLink to="home">
                <b>Home</b>
              </NavLink>
            </p>
          </span>
          <span className="first">
          
            <b>
              <FaSignInAlt />
            </b>
            <p>
              <NavLink to="Authentication">
                <b>SignOut</b>
              </NavLink>
            </p>
          </span>
        </div>
        <div className="secondsection">
          <p>Meeting details</p>
          <span className="second">
              <IoIosArrowForward/>
            <b><FcViewDetails/></b>
            <p>
              <NavLink to="details">
                Meets-info
              </NavLink>
            </p>
          </span>
          <span className="second">
              <IoIosArrowForward/>
            <b><FcViewDetails/></b>
            <p>
              <NavLink to="details">
                Meets-info
              </NavLink>
              <div>
                 <ul className="dropdown">
                    <li>Meeting Record</li>
                    <li>Attendence Tracking</li>
                    <li>Note Taking</li>
                 </ul>
              </div>
            </p>
          </span>
          <span className="second">
              <IoIosArrowForward/>
            <b><FcViewDetails/></b>
            <p>
              <NavLink to="details">
                Analytic and Report
              </NavLink>
              <div>
                 <ul className="dropdown">
                    <li>Meet duration</li>
                    <li>Attendence rate</li>
                    <li>Action items status</li>
                 </ul>
              </div>
            </p>
          </span>
          <span className="second">
              <IoIosSettings/>
            <b><FcViewDetails/></b>
            <p>
              <NavLink to="details">
                Settings
              </NavLink>
            </p>
          </span>
        </div>
        <div className="thirdsection">
            <p>Meeting Community</p>
            <span className="thrid">
                <p><IoIosArrowForward/></p>
                <p><NavLink to= "Group">Group-Info</NavLink></p>
            </span>

        </div>
      </div>
    </div>
  );
};

export default Navlink;

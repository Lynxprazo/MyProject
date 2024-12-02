import React, { useState } from "react";
import Nav from "../Navigation/Nav";
import "./Home.css";
import Email from "../EmailComponent/Email";
import { IoAdd } from "react-icons/io5";
import Invited from "../Invited/Invited";

const Home = () => {
  const[isInvitedshow,setisInvitedshow] = useState(false)
  const [Clicked, setClicked] = useState();
  const [Name, setName] = useState(false);
  const [InvName, setInvName] = useState(false)
  const [showEmail, SetEmail] = useState(false);
  const handlechangeTitle = () => {
    setClicked(!Clicked);
  };
  const handleInvited = () =>{
    setisInvitedshow(!isInvitedshow);
    setInvName(!InvName)
  }

  return (
    <div>
     <div><Nav/></div> 

      <div className="homeMain-container">
        <div
          className={Clicked ? "home-container" : "home-clicked"}
          onClick={handlechangeTitle}
        >
          <div className="bouncetitle">
            {"..24LetMeet..".split("").map((char, index) => (
              <p key={index}>
                <span style={{ animationDelay: `${index * 0.1}s` }}>
                  {char}
                </span>
              </p>
            ))}
          </div>
        </div>
        <span className="Invite" onClick={handleInvited}>
          <p>{InvName ? "CloseInvited" : "ShowInvited"}<IoAdd /></p>
          <p
            className="email-button"
            onClick={() => {
              SetEmail(!showEmail);
              setName(!Name);
            }}
          >
            {Name ? "HideEmail" : "ShowEmail"}
          </p>
        </span>
        <span>

        </span>

        
        {
          showEmail && <div className={showEmail ? "AnimationEmail" :"AnimationEmailhide"}> <Email/> </div>
        }
        {
          isInvitedshow && <div className={isInvitedshow  ? "AnimationListInvited" : ""}><Invited/></div>
        }
      </div>
    </div>
  );
};

export default Home;

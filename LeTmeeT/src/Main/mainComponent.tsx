import React,{useState}from "react";
import "./mainComponet.css";
import Navlink from "./navlink";
import Videoplayercomponent from "../LiveChart/main";
// import Logo from "./logo";

interface Props {}

const MainComponent: React.FC<Props> = (props) => {

  const [VideoCam ,setVideoCam] = useState(false)

  const handleVideocam = () =>{
    setVideoCam(!VideoCam)
  }
  return (
    <div className="container">
      <div className="title">
        <span>24LetMeet...</span>
        {/* <Logo/> */}
      </div>
      <div className="maincontainer">
        <div className="one">
          <Navlink/>
        </div>
   
        <div className="two">
          <div className="two-container">
          <button onClick={handleVideocam} >VideoCam</button>
          {VideoCam && 
          <Videoplayercomponent/>
          }
          </div>
        
          </div>
        <div className="three">three</div>
      </div>
    </div>
  );
};

export default MainComponent;

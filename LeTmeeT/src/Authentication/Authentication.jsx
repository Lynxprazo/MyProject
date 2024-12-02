import React, { useState, useEffect } from "react";
import "./Authentication.css";
import background from "../assets/cool-background1.png";
import axios from "axios";

const Authentication = () => {
  const [open, setOpen] = useState(false);
  const [openIt, setOpenIt] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [track, setTrack] = useState({
    Username: "",
    Password: "",
  });
  const [message, setMessage] = useState("");
  const [loginForm , setloginForm] = useState({
    Username: "",
    Password: ""
  })
  const handlechangeLogin =(e)=>{
    const {name,value} = e.target
    setloginForm({
      ...loginForm, [name]:value
    })



  }
  const [loginSmS, setloginSmS] = useState("")
  
  const handleLogin = async(e) =>{
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:8080/login",loginForm)
      setloginSmS(response.data.message)
      setloginForm(
        {
          Username:"",
          Password:"",
          Email:""
        }
      )


    }catch (err){
       setloginSmS("Error: " + (err.response?.data?.message || "Unable to Login"));

    }
  }
  const handleSentRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/", track);
      setMessage(response.data.message);
      setTrack({
        Username: "",
        Password: "",
        Email:""
      });
    } catch (err) {
      setMessage("Error: " + (err.response?.data?.message || "Unable to register"));
    }
  };

  useEffect(() => {
    if (openIt) {
      setAnimate(true); // Start animation
      setTimeout(() => setAnimate(false), 2000); // End animation after 2 seconds
    }
  }, [openIt]);

  const handleChange = (e) => {
    setTrack({
      ...track,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpen = () => {
    setOpen(!open);
    setOpenIt(!openIt);
  };

  return (
    <div
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
      className="Auth-container"
    >
      {openIt && (
        <form onSubmit={handleSentRequest} autoComplete="off">
          <div className={`Auth-background ${animate ? "slideup-animation" : ""}`}>
            <div className="Auth-title">
              <h1 style={{ position: "absolute", color: "white" }}>Register</h1>
            </div>
            {message && <p>{message}</p>}
            <div>
              <input
                type="text"
                required
                name="Username"
                id="useridentity"
                onChange={handleChange}
                value={track.Username}
              />
              <label htmlFor="useridentity" className="Auth-usr">
                Username
              </label>
              <input
                type="email"
                required
                name="email"
                id="useremail"
                onChange={handleChange}
                value={track.Email}
              />
              <label htmlFor="useremail" className="Auth-email">
                Email
              </label>
              <input
                type="password"
                required
                name="Password"
                id="pwd"
                onChange={handleChange}
                value={track.Password}
              />
              <label htmlFor="pwd" className="Auth-pwd">
                Password
              </label>
              <button type="submit">Create Account</button>
              <p onClick={handleOpen}  className= "Goto">
                Already I have Account
              </p>
            </div>
          </div>
        </form>
      )}

      {open && (
        <form onSubmit={handleLogin} autoComplete="off">
          <div className={`Auth-background ${animate ? "slideup-animation" : ""}`}>
            <div className="Auth-title">
              <h1 style={{ position: "absolute", color: "white" }}>Login</h1>
            </div>
            {loginSmS && <p>{loginSmS}</p>}
            <div>
              <input type="text" required name="Username" id="useridenty" value={loginForm.Username} onChange={handlechangeLogin}/>
              <label htmlFor="useridenty" className="Auth-usr">
                Username
              </label>
              <input type="password" required name="Password" id="pwd" value={loginForm.Password} onChange={handlechangeLogin}/>
              <label htmlFor="pwd" className="Auth-pwd">
                Password
              </label>
              <button type="submit">Sign Up</button>
              <p onClick={handleOpen} className="Goto">
                 Create Account
              </p>
            </div>
          </div>
        </form>
      )}
    </div>
    
  );
};

export default Authentication;

import React, { useState } from "react";
import axios from "axios";
import "./Email.css";

function Email() {
  const [formData, setFormData] = useState({
    sender_email: "",
    recipient_email: "",
    subject: "",
    body: "",
  });

  const [responseMessage, setResponseMessage] = useState(""); // For displaying success/error messages

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8010/Email", {
        senderEmail: formData.sender_email,
        to: formData.recipient_email,
        subject: formData.subject,
        message: formData.body,
      });
      setResponseMessage(response.data.message);
      setFormData({
        sender_email:"",
        recipient_email:"",
        subject:"",
        body:""
        
      }) // Display success message
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "Failed to send email"
      ); // Display error message
    }
  };

  return (
    <div className="email-container">
      <div className="email-form">
        <h1>Email Sender</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="sender_email"
              placeholder="Sender Email"
              value={formData.sender_email}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div>
            <input
              type="password"
              name="sender_password"
              placeholder="Sender Password"
              value={formData.sender_password}
              onChange={handleChange}
              required
            />
          </div> */}
          <div>
            <input
              type="email"
              name="recipient_email"
              placeholder="Recipient Email"
              value={formData.recipient_email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <textarea
              name="body"
              placeholder="Email Body"
              value={formData.body}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Send Email</button>
          </div>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
    </div>
  );
}

export default Email;

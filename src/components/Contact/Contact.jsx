import React, { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {

  const [formData, setFormData] = useState({
    MessageTitle: "",
    Message: "",
    Email: "",
    GuestName: "",
    Phone: "",
  });

  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^[0-9]{10}$/; //
    return phonePattern.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (!formData.MessageTitle) {
      alert("Message Title is required");
      return;
    }

    if (!formData.Message) {
      alert("Message is required");
      return;
    }

    if (!formData.Email || !validateEmail(formData.Email)) {
      alert("Email is invalid");
      return;
    }

    if (!formData.GuestName) {
      alert("Guest Name is required");
      return;
    }
    if (!formData.Phone || !validatePhoneNumber(formData.Phone)) {
      alert("Phone number is invalid");
      return;
    }
    try {
      const response = await axios.post(
        "https://hw6nmcoahi.execute-api.us-east-1.amazonaws.com/prod/contact",
        formData
      );

      console.log(response.data);

      if (response.status === 200) {
        alert("Form submitted successfully");
      }
    } catch (error) {
      alert("Form submission failed");
    }
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2> Let's Connect!</h2>
        <form style={{ width: 600 }} onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="GuestName"
              value={formData.GuestName}
              onChange={(e) =>
                setFormData({ ...formData, GuestName: e.target.value })
              }
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={(e) =>
                setFormData({ ...formData, Email: e.target.value })
              }
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="Phone"
              value={formData.Phone}
              onChange={(e) =>
                setFormData({ ...formData, Phone: e.target.value })
              }
            />
          </div>
          <div>
            <label>Subject</label>
            <input
              type="text"
              name="MessageTitle"
              value={formData.MessageTitle}
              onChange={(e) =>
                setFormData({ ...formData, MessageTitle: e.target.value })
              }
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="Message"
              value={formData.Message}
              onChange={(e) =>
                setFormData({ ...formData, Message: e.target.value })
              }
            />
          </div>
          <button className="button" type="submit">
            Connect!
          </button>
        </form>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <ul className={styles.links}>
          <li >
            <a href="mailto:winwinn.htike@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/winwinhtike/"><img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn" /></a>
          </li>
          <li>
            <a href="https://github.com/win2htike"><img src={getImageUrl("contact/githubIcon.png")} alt="Github" /></a>
          </li>
        </ul>
      </div>

    </footer>
  );
};

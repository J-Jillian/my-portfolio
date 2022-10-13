import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Parallaxhero from "../components/Parallaxhero";
import Button from "../components/Button";
import { AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

import "../style/form.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ccogl4",
        "template_c7n1fye",
        form.current,
        "yWcvOD1Xv8qNL-2Vy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="remove-parallax">
        <Parallaxhero />
      </div>

      <div className="content">
        <div className="head">
          <h1>Get in touch</h1>
          <p>Ask me anything or just say Hi!</p>
          <div className="data-icons">
            <div>
              <small>
                <a href="tel:+34671186411">
                  <AiFillPhone /> (+34) 671 18 6411
                </a>
              </small>
              <small>
                <div>
                  <a href="mailto:judith.mediosdigitales@gmail.com">
                    <GrMail /> judith.mediosdigitales@gmail.com
                  </a>
                </div>
              </small>
            </div>
          </div>
        </div>

        <div className="form-content">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <hr />
            <label>Email</label>
            <input type="email" name="user_email" />
            <hr />
            <label>Message</label>

            <textarea name="message" />

            {/* <button className="btn-form" type="submit" value="Send">
            SEND
          </button> */}

            <Button type="submit" value="Send" />
            {/* <input type="submit" value="Send" /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

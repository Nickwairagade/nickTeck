import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container {
      margin-top: 6rem;
      text-align: center;
      
    }
    .contact-form {
      max-width: 50rem;
      margin: auto;
      // border: 3px solid #888;
      // padding: 2rem;
      // box-shadow: 1px 12px #ff0;
    }

    .btn-contact{
      margin-bottom: 2rem;
    }

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Me</h2>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mknebdwn"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input className="btn-contact" type="submit" value="send" />
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.25945061928!2d73.7939088688983!3d18.593646347861732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91b0dd95daf%3A0xa6cb6e3796a09978!2sPimple%20Saudagar%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1665136767245!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Wrapper>
  );
};

export default Contact;

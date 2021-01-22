import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Decoration from '../../assets/Decoration.svg';
import '../../scss/components/Sign/_sign.scss';

const Register = () => {

  return (
    <section className="log-in-container">
      <h1>Załóż konto</h1>
      <img className='decoration_img' src={ Decoration } alt='decoration_image' />
      <div className="form-sign-in">
        <form className="form-layout">
          <div className="inputs-with-labels">
            <div className="email-input">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                name="email"
              />
            </div>
            <div className="password-input">
              <label for="password">Hasło</label>
              <input
                id="password"
                type="password"
                name="password"
              />
            </div>
            <div className="password2-input">
              <label for="password2">Powtórz hasło</label>
              <input
                id="password2"
                type="password"
                name="repeatedPassword"
              />
            </div>
          </div>
          <div className="buttons">
            <button>
              <Link
                to="/logowanie"
                style={{ textDecoration: "none", color: "black" }}
              >
                Zaloguj się
              </Link>
            </button>
            <button type="submit">Załóż konto</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
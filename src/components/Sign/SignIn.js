import React, { useState } from "react";
import { Link } from "react-router-dom";
import Decoration from '../../assets/Decoration.svg';
import '../../scss/components/Sign/_sign.scss';

const SignIn = () => {
  return (
    <section className="log-in-container">
      <h1>Zaloguj się</h1>
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
        </div>
          <div className="buttons">
            <button>Zaloguj się</button>
            <button>
              <Link
              to="/rejestracja"
              style= {{ textDecoration: "none", color: "black" }}
              >
                Załóż konto
              </Link>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
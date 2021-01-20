import React, { useState } from "react";
import { Link } from "react-router-dom";
import Decoration from '../../assets/Decoration.svg';
import '../../scss/components/Sign/_logout.scss';

const Logout = () => {
    return (
        <section className="logout-container">
            <h1>Wylogowanie nastąpiło pomyślnie</h1>
            <img className='decoration_img' src={ Decoration } alt='decoration_image' />
            <button>
            <Link
                to="/"
                style={{ textDecoration: "none", color: "black" }}
            >
                Strona główna
            </Link>
            </button>
        </section>
    );
};

export default Logout;
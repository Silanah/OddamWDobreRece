import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/Navigation/_homeLogIn.scss';

class HomeLogIn extends Component {
    state = {};
    render() {
        return(
            <div className='logIn'>
                <ul>
                    <li>
                        <Link to='/logowanie'>Zaloguj</Link>
                    </li>
                    <li>
                        <Link to='/rejestracja'>Załóż konto</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomeLogIn;
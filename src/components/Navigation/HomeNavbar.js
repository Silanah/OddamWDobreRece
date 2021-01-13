import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../../scss/components/Navigation/_homeNavbar.scss';

class HomeNavbar extends Component {
    state = {};
    render() {
        return(
            <div className='navbar'>
                <ul>
                    <li>
                        <Link
                        activeClass='active'
                        to='homeHeader'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                            Start
                        </Link>
                    </li>
                    <li>
                        <Link
                        activeClass='active'
                        to='home4steps'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                            O co chodzi?
                        </Link>
                    </li>
                    <li>
                        <Link
                        activeClass='active'
                        to='homeAboutUs'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                            O nas
                        </Link>
                    </li>
                    <li>
                        <Link
                        activeClass='active'
                        to='homeWhoWeHelp'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                            Fundacja i organizacje
                        </Link>
                    </li>
                    <li>
                        <Link
                        activeClass='active'
                        to='homeContactForm'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomeNavbar;
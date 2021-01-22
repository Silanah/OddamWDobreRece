import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../../scss/components/Navigation/_homeNavbar.scss';

const options = {
    activeClass:'active',
    spy:true,
    smooth:true,
    offset:0,
    duration:500
}
class HomeNavbar extends Component {
    state = {};
    render() {
        return(
            <div className='navbar'>
                <ul>
                    <li>
                        <Link to='homeHeader' {...options}>
                            Start
                        </Link>
                    </li>
                    <li>
                        <Link to='home4steps' {...options}>
                            O co chodzi?
                        </Link>
                    </li>
                    <li>
                        <Link to='homeAboutUs' {...options}>
                            O nas
                        </Link>
                    </li>
                    <li>
                        <Link to='homeWhoWeHelp' {...options}>
                            Fundacja i organizacje
                        </Link>
                    </li>
                    <li>
                        <Link to='homeContactForm' {...options}>
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomeNavbar;
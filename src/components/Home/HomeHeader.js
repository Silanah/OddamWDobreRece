import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/Home/_homeHeader.scss';
import HomeLogIn from '../Navigation/HomeLogIn';
import HomeNavbar from '../Navigation/HomeNavbar';

import HomeHeroImage from '../../assets/Home-Hero-Image.jpg';
import Decoration from '../../assets/Decoration.svg';

class HomeHeader extends Component {
    state = {};
    render() {
        return(
            <div className='homeHeader' id='homeHeader'>
                <div className='nav_wrapper'>
                    <div className='topNavbar'>
                        <HomeLogIn />
                    </div>
                    <div className='bottomNavbar'>
                        <HomeNavbar />
                    </div>
                </div>
                <div className='heroContent'>
                    <div>
                        <img className='stuff_in_the_box' src={ HomeHeroImage } alt='stuff_in_the_box' />
                    </div>
                    <div className='heroTxt'>
                        <div className='heroInnerText'>
                            <h1>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <img className='decoration_img' src={ Decoration } alt='decoration_image' />
                        </div>
                        <div className='heroButtons'>
                            <Link to='/logowanie'>Oddaj rzeczy</Link>
                            <Link to='/logowanie'>Zorganizuj zbiórkę</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;
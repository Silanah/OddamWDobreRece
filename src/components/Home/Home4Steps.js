import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/Home/_home4Steps.scss';

import Decoration from '../../assets/Decoration.svg';
import Icon1 from '../../assets/Icon-1.svg';
import Icon2 from '../../assets/Icon-2.svg';
import Icon3 from '../../assets/Icon-3.svg';
import Icon4 from '../../assets/Icon-4.svg';

class Home4Steps extends Component {
    state = {};
    render() {
        return(
            <div className='home4steps' id='home4steps'>
                <div className='txt4steps'>
                    <h1>Wystarczą 4 proste kroki</h1>
                    <img className='decoration_img' src={ Decoration } alt='decoration_image' />
                </div>
                <div className='images4steps'>
                    <div className='tshirt'>
                        <img className='tshirt_icon' src={ Icon1 } alt='tshirt_icon' />
                        <p>Wybierz rzeczy</p>
                        <hr />
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className='bag'>
                        <img className='bag_icon' src={ Icon2 } alt='bag_icon' />
                        <p>Spakuj je</p>
                        <hr />
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className='loupe'>
                        <img className='loupe_icon' src={ Icon3 } alt='loupe_icon' />
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <hr />
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className='recycling'>
                        <img className='recycling_icon' src={ Icon4 } alt='recycling_icon' />
                        <p>Zamów kuriera</p>
                        <hr />
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className='giveAwayBtn'>
                    <Link to='/logowanie'>Oddaj rzeczy</Link>
                </div>
            </div>
        )
    }
}

export default Home4Steps;
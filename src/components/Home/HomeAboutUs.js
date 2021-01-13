import React, { Component } from 'react';
import '../../scss/components/Home/_homeAboutUs.scss';

import Decoration from '../../assets/Decoration.svg';
import Signature from '../../assets/Signature.svg';
import People from '../../assets/People.jpg';

class HomeAboutUs extends Component {
    state = {};
    render() {
        return(
            <div className='homeAboutUs' id='homeAboutUs'>
                <div className='aboutUsTxt'>
                    <h1>O nas</h1>
                    <img className='decoration_img' src={ Decoration } alt='decoration_image' />
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                    <div className='signature_container'>
                        <img className='signature_img' src={ Signature } alt='signature' />
                    </div>
                </div>
                <img className='people_img' src={ People } alt='people' />
            </div>
        )
    }
}

export default HomeAboutUs;
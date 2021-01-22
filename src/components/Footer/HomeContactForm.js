import React, { Component } from 'react';
import '../../scss/components/Footer/_homeContactForm.scss';

class HomeContactForm extends Component {
    state = {};
    render() {
        return(
            <div className='homeContactForm' id='homeContactForm'>
                <div className='contactForm'>
                    <h1>Skontaktuj się z nami!</h1>
                </div>
            </div>
        )
    }
}

export default HomeContactForm;
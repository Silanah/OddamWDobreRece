import React, { Component } from 'react';
import '../../scss/components/Footer/_homeContactForm.scss';

import Decoration from '../../assets/Decoration.svg';

class HomeContactForm extends Component {
    state = {};
    render() {
        return(
            <div className='homeContactForm' id='homeContactForm'>
                <div className='contactBackground' />
                <div className='wrapper'>
                <div className='contactFormWrapper'>
                    <div className='contactFormTxt'>
                        <h1>Skontaktuj się z nami!</h1>
                        <img className='decoration_img' src={ Decoration } alt='decoration_image' />
                    </div>
                    <form className='contactForm'>
                        <div className='labelsLayout'>
                            <div className='nameEmail'>
                                <div className='name_input'>
                                    <label>Wpisz swoje imię</label>
                                    <input
                                        id='name'
                                        type='text'
                                        name='name'
                                    />
                                </div>
                                <div className='email_input'>
                                    <label>Wpisz swój email</label>
                                    <input
                                        id='email'
                                        type='text'
                                        name='email'
                                    />
                                </div>
                            </div>
                                <div className='txtMessage'>
                                <label>Wpisz swoją wiadomość</label>
                                <input
                                    id='message'
                                    type='text'
                                    name='message'
                                />
                            </div>
                        </div>
                        <div className='sendButton'>
                            <button>
                                Wyślij
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default HomeContactForm;
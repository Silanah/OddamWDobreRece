import React, { Component } from 'react';
import HomeContactForm from './HomeContactForm';
import HomeFooter from './HomeFooter';

class Footer extends Component {
    state = {};
    render() {
        return(
            <>
                <HomeContactForm />
                <HomeFooter />
            </>
        );
    }
};

export default Footer;
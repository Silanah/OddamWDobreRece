import React, { Component } from "react";
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import Home4Steps from './Home4Steps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import Footer from '../Footer';

class Home extends Component {
    state = {};
    render() {
        return(
            <>
                <HomeHeader />
                <HomeThreeColumns />
                <Home4Steps />
                <HomeAboutUs />
                <HomeWhoWeHelp />
                <Footer />
            </>
        );
    }
};

export default Home;
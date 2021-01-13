import React, { Component } from 'react';
import '../../scss/components/Home/_homeThreeColumns.scss';

class HomeThreeColumns extends Component {
    state = {};
    render() {
        return(
            <div className='homeThreeColumns' id='homeThreeColumns'>
                <div className='column_item'>
                    <h1>10</h1>
                    <h3>oddanych worków</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante risus, ullamcorper in nisi id, bibendum tincidunt dui. Sed dapibus.</p>
                </div>
                <div className='column_item'>
                    <h1>5</h1>
                    <h3>wspartych organizacji</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante risus, ullamcorper in nisi id, bibendum tincidunt dui. Sed dapibus.</p>
                </div>
                <div className='column_item'>
                    <h1>7</h1>
                    <h3>zorganizowanych zbiórek</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante risus, ullamcorper in nisi id, bibendum tincidunt dui. Sed dapibus.</p>
                </div>
            </div>
        );
    }
}

export default HomeThreeColumns;
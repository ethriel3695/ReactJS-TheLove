var React = require('react');
var Link = require('react-router-dom').Link;
//var images = require('Images/images');
import * as imageGroup from './Images.js';

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1>A Glimpse at Love!</h1>
                <div className='carouselImages'>
                    <img src={imageGroup.firstpic} alt='' />
                </div>
                <div className='carouselImages'>
                    <img src={imageGroup.secondpic} alt='' />
                </div>
            </div>
        )
    }
}

module.exports = Home;
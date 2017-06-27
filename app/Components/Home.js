var React = require('react');
var Link = require('react-router-dom').Link;
//var images = require('Images/images');
import * as imageGroup from './Images.js';

//USE THIS LINK TO CREATE A CAROUSEL
//https://codepen.io/nopr/pen/rfBJx

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1>A Glimpse of Love!</h1>
                <ul>
                <li>
                    <img className='carouselImages' src={imageGroup.firstpic} alt='' />
                </li>
                <li>
                    <img className='carouselImages'  src={imageGroup.secondpic} alt='' />
                </li>
                </ul>
            </div>
        )
    }
}

module.exports = Home;
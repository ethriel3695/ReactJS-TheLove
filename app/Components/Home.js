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
                <h1 className='header'>A Glimpse of Love!</h1>
                <div className='imageContainer'>
                <div className='carouselContainer'>
                    <img className='carouselImages pic1' 
                        src={imageGroup.firstpic} alt='' />
                    <img className='carouselImages pic2'  
                        src={imageGroup.secondpic} alt='' />
                    <img className='carouselImages pic3' 
                        src={imageGroup.firstpic} alt='' />
                    <img className='carouselImages pic4' 
                        src={imageGroup.firstpic} alt='' />
                    <img className='carouselImages pic5' 
                        src={imageGroup.firstpic} alt='' />
                    <img className='carouselImages pic6' 
                        src={imageGroup.firstpic} alt='' />
                </div>
                </div>
                <div className="next">Next</div>
                <div className="prev">Prev</div>
            </div>
        )
    }
}

module.exports = Home;
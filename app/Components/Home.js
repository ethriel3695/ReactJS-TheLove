var React = require('react');
var Link = require('react-router-dom').Link;
//var images = require('Images/images');
import pics from './Images.js';

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <h1>A Glimpse at Love!</h1>
                <ul className='images'>
                <li>
                <img src={pics.pic1} alt='' />
                </li>
                </ul>
            </div>
        )
    }
}

module.exports = Home;
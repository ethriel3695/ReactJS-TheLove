var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            degreeVariation: 0
        }

        this.rotateImagesLeft = this.rotateImagesLeft.bind(this);
        this.rotateImagesRight = this.rotateImagesRight.bind(this);
        this.updateImagesPosition = this.updateImagesPosition.bind(this);
    }

    shouldComponentUpdate() {
        if (this.props.user.name !== this.state.degreeVariation) {
            return true;
        }
        else {
            return false;
        }
    }

    ComponentWillUpdate() {
        console.log('this needs to happen when user changes');
        this.updateImagesPosition(0);
        //this.rotateImagesRight();
    }

    rotateImagesLeft() {
        this.setState({
            degreeVariation: this.state.degreeVariation + 60,
        }, function () {
            this.updateImagesPosition(this.state.degreeVariation);
        }.bind(this));
    }

    rotateImagesRight() {
        this.setState({
            degreeVariation: this.state.degreeVariation - 60,
        }, function () {
            this.updateImagesPosition(this.state.degreeVariation);
        }.bind(this));
    }

    updateImagesPosition(currentPosition) {
        var carouselObject = document.getElementsByClassName("carouselContainer");
        carouselObject[0].style.transform = "rotateY(" + currentPosition + "deg)";
        carouselObject[0].style.webkitTransform = "rotateY(" + currentPosition + "deg)";
        carouselObject[0].style.mozTransform = "rotateY(" + currentPosition + "deg)";
        carouselObject[0].style.oTransform = "rotateY(" + currentPosition + "deg)";
    }

    render() {
        return (
            <div className='home-container'>
                <h1 className='header'>{this.props.user.name}</h1>
                <div className='imageContainer'>
                    <div className='carouselContainer'>
                        <img className='carouselImages pic1'
                            src={this.props.user.images[0]} alt='This is alex' />
                        <figcaption className='captionContainer pic1'>
                            Alex and Ruby
                        </figcaption>
                        <img className='carouselImages pic2'
                            src={this.props.user.images[1]} alt='' />
                        <figcaption className='captionContainer pic2'>
                            Alex is cute
                        </figcaption>
                        <img className='carouselImages pic3'
                            src={this.props.user.images[2]} alt='' />
                        <figcaption className='captionContainer pic3'>
                            Alex Test 2
                        </figcaption>
                        <img className='carouselImages pic4'
                            src={this.props.user.images[3]} alt='' />
                        <figcaption className='captionContainer pic4'>
                            Alex Test 3
                        </figcaption>
                        <img className='carouselImages pic5'
                            src={this.props.user.images[4]} alt='' />
                        <figcaption className='captionContainer pic5'>
                            Alex Test 4
                        </figcaption>
                        <img className='carouselImages pic6'
                            src={this.props.user.images[5]} alt='' />
                        <figcaption className='captionContainer pic6'>
                            Alex Test 5
                        </figcaption>
                    </div>
                    <i className="next"
                        onClick={this.rotateImagesRight}></i>
                    <i className="prev"
                        onClick={this.rotateImagesLeft}></i>
                </div>
            </div>
        )
    }
}

module.exports = Home;
var React = require('react');
var Link = require('react-router-dom').Link;
var api = require('../utilities/api.js');
var oldMousePosition = 0;

var isFront = '0';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            degreeVariation: 0
        }

        this.rotateImages = this.rotateImages.bind(this);
        this.updateImagesPosition = this.updateImagesPosition.bind(this);
        this.changeBackground = this.changeBackground.bind(this);
        this.obtainImage = this.obtainImage.bind(this);
    }

    componentDidMount () {
        var defaultImage = document.getElementsByClassName('carouselImages pic0');
        defaultImage[0].dataset.first = 1
        this.updateImagesPosition(this.state.degreeVariation);
    }

    componentWillReceiveProps() {
        this.setState({
            degreeVariation: 0
        })
    }

    componentWillUpdate(nextProps, nextState) {
        this.updateImagesPosition(0);
    }

    changeBackground (image) {
        var actualImage = image.slice(22);
        api.fetchPictaculousObject(image);
    }

    obtainImage (parentObject) {
        var currentImage = [];
        var childrenArray = [].slice.call(parentObject[0].children);
        {childrenArray.filter((child) => {
            if (child.dataset.first === '1') {
                currentImage = child.src;
                this.changeBackground (currentImage);
            }                
        })}
        //var complementaryColors = api.getPictaculousObject(element);
        //var cssClass = "pic" + index;
        // console.log(cssClass);
        //console.log(complementaryColors);
        // var currentImage = document.getElementsByClassName('carouselContainer');
        // if (currentImage[0] !== undefined) {
        //     console.log(event);
        //     if (currentImage[0].style.transform === "rotateY(0deg)") {
        //     console.log(cssClass);
        //}
        //}
        
        
        // console.log(currentImage[0]);
        // console.log(image, index);
    }

    rotateImages(e) {
        var image = e.target.src;
        var classIdentifier = e.target.className;
        var degreeModifier = 0;
        if (classIdentifier === 'moveLeft') {
            degreeModifier = 60;
        }
        else if (classIdentifier === 'moveRight') {
            degreeModifier = -60;
        }
        this.setState({
            degreeVariation: this.state.degreeVariation + degreeModifier,
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

        this.obtainImage(carouselObject);
    }

    render() {
        return (
            <div className='home-container'>
                <h1 className='header'>{this.props.user.name}</h1>
                <div className='imageContainer'>
                    <div className='carouselContainer'>
                    {this.props.user.images.map((image, index, front) => {
                        return (
                            <img className={'carouselImages pic' + index}
                                src={image} alt='This is alex'
                                data-first='0'
                                key={image + index} />
                        )
                    })}    
                    {this.props.user.imageCaption.map((caption, index) => {
                        return (
                            <figcaption className={'captionContainer pic' + index}
                            key={caption + index}>
                                {caption}
                            </figcaption>
                        )
                    })}       
                    </div>
                    <i className="moveRight"
                        onClick={this.rotateImages}></i>
                    <i className="moveLeft"
                        onClick={this.rotateImages}></i>
                </div>
            </div>
        )
    }
}

module.exports = Home;
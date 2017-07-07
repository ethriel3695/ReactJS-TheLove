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
        // var attribute = defaultImage.getAttribute('data-isFirst');
        // console.log(attribute);
        console.log(defaultImage);
        defaultImage[0].dataset.first = 1
        console.log(defaultImage[0].dataset.first);
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
        console.log(image);
        var actualImage = image.slice(22);
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;

        // Copy the image contents to the canvas
        var ctx = canvas.getContext("2d");
        console.log(ctx.drawImage(image, 0, 0));

        // Get the data-URL formatted image
        // Firefox supports PNG and JPEG. You could check img.src to guess the
        // original format, but be aware the using "image/jpg" will re-encode the image.
        var dataURL = canvas.toDataURL("image/jpeg");

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

        
        console.log(actualImage);
        api.fetchPictaculousObject(actualImage);
    }

    obtainImage (parentObject) {
        console.log(parentObject);
        var currentImage = [];
        var childrenArray = [].slice.call(parentObject[0].children);
        console.log(parentObject[0].children);
        console.log(childrenArray);
        {childrenArray.filter((child) => {
            console.log(child.dataset.first);
            if (child.dataset.first === '1') {
                console.log('this happens');
                console.log(child.src);
                currentImage = child.src;
                //this.changeBackground (currentImage);
            }                
        })}
        
        console.log(currentImage);
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
        //var degreeModifier = 0;
        // console.log(oldMousePosition);
        // console.log(e.pageX);
        // if (e.pageX + 50 > oldMousePosition ? degreeModifier = 60 : degreeModifier = -60) {   
        // }this.setState({
        //     degreeVariation: this.state.degreeVariation + degreeModifier,
        // }, function () {
        //     this.updateImagesPosition(this.state.degreeVariation);
        // }.bind(this));
        // oldMousePosition = e.pageX;
        // console.log(oldMousePosition);
        console.log(e.currentTarget.src);
        console.log('break these up');
        console.log(window.currentImage);
        var image = e.target.src;
        var classIdentifier = e.target.className;
        console.log(e.pageX);
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
        // if (currentPosition < - 360 || currentPosition > 360) {
        //     currentPosition = 0;
        // }
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
var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            degreeVariation: 0
        }

        this.rotateImages = this.rotateImages.bind(this);
        this.updateImagesPosition = this.updateImagesPosition.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            degreeVariation: 0
        })
    }

    componentWillUpdate(nextProps, nextState) {
        this.updateImagesPosition(0);
    }

    rotateImages(e) {
        var classIdentifier = e.target.className;
        var degreeModifier = 0;
        if (classIdentifier === 'moveLeft' 
            ? degreeModifier = 60 : degreeModifier = -60) {
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
    }

    render() {
        return (
            <div className='home-container'>
                <h1 className='header'>{this.props.user.name}</h1>
                <div className='imageContainer'>
                    <div className='carouselContainer'>
                    {this.props.user.images.map((image, index) => {
                        return (
                            <img className={'carouselImages pic' + index}
                                src={image} alt='This is alex'
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
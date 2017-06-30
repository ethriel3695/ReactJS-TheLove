var React = require('react');

class Description extends React.Component {

    render() {
        return (

            <div className='descriptionContainer'>
            <h1 className='descriptionHeader'>Why I love Alex</h1>
            <ul className='descriptionList'>
                <li className='descriptionItem'>
                    Alex has a contagious smile!
                </li>
                <li className='descriptionItem'>
                    Alex gives great hugs!
                </li>
                <li className='descriptionItem'>
                    Alex has so much love to give!
                </li>
            </ul>
            </div>
        )
    }
}

module.exports = Description;
var React = require('react');
//var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Navigation = require('./Navigation');
var Description = require('./Description');
var Home = require('./Home');
import * as userObject from '../utilities/userObject.js';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedPerson: '',
            user: []
        };

        this.updatePerson = this.updatePerson.bind(this);
    }

    componentDidMount() {
        this.updatePerson(this.state.selectedPerson);
    }

    updatePerson (person) {
        this.setState(function () {
            return {
                selectedPerson: person
            }
        });
    }

                    //      {userObject.userObject.user.map((name) => {
                    //      {name === this.state.selectedPerson ? this.state.user}
                    //     <Home 
                    //         user={this.state.user}
                    //     />
                    //  })}

    render () {
        return (
                <div className='container'>
                    <Navigation
                    selectedPerson={this.state.selectedPerson}
                    onSelect={this.updatePerson}
                     />
                    <Home />
                    <Description />
                </div>
        )
    }
}

module.exports = App;
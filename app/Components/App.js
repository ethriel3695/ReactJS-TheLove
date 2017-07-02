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
            selectedPerson: 'Alex',
            user: []
        };

        this.updateSelectedUser = this.updateSelectedUser.bind(this);
        this.updateUserObject = this.updateUserObject.bind(this);
        this.filterUsers = this.filterUsers.bind(this);
    }

    componentWillMount() {
        this.filterUsers(this.state.selectedPerson);
    }

    updateSelectedUser(person) {
        this.setState({
                selectedPerson: person,
            }, function () {
                this.filterUsers(this.state.selectedPerson);
            }.bind(this));
        };

    
    filterUsers(selectedUser) {
        {userObject.users.user.filter((user) => {
            if (user.name === selectedUser) {
                this.updateUserObject(user);
        }})}
    }

    updateUserObject (user) {
        this.setState(function() {
            return {
                user: user
            }
        });
    }

    render () {
        // return (
        //         <div className='container'>
        //             <Navigation
        //             selectedPerson={this.state.selectedPerson}
        //             onSelect={this.updatePerson}
        //              />
        //             <Home />
        //             <Description />
        //         </div>
        // )
        return (
                <div className='container'>
                    <Navigation
                        selectedPerson={this.state.selectedPerson}
                        onSelect={this.updateSelectedUser}
                     />
                    <Home 
                        user={this.state.user}
                    />
                     })}
                    <Description />
                </div>
        )
    }
}

module.exports = App;
var React = require('react');
//var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Navigation = require('./Navigation');
var Description = require('./Description');
var Home = require('./Home');
import userObject from '../utilities/userObject.js';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedPerson: '',
            user: []
        };

        this.updateSelectedUser = this.updateSelectedUser.bind(this);
        this.updateUserObject = this.updateUserObject.bind(this);
        this.filterUsers = this.filterUsers.bind(this);
    }

    componentDidMount() {
        this.updateSelectedUser('Alex');
    }

    updateSelectedUser(person) {
        this.setState({
                selectedPerson: person,
            }, function () {
                this.filterUsers(this.state.selectedPerson);
            }.bind(this));
        };

    filterUsers(selectedUser) {
        console.log(selectedUser);
        {userObject.users.map((user) => {
            if (user.name === selectedUser) {
                console.log(name)
                this.updateUserObject(user);
        }})}
    }

    // filterUsers () {
    //     {userObject.userObject.map((user) => {
    //         if (user.name === this.state.selectedPerson) {
    //             this.setState(function () {
    //                 return {
    //                     user: user
    //                 }
    //             })
    //             console.log(user);
    //         }
    //     })}
    // }

    updateUserObject (user) {
        console.log(user);
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
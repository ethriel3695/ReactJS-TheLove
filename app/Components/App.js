var React = require('react');
//var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Navigation = require('./Navigation');
var Home = require('./Home');
// var Battle = require('./Battle');
// var Results = require('./Results');

class App extends React.Component {
    render () {
        return (
            <Router>
                <div className='container'>
                    <Navigation />
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                <div className='descriptionContainer'>
                    lkjasdddddddddddddddddddddddf
                    asdfkjl;asdjfjlksadfj;dsjf;lsdkajfla;skdj
                </div>
                </div>
            </Router>
        )
    }
}

module.exports = App;
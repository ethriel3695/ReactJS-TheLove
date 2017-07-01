var React = require('react');

function Navigation (props) {
    var people = ['Alex', 'Ben', 'Britton', 'Eliza', 'Ethan', 'Jess', 'Karen'
        , 'Marilyn', 'Megan', 'Reuben', 'Ruby', 'Sophia'];

    return (
        <ul className='nav'>
        {people.map((person) => {
            return (
                <li className={person === props.selectedPerson ? 'active' : ''}
                    onClick={props.onSelect.bind(null, person)}
                    key={person}>
                    {person}
                </li>
            )
        })}
        </ul>
    )
}

// class People extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             selectedPerson: ''
//         };

//         this.updatePerson = this.updatePerson.bind(this);
//     }

//     componentDidMount() {
//         this.updatePerson(this.state.selectedPerson);
//     }

//     updatePerson (person) {
//         this.setState(function () {
//             return {
//                 selectedPerson: person
//             }
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Navigation
//                     selectedPerson={this.state.selectedPerson}
//                     onSelect={this.updatePerson}
//                      />
//             </div>
//         )
//     }
// }

module.exports = Navigation;
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

module.exports = Navigation;
var React = require('react');

function Navigation (props) {
    return (
        <ul className='nav'>
        {props.users.users.user.map((user) => {
            return (
                <li className={user.name === props.selectedPerson ? 'active' : ''}
                    onClick={props.onSelect.bind(null, user.name)}
                    key={user.name}>
                    {user.name}
                </li>
            )
        })}
        </ul>
    )
}

module.exports = Navigation;
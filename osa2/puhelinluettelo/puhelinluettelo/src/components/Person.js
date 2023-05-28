const Person = ({ person, removePerson }) => {
    return (
    <li>
        {person.name} {person.number} 
        <button onClick={() => removePerson(person)}>Remove</button>
    </li>
    )
}

export default Person
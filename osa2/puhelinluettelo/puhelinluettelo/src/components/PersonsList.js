import Person from './Person'

const PersonsList = ({ persons, filter}) => {

    //Pitkä pätkä spagettia. Järkevä erotella :))) 
    const filteredNames = persons.filter(persons => persons.name.toLowerCase().includes(filter.toLowerCase()))


    return(
        <ul>
        {filteredNames.map(person => 
          <Person key={person.name} person={person} />
        )}
      </ul>
    )
}

export default PersonsList
import Person from './Person'

const PersonsList = ({ persons, filter, removePerson}) => {

    //Pitkä pätkä spagettia. Järkevä erotella :))) 
    const filteredNames = persons.filter(persons => persons.name.toLowerCase().includes(filter.toLowerCase()))


    return(
        <ul>
        {filteredNames.map(person => {
          return(
            <Person key={person.id} person={person} removePerson={removePerson} />
          )
        }
        )}
      </ul>
    )
}

export default PersonsList
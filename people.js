export function getFirstNames(people) {
  //with map we are mapping (transforming) all firstName items fron our objects(people) to an array of strings
  //this  returnes something like this:
  // ['name1', 'name2', 'name3']
  //return people.map(person => person.firstName(person))
  return people.map(person => getPersonFirstName(person))
}

// find is also an iterator function ====> all functions on an array are iterator functions
function getFirstNameById(people, id) {
  return findPersonById(people, id).firstName
}

function getPersonFirstName(person) {
  return person.firstName
}

// map is an iterator function - goes through each array item and returns a value which I defined myself in the return function

function getFullName(person) {
  //firstName and lastName are object attributes
  return `${getPersonFirstName(person)} ${person.lastName}`
}

//our input argument (people) is a name of the array
export function getFullNames(people) {
  //person is a name for each item(in this case object) in the array
  //with map we are mapping (transforming) all firstName items fron our objects(people) to an array of strings
  //this  returnes something like this:
  // ['fullname1', 'fullname2', 'fullname3']
  return people.map(person => getFullName(person))
  //return people.map(person => `${getPersonFirstName(person)} ${person.lastName}`
}

export function getNameAndAge(people) {
  //this is called interpolation ==> placing a var inside a string.
  //these signs ``still mean its a string, but a type of string that allowes for js to interpolate.
  return people.map(({ lastName, age }) => `${person.lastName} (${person.age})`)
  //in this example 'Pranjic' doesn't need to be written in this form ${}
  //because it already is a string, and a string that we want to interpolate is firstName
  //we are just adding Pranjic to our existing string
  //const family = ['Iva', 'Robert', 'Sascha', 'Mateo']
  //console.log(family.map(firstName => `${firstName} Pranjic`))
  //the above returns:
  //["Iva Pranjic","Robert Pranjic","Mateo Pranjic","Sascha Pranjic"]
}

export function getAgesOfFriends(people, id) {
  return getFriendsOfPersonById(people, id).map(({ age }) => age)
}

export function getFullNamesSortedByAge(people) {
  const sortedPeople = people
    //we need to use slice(a method that generates a new array identical to the original one) here,
    //because sort changes the appearance of the original reference (array(object) in the RAM) aka sorts it how we sort it here
    //which is why other functions can´t pass their tests
    .slice()
    .sort((firstPerson, secondPerson) => firstPerson.age - secondPerson.age)

  //the array(people) needs to be sorted before we map it
  //mapping will only convert our objects to strings using only properties firstName and lastName
  //which means the objects lose the age property (bacause its not an object anymore but a string)
  //without the age property we cannot sort by age (we could sort it alphabetically tho)
  //the below is another way of writing my return(if i havent already declared getFullNames or sortedPeople)
  //return people.sort((firstPerson, secondPerson) =>
  //firstPerson.age - secondPerson.age
  //).map(person => `${person.firstName} ${person.lastName}`)

  return getFullNames(sortedPeople)
}

//the above can also be written like following line =>
//{ return firstPerson.age - secondPerson.age})

export function getPeopleByAge(people, age) {
  return people.filter(person => person.age === age)
}

function getPeopleOlderThan(people, age) {
  return people.filter(person => person.age > age)
}

export function getPeopleNamesOlderThan(people, age) {
  return getFullNames(getPeopleOlderThan(people, age))
}

export function getPeopleByLastName(people, lastName) {
  return people.filter(person => person.lastName === lastName)
}

export function findPeopleByIds(people, ids) {
  //person is input argument of my filter

  return people.filter(person => ids.includes(person.id))

  // another way to solve the function:
  // const peopleById = []

  // people.forEach(person => {
  //   let idMatching = false

  //   ids.forEach(id => {
  //     if (id === person.id) {
  //       idMatching = true
  //     }
  //   })

  //   if (idMatching) {
  //     peopleById.push(person)
  //   }
  // })
  // return peopleById

  /*return people.filter(person => {
    let idMatching = false;
    ids.forEach(id => {
        if (id === person.id) {
          idMatching = true;
        }
    })

    return idMatching;
  })*/
}

function findPersonById(people, id) {
  return people.find(person => person.id === id)
}

export function getFriendsOfPersonById(people, id) {
  return findPeopleByIds(people, findPersonById(people, id).friendIds)
}

export function isAnyoneOlderThan(people, age) {
  return people.filter(person => person.age > age).length > 0
}

/*
    [
        {
        id: number,
        firstName: string,
        lastName: string,
        age: number,
        email: string,
        friendIds: number[],
      },
    ]
*/

// this function returns mock data
// imagine it was an API fetch or loading data from a database, it would always be different in that case
export function getPeople() {
  return [
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Doe',
      age: 21,
      email: 'jane@doe.com',
      friendIds: [2, 3, 4],
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      age: 18,
      email: 'john@doe.com', // ["Jane", "John", "Max"]
      friendIds: [1, 3, 5],
    },
    {
      id: 3,
      firstName: 'Max',
      lastName: 'Mustermann',
      age: 32,
      email: 'max@mustermann.de',
      friendIds: [1, 2, 4, 5],
    },
    {
      id: 4,
      firstName: 'Erika',
      lastName: 'Musterfrau',
      age: 38,
      email: 'erika.musterfrau@gmail.com',
      friendIds: [2, 5],
    },
    {
      id: 5,
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 23,
      email: 'luke@tatooine-mail.com',
      friendIds: [1, 2],
    },
  ]
}

function testFunction() {
  const object = {
    id: 5,
    firstName: 'Luke',
    lastName: 'Skywalker',
    age: 23,
    email: 'luke@tatooine-mail.com',
    friendIds: [1, 2],
  }

  const { firstName, lastName } = object
}

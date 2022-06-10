const findTheOldest = function (peopleArray) {
    const thisYear = new Date().getFullYear();
    return peopleArray.reduce((firstPerson, person) => {
        let age = (person.yearOfDeath || thisYear) - person.yearOfBirth;        
        return age > firstPerson.age ? { person, age } : firstPerson;
    }, {person: null, age: 0 }).person;
    };
    
// Do not edit below this line
module.exports = findTheOldest;

var name = 'Jay';
var age = 29;
console.log(name);
var hasHobbeies = true;

function summerizeUser(userName, userAge, userHasHobby){
    return ('Name is' + userName + 'age is' + userAge + 'and the user has hobbies : ' +
    userHasHobby);
}

console.log(summerizeUser(name, age, hasHobbeies));
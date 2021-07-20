 /*a map will always create a new array with the result but .forEach will not 

const age = birthYear =>  2021 - birthYear;
const givenBirthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
const peopleAges =givenBirthYears.map(age)

console.log(peopleAges);*/

const birthyeararray = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

    birthyeararray.forEach(function (birthyeararray) {
        console.log(2021-birthyeararray);
    });

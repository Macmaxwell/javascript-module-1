const namesArray = ["Maxwell",
"Maria",
"Fran",
"Pearl",
"Mark",
"Anna"];

function findname(name){
    if (namesArray.includes(name)) {
    return "Found me!";}
    else {
        return "Haven't Found me :( ";
    }
}
console.log(findname("Maxwell"));

console.log(findname("Jen"));





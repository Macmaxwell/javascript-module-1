const myclass = [ "Armiptal", "Diego", "Fran", "Mahamaodu", "Bianca","Rana"];

const otherclass = ["Max","Frank","Laura"];

const classtotal = myclass.concat(otherclass)

console.log(classtotal.sort())

function result (name, array){
    if (array.includes(name)) {
        return name  + ` is at the class with `  + array;

    }
    else {
        return name + ` is not at the class with ` + array;
    }

}

console.log(result("Max",classtotal));
console.log(result("James",classtotal));
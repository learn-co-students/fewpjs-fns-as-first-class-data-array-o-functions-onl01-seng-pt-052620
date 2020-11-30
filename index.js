function wakeDog(dogName, dogBreed) {
    let value = `Wake ${dogName} the ${dogBreed}`;
    console.log(value);
    return value;
}

function leashDog(dogName, dogBreed) {
    let value = `Leash ${dogName} the ${dogBreed}`;
    console.log(value);
    return value;
}

function walkToPark(dogName, dogBreed) {
    let value = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(value);
    return value;
}

function throwFrisbee(dogName, dogBreed) {    
    let value = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(value);
    return value;
}

function walkHome(dogName, dogBreed) {    
    let value = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(value);
    return value;
}

function unleashDog(dogName, dogBreed) {    
    let value = `Unleash ${dogName} the ${dogBreed}`;
    console.log(value);
    return value;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let newArray = []
    for (let i=0; i < routine.length; i++) {
        newArray.push(routine[i](dogName, dogBreed));
    }
    return newArray;
} 
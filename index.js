const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
];


function wakeDog(dogName="Underdog", dogBreed="super power dog") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName="Underdog", dogBreed="super power dog") {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName="Underdog", dogBreed="super power dog") {  
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName="Underdog", dogBreed="super power dog") {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName="Underdog", dogBreed="super power dog") {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName="Underdog", dogBreed="super power dog") {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}

function exerciseDog(dogName, dogBreed) {
  let results = [];
  for (let i = 0; i < routine.length; i++) {
    results.push(routine[i](dogName, dogBreed));
  }
  return results
}
function wakeDog(dogName, dogBreed) {
  const statusUpdate = `Wake ${dogName} the ${dogBreed}`;
  console.log(statusUpdate);
  return statusUpdate;
}

function leashDog(dogName, dogBreed) {
  const statusUpdate = `Leash ${dogName} the ${dogBreed}`;
  console.log(statusUpdate);
  return statusUpdate;
}

function walkToPark(dogName, dogBreed) {
  const statusUpdate = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(statusUpdate);
  return statusUpdate;
}

function throwFrisbee(dogName, dogBreed) {
  const statusUpdate = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(statusUpdate);
  return statusUpdate;
}

function walkHome(dogName, dogBreed) {
  const statusUpdate = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(statusUpdate);
  return statusUpdate;
}

function unleashDog(dogName, dogBreed) {
  const statusUpdate = `Unleash ${dogName} the ${dogBreed}`;
  console.log(statusUpdate);
  return statusUpdate;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let statusUpdates = [];
  for (let i = 0; i < routine.length; i++) {
    statusUpdates.push(routine[i](dogName, dogBreed));
  }
  return statusUpdates;
}
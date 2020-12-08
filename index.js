function wakeDog(dogName, dogBreed) {
  let task = `Wake ${dogName} the ${dogBreed}`;
  console.log(task);
  return task;
}

function leashDog(dogName, dogBreed) {
  let task = `Leash ${dogName} the ${dogBreed}`;
  console.log(task);
  return task;
}

function walkToPark(dogName, dogBreed) {
  let task = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(task);
  return task;
}

function throwFrisbee(dogName, dogBreed) {
  let task = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(task);
  return task;
}

function walkHome(dogName, dogBreed) {
  let task = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(task);
  return task;
}

function unleashDog(dogName, dogBreed) {
  let task = `Unleash ${dogName} the ${dogBreed}`;
  console.log(task);
  return task;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let completedTasks = [];
  routine.forEach(function(taskFunction) {
    completedTasks.push(taskFunction(dogName, dogBreed));
  });
  return completedTasks;
}

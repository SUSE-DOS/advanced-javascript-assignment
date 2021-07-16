function function1(sing, cat) {
  return sing + sing + cat + cat + sing + sing;
}

function function2(sing, cat, funct) {
  return funct(sing, cat);
}

console.log(function2("lala", "meow", function1));

let globalVariable = "I can has global!?";

function demo() {
  let localVariable = "I can has local!?";
  return localVariable;
}

console.log(globalVariable);
// console.log(localVariable); // Throws an error accessing localVariable here because localVariable is not defined globally.
// Instead...
console.log(demo());

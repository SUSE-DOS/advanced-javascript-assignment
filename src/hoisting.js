function demo(value) {
  let variable;
  console.log(assignValue(value));

  function assignValue() {
    // Function valueAssign is hoisted over console.log command.
    variable = value * 2; // I have multiplied the value just to demonstrate that the assignValue function return is printed to console, rather than simply the demo function parameter.
    return variable;
  }
}
demo(4);

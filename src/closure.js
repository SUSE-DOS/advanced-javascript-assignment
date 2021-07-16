function outer() {
  let animal = "duck";
  let colour = "orange";
  let emotion = "happy";

  function inner() {
    let action = "kicked";
    let item = "ball";
    console.log(
      `The ${animal} ${action} the ${colour} ${item} and it was ${emotion}`
    );
  }
  return inner();
}
outer();

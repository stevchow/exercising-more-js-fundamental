const a = "hob";
third(); // error, variable d not defined !== undefined.
function first() {
  const b = "asdasd";
  second();
  function second() {
    const c = "vvvv";
    console.log(a + b + c + d);
  }
}

function third() {
  const d = "rrrrr";
  first();
}

/* first() and third() and const a get hoisted. Calling third(), inside third(), it calling first(), this could be happen because first() declared in global scope. Inside first(), const b and second() get hoisted, calling second(), hoiting const c. Executing console.log in second(). second() itself only have access to  its lexical scope which is its parents, first. So second() can access it own variable C, variable B from its parents, and variable A from global scope. Why not D? Remember! third() only calling first(), and that doesn't mean third became parents or lexical scope of first() or second(). So, first() and second() are not part of third() function and cannot access variable declared inside third() */

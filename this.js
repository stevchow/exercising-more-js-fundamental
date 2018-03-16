const John = {
  name: "Johnatan",
  outterFunc() {
    console.log(this);
    innerFunc();
    let inner2Func = () => {
      console.log(this);
    };
    function innerFunc() {
      console.log(this);
    }
    inner2Func();
  }
};

John.outterFunc();

// you can use Quokka.js extention for VSCode to see the live result. Using arrow function as method will refer 'this' to window, but using arrow function inside method, will refer 'this' to it object. Otherwise, using function statement as method for object will refer 'this' to object, but using function statement inside method will refer 'this' this to window.

//recommendation , using function statement then using arrow function inside it. If not, you can use let 'self' = this in the parent scope and using 'self' inside child function if you want to access the object container.

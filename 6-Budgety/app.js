const budgetController = (function() {
  const Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };
})();

const UIController = (function() {
  let DOMStrings = {
    inputType: ".add__type",
    inputDesc: ".add__description",
    inputVal: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    input: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDesc).value,
        value: document.querySelector(DOMStrings.inputVal).value
      };
    },

    getDOMStrings() {
      return DOMStrings;
    }
  };
})();

let controller = (function(budgetCtrl, UICtrl) {
  function setupEventListener() {
    const DOMStringsGlobal = UICtrl.getDOMStrings();

    document
      .querySelector(DOMStringsGlobal.inputBtn)
      .addEventListener("click", getInput);

    document.addEventListener("keypress", function(e) {
      if (e.keyCode === 13) {
        getInput();
      }
    });
  }

  function getInput() {
    let input = UICtrl.input();
    console.log(input);
  }

  return {
    init() {
      console.log("App started");
      setupEventListener();
    }
  };
})(budgetController, UIController);

//INIT -- START -- GO !!
controller.init();

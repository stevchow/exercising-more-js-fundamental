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

  return {
    getData(type, desc, val) {
      let ID, newItem;
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      type === "exp"
        ? (newItem = new Expense(ID, desc, val))
        : (newItem = new Income(ID, desc, val));

      data.allItems[type].push(newItem);
      return newItem;
    },
    testing() {
      console.log(data);
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
        type: document.querySelector(DOMStrings.inputType).value, //inc or exp
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
    let input, newItem;
    input = UICtrl.input();
    newItem = budgetCtrl.getData(input.type, input.description, input.value);
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

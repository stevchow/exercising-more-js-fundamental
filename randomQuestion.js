/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

//using IIFE to be able make this code modular, can be used in other peoples code without messing with existing code or variable inside it. Because IIFE has own scoping.

(function() {
  function Question(quest, option, correctAns) {
    this.quest = quest;
    this.option = option;
    this.correctAns = correctAns;
  }

  Question.prototype.randomQuest = function() {
    console.log(this.quest);
    this.option.map((opt, index) => {
      console.log(index + 1 + ". " + opt);
    });
  };

  const qOne = new Question(
    "Who is the founder of Amazon Online Store?",
    ["Jeff Bezos", "Anand Prakash", "Dmitri Putanov"],
    1
  );

  const qTwo = new Question(
    "When Jesus Christ birth?",
    ["20 Dec", "25 Dec", "29 Dec"],
    2
  );

  const qThree = new Question(
    "What is JS stand for?",
    ["JavaScroll", "JavaSkills", "JavaScript"],
    3
  );

  const questArr = [qOne, qTwo, qThree];
  const randomOrder = Math.floor(Math.random() * 3);

  function checkAns(ans, cor) {
    if (ans === cor) console.log("You got me!");
    else console.log("Try again");
  }

  questArr[randomOrder].randomQuest();

  let answer = parseInt(prompt(`answer in number please`));

  checkAns(answer, questArr[randomOrder].correctAns);
})();

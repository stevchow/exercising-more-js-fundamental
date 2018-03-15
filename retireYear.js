function yearUntilRetirement(name, thisyear, yearOfBirth,retirementAge){
  const age = thisyear - yearOfBirth;
  const ageLeft = retirementAge - age;
  return thisyear + ageLeft;
}

console.log(yearUntilRetirement('John',2018,1990,70))
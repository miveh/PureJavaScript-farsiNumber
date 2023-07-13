const prompt = require("prompt-sync")({ sigint: true });
let obj = {
  name: "",
  age: 0,
  profileBoolean: false,
  salary: 0,
};
let personArray = [];

while (true) {
  /*get person data from user system*/
  let userInput = prompt("push person info: ");
  let userInputList = userInput.split(","); //[Name, Age, no, Salary]
  userInputList[2] == "no"
    ? (userInputList[2] = false)
    : (userInputList[2] = true);

  if (userInput) {
    /*create new person object*/
    let person = { ...obj };

    /*assign values into person object just for 4 property*/
    person.name = userInputList[0];
    person.age = Number(userInputList[1]);
    person.profileBoolean = Boolean(userInputList[2]);
    person.salary = Number(userInputList[3]);

    personArray.push(person);
    // console.log(personArray);
  } else break;
} //end while

/*sort by age*/
let sortByAge = personArray.sort((p1, p2) =>
  p1.age < p2.age ? 1 : p1.age > p2.age ? -1 : 0
);
console.log(sortByAge);

/*max salary*/
console.log(
  "max salary for: " +
    personArray.sort((p1, p2) =>
      p1.salary < p2.salary ? 1 : p1.salary > p2.salary ? -1 : 0
    )[0].name
);

/*average salaries*/
let sum = 0;
personArray.forEach((person) => {
  sum += person.salary;
});
console.log("average salaries of person : " + sum / personArray.length);

/*profile checker */
let nullProfileUser = personArray.find((person) => !person.profileBoolean);
nullProfileUser
  ? console.log("there is a profile without image")
  : console.log("all profiles have image");

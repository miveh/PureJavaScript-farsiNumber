const prompt = require("prompt-sync")({ sigint: true });
const convertOneNumbers = [
  " ",
  "یک",
  "دو",
  "سه",
  "چهار",
  "پنج",
  "شش",
  "هفت",
  "هشت",
  "نه",
];
const convertTeenNumbers = [
  "",
  "ده",
  "یازده",
  "دوازده",
  "سیزده",
  "چهارده",
  "پانزده",
  "شانزده",
  "هفده",
  "هجده",
  "نوزده",
];
const convertTenNumbers = [
  "",
  "",
  "بیست",
  "سی",
  "چهل",
  "پنجاه",
  "شصت",
  "هفتاد",
  "هشتاد",
  "نود",
];

// use object inested array for hundreds ❗

const convertSpecialOfHundred = {
  2: "دویست ",
  3: "سیصد",
  5: "پانصد",
};

let userNumber = +prompt("enter a number:  ");
console.log(userNumber);

//wetbeen 1,000,000-1,000,000,000
function convert_milliard(number) {
  if (number >= 1000000000) {
    return (
      convert_milliard(Math.floor(number / 1000000000)) +
      " میلیارد " +
      convert_millions(number % 1000000000)
    );
  } else {
    return convert_millions(number);
  }
}

//wetbeen 1,000,000-1,000,000,000
function convert_millions(number) {
  if (number >= 1000000) {
    return (
      convert_millions(Math.floor(number / 1000000)) +
      " میلیون " +
      convert_thousands(number % 1000000)
    );
  } else {
    return convert_thousands(number);
  }
}

//wetbeen 1,000-1,000,000
function convert_thousands(number) {
  if (number >= 1000) {
    return (
      convert_hundreds(Math.floor(number / 1000)) +
      " هزار " +
      convert_hundreds(number % 1000)
    );
  } else {
    return convert_hundreds(number);
  }
}

//wetbeen 100-1000
function convert_hundreds(number) {
  if (number > 99) {
    let isSpecial = convertSpecialOfHundred[Math.floor(number / 100)]
      ? convertSpecialOfHundred[Math.floor(number / 100)]
      : -1;
    // console.log(isSpecial)

    if (isSpecial != -1) {
      return isSpecial + convert_tens(number % 100);
    } else {
      return (
        convertOneNumbers[Math.floor(number / 100)] +
        "صد" +
        convert_tens(number % 100)
      );
    }
    // return (
    //   (isSpecial ? isSpecial : convertOneNumbers[Math.floor(number / 100)]) +
    //   "صد" +
    //   convert_tens(number % 100)
    // );
  } else {
    return convert_tens(number); //number {0-99}
  }
}

//wetbeen 0- 100
function convert_tens(number) {
  if (number == 0) return "صفر";
  if (number < 10) return convertOneNumbers[number];
  else if (number >= 10 && number < 20) return convertTeenNumbers[number - 9];
  else {
    return (
      convertTenNumbers[Math.floor(number / 10)] +
      " " +
      convertOneNumbers[number % 10] //return " " if number %10 =0
    );
  }
}

console.log(convert_milliard(userNumber));

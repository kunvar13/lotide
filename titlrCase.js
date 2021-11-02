const titleCase = function(arr1) {
  let arr = arr1.toLowerCase();
  let num1 = " ";
  let kal = [];
  kal = arr.split(" ");
  if (arr1 !== " ") {

    for (let i = 0; i < kal.length; i++) {
      let num = " ";
      for (let j = 0; j < kal[i].length; j++) {
        if (j === 0) {
          num += kal[i][j].toUpperCase();
        } else {
          num += kal[i][j];
        }
      }
      num1 += num;
    }
  } else {
    return num1;
  }

  return num1.trim();
};
module.exports = titleCase;
console.log(titleCase("i r cool"));
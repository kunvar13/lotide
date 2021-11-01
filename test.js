const findSpace = function(name1) {
  let spaceObj = {num: 0, num1: 0, val: false};
  let kal = 1;
  for (let i = 0; i < name1.length; i++) {
    if (name1[i] === " " && kal === 1) {
      spaceObj.num = i;
      spaceObj.val = true;
      kal--;

    } if (name1[i] === " " && i > spaceObj.num) {
      spaceObj.num1 = i;
    } else {
      false;
    }
  }
  //console.log(spaceObj);
  return spaceObj;
};

console.log(findSpace("D r 3"));
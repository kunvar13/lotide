const mode = function(arr) {
  let num = 0;
  let modObj = {};
  let kal = '';
  //const arr1 = arr.sort();
  const arr1 = arr;
  //console.log(arr1);
  //let kal1 = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    //if (arr1[i] === arr1[i + 1]) {
    if (!modObj[arr1[i]]) {
      modObj[arr1[i]] = 1;
    } else {
      modObj[arr1[i]] += 1;
    }
  }
    
  
  console.log(modObj);
  //num = modObj[0];
  //console.log(num);
  for (let i in modObj) {
    if (modObj[i] >  num) {
      num = modObj[i];
      kal = i;
    }
  }
  return Number(kal);
};

console.log(mode([1,5,2,6,3,5]));
/* IMPLEMENT ME */

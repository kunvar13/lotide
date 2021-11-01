
const tail = function (words) {
  let kal = [];
  for (let i = 0; i < words.length - 1; i++) {
    kal.push(words[i + 1]);
  }
  console.log(kal);
  console.log(words);
};

module.exports = tail;
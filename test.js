const raisinAlarm = function(cookie) {
  let num = 0;
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      num++;
    }
  }
  if (num > 0) {
    console.log("Raisin Alert");
  } else {
    console.log("All good!");
  }
};
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
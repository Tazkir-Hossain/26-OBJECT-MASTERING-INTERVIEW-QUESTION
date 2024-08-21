function dosomething() {
  console.log(3333);
}
console.log(2222);
//setTimeout(dosomething, 4000);
setTimeout(function () {
  console.log("lazy and waiting");
}, 4000);

setInterval(function () {
  console.log("doing it");
}, 1000);
console.log(4444);

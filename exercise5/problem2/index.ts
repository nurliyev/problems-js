function printNumberInInterval(num: number) {
  let i = 1;
  const intervalId = setInterval(() => {
    if (i > num) {
      clearInterval(intervalId);
      return;
    }
    console.log(i);
    i++;
  }, 1000);
}
printNumberInInterval(10);
export default printNumberInInterval;

// const counter = setInterval(() => {
//   if (num === 0) {
//     clearInterval(counter);
//   }
//   console.log(num--);
// }, 1000);

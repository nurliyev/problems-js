function printNumberInInterval(num: number) {
  const counter = setInterval(() => {
    if (num === 0) {
      clearInterval(counter);
    }
    console.log(num--);
  }, 1000);
}
printNumberInInterval(10);
export default printNumberInInterval;

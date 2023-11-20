function printNumberInInterval(num: number) {
  let i = 1;
  const intervalId = setInterval(callback: () => {
    if (i >= num; ) {
      clearInterval(intervalId);
      return;
    } 
    console.log(i);
    i++;
  }, 1000 )
  // const counter = setInterval(() => {
  //   if (num === 0) {
  //     clearInterval(counter);
  //   }
  //   console.log(num--);
  // }, 1000);
}
printNumberInInterval(10);
export default printNumberInInterval;

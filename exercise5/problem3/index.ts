function printAsyncNumbers(n: number) {
  printNumbersRec(n, 1);
  // let second = 1;
  // for (let i = 1; i <= n; i++) {
  //   setTimeout(() => {
  //     console.log(`after ${i} sec - ${i}`);
  //   }, second * 1000);
  //   second++;
  // }
}

function printNumbersRec(n: number, i: number) {
  setTimeout(() => {
    if (i > n) {
      return;
    }
    console.log(i);
    printNumbersRec(n, i + 1);
  }, i * 1000);
}

export default printAsyncNumbers;

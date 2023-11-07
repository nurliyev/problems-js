function printAsyncNumbers(n: number) {
  let second = 1;

  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(`after ${i} sec - ${i}`);
    }, second * 1000);
    second++;
  }
}

export default printAsyncNumbers;

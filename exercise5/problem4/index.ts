class Timer {
  first: Date = new Data();

  start() {
    this.first = new Date();
  }

  pause();
  reset();
  log() {
    const now = new Date();
    const diff = this.first?.getTime() - now.getTime();
    const formated = formatTime(diff);
    console.log(formated);
  }
}

function formatTime(totalMs: number) {
  const h = Math.floor(totalMs / (60 * 60 * 1000));
  const remainingM = totalMs % (60 * 60 * 1000);
  const m = Math.floor(remainingM / (60 * 1000));
  const remainingS = remainingM % (60 * 1000);
  const s = Math.floor(remainingM / 1000);
  const ms = remainingS % 1000;

  return { h, m, s, ms };
}

console.log(formatTime(3 * 60 * 60 * 1000 + 20 * 60 * 1000 + 13 * 1000 + 150));

export default Timer;

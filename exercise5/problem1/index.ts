function callbackExec(callback: () => void): void {
  setTimeout(callback, 2000); // 2000 milliseconds (2 seconds)
}

function displayHello() {
  console.log("Hello");
}

callbackExec(displayHello); // Calls `displayHello` after 2 seconds

export default callbackExec;

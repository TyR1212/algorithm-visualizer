//makes the interface pause for an amount of time
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

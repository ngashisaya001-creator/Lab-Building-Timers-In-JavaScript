/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */
function countdownTimer(startTime, interval) {
  // "startTime" is the number we count down from (e.g. 5)
  // "interval"  is the gap in ms between each tick (e.g. 1000 = 1 second)
 
  // Copy startTime into remainingTime so we can safely decrement it.
  let remainingTime = startTime;
 
  // setInterval fires the callback repeatedly every "interval" ms.
  // We save timerId so we can cancel the timer with clearInterval.
  const timerId = setInterval(function () {
 
    // Log FIRST — before any check or decrement.
    // e.g. startTime=5 → logs: 5, 4, 3, 2, 1  (exactly 5 times)
    console.log(remainingTime);
 
    // Decrement AFTER logging.
    remainingTime--;
 
    // Stop the timer AFTER decrementing.
    // When remainingTime hits 0 we just logged 1, so we stop here.
    // The test expects console.log called exactly startTime times.
    if (remainingTime === 0) {
      clearInterval(timerId);
    }
 
  }, interval); // fires every "interval" milliseconds
 
  // Return the timerId so the test can validate the timer was created.
  return timerId;
}
 
// Export so the test file can import and use this function.
module.exports = { countdownTimer };
 

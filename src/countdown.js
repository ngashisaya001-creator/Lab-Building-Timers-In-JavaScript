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
  // Initialize the remaining time
  // Set up a timer using setInterval
  // Log the remaining time and decrement it
  // Stop the timer when time reaches 0
  // Return the timer ID for validation
}


function countdownTimer(duration) {
  let timeLeft = duration;



  const timeerId = setInterval(() => {
    console.log(`time remaining: ${timeLeft}`);
    


    if (timeLeft < 0) {
      clearInterval(timeerId);
    } else {
      timeLeft--;
    }
  }, 1000);
  return timeerId;
}
module.exports = { countdownTimer };

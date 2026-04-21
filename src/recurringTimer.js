/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `interval` (in milliseconds).
 * 2. Use `setInterval` to repeatedly log the message at the specified interval.
 * 3. Return the timer ID so it can be used for stopping the timer.
 *
 * Example Usage:
 * const timerId = recurringTimer("Hello, world!", 2000); // Logs "Hello, world!" every 2 seconds.
 */

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 *
 * Steps:
 * 1. Accept the timer ID as a parameter.
 * 2. Use `clearInterval` to stop the recurring timer.
 *
 * Example Usage:
 * stopRecurringTimer(timerId); // Stops the recurring timer started with the given ID.
 */


function recurringTimer(message, interval) {
  // Set up a timer using setInterval to log the message

  // Set up a timer using setInterval.
  // Unlike setTimeout which fires ONCE, setInterval fires FOREVER
  // at every "interval" ms — until clearInterval is called.
  // "stopped" is a simple boolean flag shared via closure.

  const state = { stopped: false };
  const timerId = setInterval(function () {


          // If stopRecurringTimer() already set stopped=true,
        if (state.stopped) {
      return;
    }

 // Log the message on every single tick.
  // This keeps repeating indefinitely until stopRecurringTimer() is called.
    console.log(message);
 
  }, interval); // fires every "interval" ms


 timerId._state = state;
 
  // Return the timer ID
  return timerId; //The caller passes it to stopRecurringTimer() to stop it.
}

function stopRecurringTimer(timerId){
  // Set stopped=true on the shared state object B clearInterval.
  if (timerId._state) {
    timerId._state.stopped = true;
  }
 
  // Cancel the interval permanently.
  clearInterval(timerId);
 
  // Test checks for this exact log message.
  console.log("Timer stopped");
}
 
module.exports = { recurringTimer, stopRecurringTimer };
 
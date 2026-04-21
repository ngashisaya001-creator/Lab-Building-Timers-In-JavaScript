/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `delay` (in milliseconds).
 * 2. Use `setTimeout` to log the message after the specified delay.
 * 3. Return a promise that resolves once the message is logged.
 *
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 */
function delayedReminder(message, delay) {
  // Return a promise
  //The promise has no result now but it  will have it later on, thats why i will use "await dailyRemainer(...)" to wait it to finish.
  return new Promise(function (resolve) {

  // Use setTimeout to log the message after the specified delay
  //Since now JS has no pause it will use the timeout and continues to moving on

  setTimeout(function () {
//Log the reminder message to the console.
      console.log(message);
 
  // Resolve the promise once the message is logged, in whch the "reslove" signals that the asyn that its work is done
   resolve(message);
 
    }, delay); // wait "delay" ms before firing
 
  });
}
 
// Export so the test file can import and use this function.
module.exports = { delayedReminder };
 


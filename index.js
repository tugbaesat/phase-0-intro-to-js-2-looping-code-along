// Code your solutions in this file

function writeCards(messageArray, event) {
  const thankYouMessage = [];
  for (let i = 0; i < messageArray.length; i++) {
    thankYouMessage.push(
      `Thank you, ${messageArray[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankYouMessage;
}
function countDown(input) {
    let i = input;
    while (0 <= i) {
        console.log(i--);
    }
}
// Code your solutions in this file
//for (let age = 30; age <40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
//}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }
  return gifts;
}
wrapGifts(gifts);

const guests = ["Charlie", "Samip", "Ali"];

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      debugger;
    }
    return messages;
}
const notes = writeCards(guests, "birthday");
console.log(notes);

function countDown(counter){
    while (counter > -1){
        console.log(counter--);
    }
}
countDown(9);
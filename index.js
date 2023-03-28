// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);


const names = ["Guadalupe", "Ollie" , "Aki"];
const eventName = "surprize"

function writeCards(names, eventName) {
    const messages = [];
    for (let e = 0; e < names.length; e++) {
        messages.push(`Thank you, ${names[e]}, for the wonderful ${eventName} gift!`);
    }
        return messages;
}

  console.log(writeCards(names, eventName));


  function countDown(integer) {
    let m = 10;
    while (m >= 0) {
      console.log(m--);
    }
    return integer;
  }
  countDown(10);

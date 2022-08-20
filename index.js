for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "dolls"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
function writeCards(names, event) {
    var messages = [];

    for (let i = 0; i < names.length; i++) {
        var m = "Thank you, " + names[i] + ", for the wonderful " + event + " gift!";
        messages.push(m);
        debugger;
    }

    return messages;
};

debugger;

const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";
console.log(writeCards(names, event));
function countDown(integer) {
    var i = integer;
    while (i >= 0) {
        console.log(i)
        i--
    };
};

countDown(10);
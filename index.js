
function writeCards(array, event) {
    const thankYouCards = [];
    for (let i = 0; i < array.length; i++) {
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer --;
    }
}
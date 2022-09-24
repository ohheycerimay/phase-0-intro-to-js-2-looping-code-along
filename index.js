// Code your solutions in this file

function writeCards(names, event) {
    const array = [];
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return array;
}

function countDown() {
    let count = 0;
    while (count < 11) {
        console.log(count++);
    }
   return count; 
}
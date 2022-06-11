// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
//   debugger;
// }
// const gifts = [ "teddy bear", "drone", "doll" ];
// function wrapGifts ( gifts )
// {
//     for ( i = 0; i < gifts.length; i++ )
//     {
//         console.log( `Wrapped ${ gifts[ i ] } and added a bow!` );
//         // debugger;
//     }
//     return gifts
// }
// wrapGifts( gifts );


// output an array of messages
const nameForPeople = ["Guadalupe", "Ollie", "Aki"]
function writeCards ( arrayPeople, event )
{   let newArray = [];
    for (let  i = 0; i < arrayPeople.length; i++ )
    {
        newArray.push(`Thank you, ${arrayPeople[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}
writeCards(nameForPeople,surprise);

// code along for while
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

wrapGifts( gifts );


// count from 10 to 0
function countDown ( number )
{
    while ( number >= 0 )
    {
        console.log( number );
        number -=1
    }
}
console.log(4)
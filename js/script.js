// // const cards = [
// //   {
// //     cardNumber: "7437 4553 9630 3531",
// //     name: "George Washington",
// //     expired: "12/22"
// //   },
// //   { cardNumber: "6382 5282 6825 8519", name: "John Adams", expired: "08/23" },
// //   {
// //     cardNumber: "5418 5162 9272 9262",
// //     name: "Thomas Jefferson",
// //     expired: "02/23"
// //   },
// //   {
// //     cardNumber: "8652 7262 6283 9723",
// //     name: "James Madison",
// //     expired: "11/20"
// //   },
// //   { cardNumber: "8265 6280 7528 0987", name: "James Monroe", expired: "09/21" }
// // ];

// // // // Образец определения и вызова функций

// // // function checkCardExpiredYear(card) {
// // //   return Number(card.expired.slice(-2)) > 21;
// // // }

// // // function checkCardType(card) {
// // //   let digit = Number(card.cardNumber[0]);
// // //   if (digit == 4) {
// // //     return true;
// // //   } else if (digit == 5) {
// // //     return false;
// // //   } else {
// // //     return false;
// // //   }
// // // }

// // // console.log(cards.filter(checkCardExpiredYear));
// // // console.log("-------------------------------");
// // // console.log(cards.filter(checkCardType));
// // // console.log("-------------------------------");

// // const clients = [
// //   { name: "John", gender: "m", birthYear: 1974 },
// //   { name: "Bill", gender: "m", birthYear: 1985 },
// //   { name: "Clara", gender: "w", birthYear: 1994 },
// //   { name: "Ian", gender: "m", birthYear: 1940 }
// // ];

// // function map(array, callbackFunction) {
// //   let result = [];
// //   for (let i = 0; i < array.length; i++) {
// //     result.push(callbackFunction(array[i]));
// //   }
// //   return result;
// // }
// // function getNameOfClient(client) {
// //   return client.name;
// // }
// // function getBirthYear(client) {
// //   return client.birthYear;
// // }

// // console.log(map(clients, getNameOfClient)); // ['John', 'Bill', 'Clara', 'Ian']

// // console.log(map(clients, getBirthYear)); //[1974, 1985, 1994, 1940]

// // let filtered = clients.filter(function(client) {
// //   return client.birthYear > 1900;
// // });

// // console.log(filtered);

// // const cards = [
// //   {
// //     cardNumber: "7437 4553 9630 3531",
// //     name: "George Washington",
// //     expired: "12/22"
// //   },
// //   { cardNumber: "6382 5282 6825 8519", name: "John Adams", expired: "08/23" },
// //   {
// //     cardNumber: "5418 5162 9272 9262",
// //     name: "Thomas Jefferson",
// //     expired: "02/23"
// //   },
// //   {
// //     cardNumber: "8652 7262 6283 9723",
// //     name: "James Madison",
// //     expired: "11/20"
// //   },
// //   { cardNumber: "8265 6280 7528 0987", name: "James Monroe", expired: "09/21" }
// // ];

// // // Образец определения и вызова функций
// // function filterCreditCards(creditCards, callbackFunction) {
// //   let result = [];
// //   for (let i = 0; i < creditCards.length; i++) {
// //     if (callbackFunction(creditCards[i]) == true) {
// //       result.push(creditCards[i]);
// //     }
// //   }
// //   return result;
// // }

// // function checkCardExpiredYear(card) {
// //   if (Number(card.expired.slice(-2)) > 21) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // function checkCardType(card) {
// //   let digit = Number(card.cardNumber.slice(0, 1));
// //   console.log(digit);
// //   if (digit == 4) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // console.log(filterCreditCards(cards, checkCardExpiredYear));
// // console.log("-------------------------------");
// // console.log(filterCreditCards(cards, checkCardType));
// // console.log("-------------------------------");

// // class Client {
// //   constructor(id, name) {
// //     this.id = id;
// //     this.name = name;
// //   }
// // }

// // const queue = [];
// // let id = 0;

// // function addClientToQueue(queue, clientData) {
// //   id = id + 1;
// //   const client = new Client(id, clientData);
// //   queue.push(client);
// // }

// // function deleteClientInQueue(queue, clientID) {
// //   for (let i = 0; i < queue.length; i++) {
// //     if (queue[i].id == clientID) {
// //       queue.splice(i, 1);
// //     }
// //   }
// // }

// // addClientToQueue(queue, "Orxan");
// // console.log(queue.length);
// // console.log(queue);
// // addClientToQueue(queue, "John");
// // console.log(queue.length);
// // console.log(queue);
// // addClientToQueue(queue, "Smith");
// // console.log(queue.length);
// // console.log(queue);
// // deleteClientInQueue(queue, 1);
// // console.log(queue.length);
// // console.log(queue);
// // addClientToQueue(queue, "Elly");
// // console.log(queue.length);
// // console.log(queue);

// // let head = document.getElementById("head");

// // function colorchange() {
// //   head.className = "color";
// // }

// // head.addEventListener("mousemove", colorchange);

// const clients = [
//   { name: "John", gender: "m", birthYear: 1974 },
//   { name: "Bill", gender: "m", birthYear: 1985 },
//   { name: "Clara", gender: "w", birthYear: 1994 },
//   { name: "Ian", gender: "m", birthYear: 1940 }
// ];

// function map(array, callbackFunction) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(callbackFunction(array[i]));
//   }
//   return result;
// }
// function getNameOfClient(client) {
//   return client.name;
// }
// function getBirthYear(client) {
//   return client.birthYear;
// }

// let mapped = clients.map(function(client) {
//   return client.birthYear;
// });

// let mappedTwo = clients.map(function(client) {
//   return client.name + " " + (client.birthYear + 5);
// });
// console.log(mappedTwo);

// const cardBalances = [100, 200, 300, 400];
// let filtered = cardBalances.map(function(client) {
//   return client * 2;
// });

// console.log(filtered);

//cut reqemler hansilardi
//cut reqemlerin cemini tap
let numbers = [1, 5, 6, 7, 8, 10];

let filtered = numbers.filter(function(even) {
  return even % 2 == 0;
});
console.log(filtered);

let mapped = numbers.map(function(even) {
  return even % 2 == 0;
});

console.log(mapped);

const arr = [1, 2, 3, 4, 5];

const result = numbers.reduce(function(prev, current) {
  return prev + current;
}, 0);

console.log(result);

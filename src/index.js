// console.log("Redux Starter Project!!");
// import { produce } from "immer";
// import {compose} from 'lodash/fp';

const { default: store } = require("./store/configureStore");
const { addTask, updateComplete, removeTask } = require("./store/task1");

store.subscribe(() => {
    console.log('Updated', store.getState())
})

store.dispatch(addTask('Task1'));//this is to dispatch action
store.dispatch(addTask('Task2'));//this is to dispatch action
store.dispatch(updateComplete(2))
store.dispatch(removeTask(1))

// const book = {
//     author: 'Robert kiosaki',
//     details: {
//         name: 'Rich Dad Poor Dad',
//         price: '10$',
//         ratings: 4.5
//     }
// }

// const nbook = {
//     author: 'Robert kiosaki',
//     details: {
//         name: 'One indian girl',
//         price: '10$',
//         ratings: 4.7
//     }
// }

// // const newBook = {...book, details: {...book.details, name: 'One night Stand'}};

// const newBook = Object.assign({}, book, nbook)

// console.log(book);
// console.log(newBook);

// const nbook = book;

//using immer
// const newObj = produce(book, (draftState) => {
//     draftState.details.name = 'One Indian Girl',
//     draftState.details.price = '5$',
//     draftState.details.ratings = 3.5
// })

// console.log(newObj)

//Immutability in Array;

// const books = ['Book1', 'Book2', 'Book3'];

// const newBooks = books.map(book => book === 'Book2' ? 'Book4' : book);
// console.log(books);
// console.log(newBooks);

//

// const book = {
//     author: 'Robert kiosaki',
//     details: {
//         name: 'Rich Dad Poor Dad',
//         price: '10$',
//         ratings: 4.5,
//         genre: ['Horor', 'Fiction', 'Comedy'],
//         availability: {
//             Amazon: true,
//             Flipkart: false,
//             Kindle: true
//         }
//     }
// }

// let newBook = {...book, details: {...book.details,genre: book.details.genre.map(g => g === 'Fiction'? 'Sci-Fiction': g), availability: {...book.details.availability, Flipkart: true, Amazon: false}}};
// console.log(book);
// console.log(newBook);

// const newBook = produce(book, (draftState) => {
//     draftState.author = 'Chetan Bhagat'
//     draftState.details.name = 'One Indian Girl'
//     draftState.details.genre = [...draftState.details.genre, 'Fiction']
//     draftState.details.availability.Amazon = false 
//     draftState.details.availability.Flipkart = false 
//     draftState.details.availability.Kindle = false 
// });

// console.log(newBook);

// const uname = '    Harley  ';

// const trim = (name) => name.trim();
// const upperCase = (name) => name.toUpperCase();
// const generateMessage = (name) => `Hello ${name}, GoodMorning!`;

// // const result = generateMessage(upperCase(trim(uname)));
// const result = compose(generateMessage, upperCase, trim);
// console.log(result(uname));

// console.log(store.getState());

//Store.subscribe will get call everytime the store gets updated with any value and any parameter!




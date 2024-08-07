//  TODO  ABOUT Filter: direct element
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
//The filter() method does not change the original array.


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//myNums.filter( ()=> {})
const newNums = myNums.filter( (num) => {
    return num > 4
} ) //return.
const newNums2 = myNums.filter( (num) =>  num > 4 )
console.log(newNums2)

const books = [
    {   title: 'Book One', 
        genre: 'Fiction', 
        publish: 1981, 
        edition: 2004 
    },
    {   title: 'Book Two', 
        genre: 'Non-Fiction', 
        publish: 1992, 
        edition: 2008 
    },
    {   title: 'Book Three', 
        genre: 'History', 
        publish: 1999, 
        edition: 2007 
    },
    {   title: 'Book Four', 
        genre: 'Non-Fiction', 
        publish: 1989, 
        edition: 2010 
    },
    {   title: 'Book Five', 
        genre: 'Science',  
        publish: 2009, 
        edition: 2014 
    },
    {   title: 'Book Six', 
        genre: 'Fiction', 
        publish: 1987, 
        edition: 2010 
    },
    {   title: 'Book Seven', 
        genre: 'History', 
        publish: 1986, 
        edition: 1996 
    },
    {   title: 'Book Eight', 
        genre: 'Science', 
        publish: 2011, 
        edition: 2016 
    },
    {   title: 'Book Nine', 
        genre: 'Non-Fiction', 
        publish: 1981, 
        edition: 1989 
    },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter((bk) => bk.publish >=1995)

userBooks = books.filter( (bk) =>  bk.publish >= 1995 && bk.genre === "History")
  console.log(userBooks);


// TODO       ABOUT MAP:
//creates a new array from calling a function for every array element.
//does not execute the function for empty elements.
//does not change the original array.

const my_Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums4 = my_Numbers.map( (num) =>  num + 10)

const numbers = [65, 44, 12, 4];
function myFunction(num) {
    return num * 10;
  }
const newArr = numbers.map(myFunction) //map need reference to the function


//chaining:
const newNums3 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums3);

// TODO  ABOUT Reduce( function () {} )
const myNums5 = [1, 2, 3]
const myTotal = myNums5.reduce(function (accumulated_value, curr_val) {
    console.log(`accumulated_value: ${accumulated_value} and current value : ${curr_val}`);
    return accumulated_value + curr_val
}, 0)
console.log(myTotal)
const arr = myNums5.reduce( (acc , curr) => acc+curr,0 )
console.log(arr)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const price = shoppingCart.reduce((sum , item) => sum + item.price , 0 );
console.log(sum);


// ? Difference between map()  and filter()?
//map() and filter() are both array functions that take user-defined functions as parameters and return updated arrays. 
//The main difference between the two is that map() transforms each element in an array individually, while filter() removes elements that don't meet a specified condition:

// * Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.
// * Every Symbol() call is guaranteed to return a unique Symbol. 
// * 
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
console.log(sym1)
console.log(sym2)
console.log(sym3)
console.table([typeof sym1 , typeof sym2 , typeof sym3])
console.log(Symbol("foo") === Symbol("foo")); // false


const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
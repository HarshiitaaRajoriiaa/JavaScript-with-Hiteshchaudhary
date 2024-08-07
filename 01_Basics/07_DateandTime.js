console.log("hello from date and time file")
// *DATE & TIME:
let mydate = new Date()


/*
 * getDate()	Get the day as a number (1-31)
 * getDay()	Get the weekday a number (0-6)
 * getFullYear()	Get the four digit year (yyyy)
 * getHours()	Get the hour (0-23)
 * getMilliseconds()	Get the milliseconds (0-999)
 * getMinutes()	Get the minutes (0-59)
 * getMonth()	Get the month (0-11)
 * getSeconds()	Get the seconds (0-59)
 * getTime()	Get the time (milliseconds since January 1, 1970)
 */

// *inbuild
console.log(mydate);
console.log(mydate.toDateString()); //curr date
console.log(mydate.toLocaleString()); //date + time
console.log(mydate.toLocaleDateString()); //only date,in diff format
console.log(mydate.toLocaleTimeString()); //only time


// *CREATED:
let myCreatedDate = new Date(5 , 0 , 24) //yy-mm-dd
let createdate1 = new Date(5 , 0 , 24 , 3 ,6 ,7) //yy-mm-dd , h-m-s , start from 0
let createdate2 = new Date("2024-8-6") //yy-mm-dd , start from 1
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate.toString())
console.log(createdate.toString());
console.log(createdate1.toString());
console.log(createdate2.toDateString());

let mydate1 = Date.now() //difference in milliseconds of declaration from [jan 1 1970]
console.log(mydate1)
console.log(createdate2.toDateString())
console.log(createdate2.getTime())
console.log(createdate2.getDay())
console.log(createdate2.getMonth())
console.log((Math.floor(mydate))/1000)
console.log(`time in seconds from 1 january 1970 to the time date mydate variable declared ${(Math.floor(mydate))/1000}`)


// *customization over styling of date or time representation:
let newDate = new Date()
newDate.toLocaleString('default' ,{
    weekday:'long',
    day:'numeric',
    year:'numeric'
}
)
console.log(newDate)



//how long a certain operation takes:
let startTime = Date.now();

// Perform some operation
for (let i = 0; i < 1000000; i++) { /* some operation */ }

let endTime = Date.now();
let elapsedTime = endTime - startTime;
console.log(`Elapsed time: ${elapsedTime} milliseconds`);
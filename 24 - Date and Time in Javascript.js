console.log("We are at Tutorial 24");

let today = new Date();
console.log(today);
console.log(typeof today);

let otherDate = new Date('7-19-2002 11:30:08'); // Month-Day-Year Hours:Minutes:Seconds
console.log(otherDate);

otherDate = new Date('July 19 2002');
console.log(otherDate);

otherDate= new Date('07/19/2002'); // Month-Day-Year
console.log(otherDate);


a = today.getDay();
// Day :- 1, 2, 3, 4, 5, 6, 7 i.e. Monday, Tuesday ... Sunday

a = today.getDate();

a = today.getMonth();
// Month :- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 i.e. January, Feburary, .... December

a = today.getMinutes();

a = today.getSeconds();

a = today.getUTCMilliseconds();

a = today.getTime();
// Returns timestamps


console.log(a);

b = new Date();
console.log(b);
b.setMonth(12);
b.setDate(12);
b.setYear('2012');
b.setHours(12);
b.setMinutes(12);
b.setSeconds(12);
console.log(b);
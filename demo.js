// class bike {
//   constructor(brand) {
//     this.bikename = brand;
//   }

//   showbike() {
//     return `My bike is ${this.bikename}`;
//   }
// }

// class model extends bike {
//   constructor(brand, mod) {
//     super(brand);
//     this.modelname = mod;
//   }

//   show() {
//     return   this.showbike() + `.My Model is ${this.modelname}`;

//   }
// }
// const mybike =  new model("yamaha","r15")

// console.log(mybike.show())
// ----------------------------------------------------------------------------------------------------

///CALLBACK

// function displayer(value) {
//   return `The addition value is ${value}`;
// }

// function adding(sum1, sum2) {
//   const ans = sum1 + sum2;
//   return ans;
// }

// const result = adding(5, 25);

// console.log(displayer(result));

// function displayer(sum) {
//   return `The two number addition value is ${sum}`;
// }

// function mycalculator(sum1, sum2, mycallback) {
//   const sum = sum1 + sum2;
//   return mycallback(sum);
// }

// console.log(mycalculator(15, 5, displayer));

// ---------------------------------------------------------------------------------------------------------

//ASYNC
//  setTimeout(myfunc,2000)

// function myfunc(){
//     setTimeout(myfunc2,1000)
//     return   console.log( `The result`)

// }

// function myfunc2() {

//     return   console.log( `The result2`)

// }

// food = false;

// function shopkeeper() {
//   return new Promise((resolve, reject) => {

// setTimeout(()=>{ if (food) {
//     resolve("food are availble");
//      } else {
//       reject("Food are not availble");
//      }},2000)

//   });
// }

// async function customer() {
//   shopkeeper()
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// try{
//     let result = await shopkeeper()
//     console.log(result)
// }
// catch(message){
//      console.log(message)
// }

// }

// customer()

// console.log("ajith")

// const array = [2,3,3,4,5,6,6]

// let result = []
// for(let i = 0; i<array.length ; i++){

//    if(array.indexOf(array[i]) != i){

//      result.push(array[i])

//    }

// }
// console.log(result);

// let sentence = "my namess is ajith"

// let words = sentence.split(" ")
// let logestword = ''

// for(let word of words){

// if(word > logestword){
//       logestword = word
// }

// }
// console.log(logestword);

// function palindrome(word) {
//   function reverse(word) {
//    let  reversed = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//       reversed += word[i];
//     }
//     return reversed;
//   }

//   const changelowercase = word.toLowerCase();
//   const result = changelowercase === reverse(changelowercase);
//   return result;
// }

// console.log(palindrome("ajith"));
// console.log(palindrome("level"));
// console.log(palindrome("Level"));

// function palindrome(word){

// const changelowercase = word.toLowerCase()

// return result = changelowercase === changelowercase.split('').reverse().join("")

// }

// console.log(palindrome("level"))

// let array = [2,3,4,2,24,4,5,6,2]

// let evenNumbers = [];
// for(let num of array){

// if(num % 2 === 0  ){
//     evenNumbers.push(num)
// }

// }

// console.log(evenNumbers);

// function isprime(number) {
//   if (number < 2) return false;

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isprime(23));
 
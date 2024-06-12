// var b;
// a=50;
// console.log(a);
// var a=40;
// console.log(a);
// a=45;
// console.log(a);
// // it is case sensitiv
// b=25
// console.log(b);
// // var is functional scope 
// var c=15;
// c=12;
// {
//     console.log(c);
// }
// console.log(c);
// // no rediclaration is possible in let function 
// let d=66;
// console.log(d)
// d=67;
// console.log(d)
// // let is a block scope 
// let e=89;
// {
//     console.log(e);
// }
// console.log(e)
// // it is a block scope 
// {
//     let f=89;
//     console.log(f);
// }
// console.log(f)

//conts is  not reassimable and not redictrable 
// const s=24;
// v=43;
// v=45;
// console.log(s)
// console.log(v);

// {
//     const i=92;
//     console.log(i);
// }
// console.log(i);

// premitive data types 
// var a=25;
// console.log(a);
// console.log(typeof(a));

// var b='21 abhi';
// console.log(a);
// console.log(typeof(b));

// var c=true;
// console.log(c);
// console.log(typeof(c));

// var d;
// console.log(b);
// console.log(typeof(b));

// var e=null;
// console.log(e);
// console.log(typeof(e));

// var g=BigInt(1234567891452367856);
// console.log(g);
// console.log(typeof(g));

// var h=Symbol('hello');
// console.log(h);
// console.log(typeof(h));

// // premitive data types 

// var arr=['apple','berry','cherry'];
// console.log(arr);
// console.log(typeof(arr));
// // indexing on array 
// console.log(arr[2]);
// console.log(arr[0]);
// // object 
// var a={
//     name:'Akaay',
//     place:'England',
//     Ang:7
// }
// console.log(a);
// console.log(typeof(a));
// console.log(a.place);
// console.log(a.Age);
// // console.log(a[0][1]);
// var b=[
//     {name:'Abhi',
//     Age:15
//     },
//     {
//         name:'sat',
//         age:30,
//         place:"guntur"
//     },
//     12,
//     true
// ]
// console.log(b[1].place);
// console.log(b[3])

// arthematic operater 
var a=2;
var b=5;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a**b)
console.log(a%b)
console.log(a/b)

var e=20;
console.log(e++);//20
console.log(e);//21
console.log(++e);//22
console.log(e)//22

var f=50;
console.log(f--);//50
console.log(f);//49
console.log(--f);//48
console.log(f);//48

var g=20;
var h='hello'
var i=30;
console.log(h+g);
console.log(g+h+i);
console.log(i+g+h);//front add chestii add avutundii 
console.log(h+g+i);// last lo add chesti string ga convert avutundii like first string ithii 

// Assignment operaters
// =,=+,=-,=/

var b=23;
var c=54;
d=b/c;
e=b;    
f=b+c;
g=b-c;
h=b%c;
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// conditonal 
e=78;
f=28;
console.log(e<f);
console.log(e<=f);
console.log(e>f);
console.log(e>=f);

var g='24';
var h=24;
var i=13;
var j=24;
console.log(g==h); // == and != checking value onlyy not data type
console.log(h===g); // === and !== checking data types not values 
console.log(h===j);

// ternary operaters
var one=90;
var two=30;
var three=one>two?'ok':'not ok ';
console.log(three)

// logical && || !
var a=12;
var b=14;
var c=15;

var b=a<b && b>c;
console.log(b);
// document.getElementById('one').innerHTML="Abhi";
// document.getElementById('one').style.color='gray';
// document.getElementById('one').style.backgroundColor='yellow';
// document.getElementsByClassName('two').innerHTML="Abhi";
// document.getElementsByTagName('h2')[0].innerHTML="i am from tag content";
// document.getElementsByTagName('h2').style.color="red";

let arr=[12,35,57,68,89,23];

arr.map((value, index)=> {
console.log(index*10);
// console.log(value*2);
})

function hello(name,place){
    return `good morning ! ${name}, i am going to ${place}`
}
document.write(hello('Abhi',"eluru"));

var a='abhi';
var b='chinni';
console.log(`hii! ${a} and ${b} `)

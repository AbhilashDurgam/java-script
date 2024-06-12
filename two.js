// Dialog boxes

// var a=34;
// var b=43;
// var c=a+b;
// alert(c)
// confirm(c)
// prompt(c);

// var age=Number(prompt('enter your age: '));
// if (age>=18){
//     alert('you are fine ')
// }
// else{
//     alert('you are not fine ')
// }

// age=Number(prompt('enter your age '))
// if (age<5){
//     alert('free entry')
// }
// else if(age>=5 && age<=10){
//     alert('pay 5/-')
// }
// else if(age>10 && age<=20){
//     alert('pay 20/-')
// }
// else if(age>20 && age<=30){
//     alert('pay 30/-')
// }
// else if(age>30){
//     alert('pay 40/-')
// }
// else{
//     alert('invalid age format')
// }

// switch case 

// var n1=Number(prompt('enter a number:'));
// var n2=Number(prompt('enter a number:'));
// var n3=prompt('enter a operater:');
// switch(n3){
//     case '+':
//         alert('Addition of two numbers :' +(n1+n2));
//         break;
//     case '-':
//         alert('sub of two numbers :' +(n1-n2));
//         break;
//     case '*':
//         alert('mul of two numbers :' +(n1*n2));
//         break;
//     case '/':
//         alert('div of two numbers :' +(n1/n2));
//         break;
//     default:
//         alert('enter a valid numbers only ');
// }

// loops 

// var i=0;
// while (i<=10){
//     console.log(i++)
// }

// var k=5;
// do{
//     console.log(k++);
// }
// while(k<=20);

// for(var i=1; i<=10; i++){
//     console.log(i);
// }

var a=[1,19,123,54,69];
for (let x in a){
    console.log(a[x]*2);
    // console.log(x);
}

var b={
    name:'purna',
    age:60,
    place:'guntur'
}
for (let i in b){
    console.log(b[i]);
}

var one=[10,12,0,1,4,58,64,59,34,65];

for (let a in one){
    console.log(a)
}

var two={
    name:'chinni',
    age:20,
    place:'TKP'
}

for (let bag in two){
    console.log(two[bag]);
}
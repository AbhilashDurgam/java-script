// Number 
var a=12.355;
var b=a.toFixed(2);//round the values 
console.log(b);

a=124;
console.log(a);
b=a.toExponential(2);//print the values like 1.somthing 
console.log(b);

a=12.999;
b=a.toPrecision(3);// like round the value after the point and
console.log(b)

a=parseFloat(12.990);//int formet 
console.log(a);
b=parseInt(12.60);// float formet
console.log(b);

// indexing 
a='this is abhi ';
b=a.indexOf('a'); // name with position 
console.log(b);
b=a.at(10); // index number with position 
console.log(b)

a=['grapes','apple','kiwi','berry'];
console.log(a);
b=a.join(',');
console.log(b);
// b=['IQOO','iphone','samsung','IQ'];
// var d=['abhi','satya','mahesh'];
// var c=b.concat(a,d);
// console.log(c);

b=a.pop();
console.log(b);
console.log(a);
c=a.push('Abhi');
console.log(a);

b=a.shift();
console.log(b);
console.log(a);
b=a.unshift('Dragon');
console.log(b);
console.log(a);
a=['a','b','c','d','e']
b=a.length;
console.log(b);

c=['kohli','rohit','dhoni','shreyas','gill'];
console.log(c)
d=c.splice(2,2);
console.log(d);
var e=c.splice(1,2);
console.log(e);

//date
a=new Date('01-07-2029');
b=a.getFullYear();
console.log(a);

//regex 

a=/^[A-Z],{3}$/;

a='this is not good at';
b=/good/i;
c=a.match(b);
console.log(c);
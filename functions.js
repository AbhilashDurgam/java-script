// function 
function funcation_name(arguments){
    // block of code 
    return;
}
funcation_name();

function Hello(){
    console.log("hello world!")
}
Hello();

function codegnan(a){
    console.log(a);
}
codegnan('codegnan');
codegnan(12434);

function add(a,b){
    // console.log(a+b);
    c=a+b
    return c;
}
add(2,4);
document.write(add(2,5));

function mul(a,b,c,d){
    // console.log(a+b);
    e=a*b*c*d
    return e;
}
mul(2,4,8,6);
document.write(mul(5,8,6,3));

var a=function mul(a,b,c,d){
    // console.log(a+b);
    e=a*b*c*d
    return e;
}
console.log(a(2,4,8,6));
document.write(a(5,8,6,3));
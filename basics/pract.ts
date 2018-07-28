// var nme:string="Welcome to Type script";/* this is string emples */
// document.write(nme+"<br>");
// var nme1:string="Hello ts world";
// document.write(nme1+"<br>");
// var nme2:string=`${nme}`;
// document.write(nme2+"<br>");
// /* any time emples */
// var var1:any={
//     e_id:101,e_name:"ganesh",e_designation:"ui developer"
// }
// document.write(var1.e_id+"<br>");

/* array examples */
// var var2:Array<any>=[
//     {p_id:101,p_name:"ganesh",p_designation:"ui developer"},
//     {p_id:102,p_name:"ganesh",p_designation:"ui developer"},
// ];
// document.write(var2);
    
/* variable declartion inside the function */
// function f(){
// var a:number=10;
// }
// f();

/* FUNCTIONS  */
function fun_one():string{
    return "<h3>welcome to Typescript Coding World</h3>";
}
fun_two("Angularjs","Nodejs","Ts");
document.write(fun_one()+"<br>");

/* funtion with 3 arguments and called with different  */
function fun_two(arg1:string,arg2:string,arg3:string):void{
document.write("The courses are:"+" "+arg1+" "+arg2+" "+"and"+" "+arg3+"<br>");
}
document.write(fun_one()+"<br>");
fun_two("angularjs","nodejs","typescript");
fun_two("mongodb","javascript","Angular");

/* WITH TWO FUNTIONS */
function fun_three():string{
    return fun_four();
}
function fun_four():string{
return "two funtions calling";
}
document.write(fun_three()+"<br>");
/* two funtions with different argument*/
function fun_five(arg1:any):any{
document.write(arg1()+"<br>");
}
function fun_six():string{
    return "Two functions with different arguments";
}
fun_five(fun_six);
/* array with arguments */
function fun_svn(arg4:string,arg5:Array<any>):any{
document.write(arg4+"  "+arg5[0]+"<br>");
}
function fun_eight():string{
    return "message from funtion eight";
}

function fun_nine():string{
    return "message from funtion nine";
}
fun_svn("arguments from fun_sevn",[fun_eight,fun_nine]);

/* task  */
function a():string{
    return "";
}
function b():any{
    return c;
}
function c():string{
    return "hello";
}
function d():any{
    return e;
}
function e():string{
    return "hi";
}
// document.write(a[b,d]);


/*annomous funtions*/
document.write("<h3>Annomous funtions</h3>");
var funOne=():string=>{
   return "welcome to annomous funtion"; 
}
document.write(funOne()+"<br>");
/*EX2*/
var funTwo=(arg1:string,arg2:string,arg3:string):any=>{
    document.write(arg1+" "+arg2+" "+arg3+" "+"<br>");
}
funTwo("HI","Hello","Welcome");

/*ex3*/
document.write("<h5>One arrow function return another arrow function and inner arrow function return message</h5>");
var funThree=():any=>{
    return():string=>{
return "inner arrow function  return welcome message";
    }
}
document.write(funThree()()+"<br>");
/*ex4*/
document.write("<h5>example 4 pass arguments with annonymous funtion"+"<br>");
var funFour=(arg4:any,arg5:any,arg6:any):any=>{
document.write(arg4+"<br>"+arg5+"<br>"+arg6+"<br>"+"<br>");
}
funFour(():string=>{return "data from oracle"},
         ():string=>{return "data from mongodb"},
         ():string=>{return "data from mysql"}
    );
document.write("<h4>ex5 push annonymous to empty array</h4>");
var my_array=[];
for (var i = 0; i < 5; i++) {
    my_array.push(():number=>{return i})
};
for (var i = 0; i<my_array.length; i++) {
    document.write(my_array[1]()+"<br>");
}
document.write("<h4>nested array with manuplation</h4>");
var funSeven=():any=>{
    return(arg7:number,arg8:number):any=>{
document.write("Addition...."+(arg7+arg8)+"<br>");
    return(arg7:number,arg8:number):any=>{
document.write("Subtration...."+(arg7-arg8)+"<br>");
    return(arg7:number,arg8:number):any=>{
document.write("Multiplifiction...."+(arg7*arg8)+"<br>");
    return(arg7:number,arg8:number):any=>{
document.write("Divistion...."+(arg7/arg8)+"<br>");
return document.write("caluculation over");
    
}
}
}
}
}
funSeven()(17,19)(20,10)(142,12)(9,3)();

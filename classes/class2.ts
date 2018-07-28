/*ex-4*/
class Details {
public myFun(){
	return{
		login:login,
		logout:logout,
		setCredentials:setCredentials,
		clearCredentials:clearCredentials
	}
}
}
function login():any {
 	return "welcome to login module"//in  real time here we mention user name and password some details we get from this funtion
 } 
	
function logout():any {
 	return "welcome to logout module"//lly
 } 

function setCredentials():any {
 	return "welcome to setCredentials module"
 } 

function clearCredentials():any {
 	return "welcome to clearCredentials module"
 } 
var obj:Details=new Details();
var json_obj=obj.myFun();
document.write("<h3>classes ex-4 about form details</h3>");
// document.write(obj.myFun().login());
document.write(json_obj.login()+"<br>"+
	           json_obj.logout()+"<br>"+
	           json_obj.setCredentials()+"<br>"+
	           json_obj.clearCredentials()+"<br>");

/*ex-5*/
document.write("<h3>classes ex-5 message from arrow funtion</h3>");
class Msg{
 public myMsg():any{
 	return{
 		message:(arg1:string,arg2:number):any=>{return arg1+" "+arg2}
 	}
 }
}
document.write(new Msg().myMsg().message("welcome to type script world",37));
/*ex-6*/
document.write("<h3>classes ex-6 inheritance concept</h3>");
  class class_one{
public fun_one():string{
	return "i am from class_one"
 }
}
class class_two extends class_one{
public fun_two():string{
return "i am  from class_two"
}
}
var objj:class_two=new class_two();
document.write(objj.fun_one()+"<br>"+objj.fun_two());
/*ex-6*/
document.write("<h3>parent class constroctor with child class referance</h3>");
class ParentClass{
private messeage:string;
constructor(arg1:string){
	this.messeage=arg1;
}
public myFun():any{
return this.messeage;
}
}
class ChildClass extends ParentClass{
}
document.write(new ChildClass("welcome to constrotor referance").myFun())
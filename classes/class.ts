/*class basic example*/
document.write("<h3>class basic example</h3>");
class Details{
	private sub_one:string;
	private sub_two:string;
	private sub_three:string;
	constructor(){
		this.sub_one="angular6";
		this.sub_two="nodejs";
		this.sub_three="mongodb";
	}
		public getSubOne():string{
		return 	this.sub_one;
}
public getSubTwo():string{
		return 	this.sub_two;
}
public getSubThree():string{
		return 	this.sub_three;
}
}
var obj:Details= new Details();
document.write(obj.getSubOne()+" "+obj.getSubTwo()+" "+obj.getSubThree());
/*ex-2;*/
document.write("<h3>class example with two class</h3>");
class class_one{
public myFun():any{
	return new class_two();
}
}
class class_two{
	public myFun():string{
		return "welcome to class funtion two";
	}
}
document.write(new class_one().myFun().myFun());
/*ex-3*/
document.write("<h3>class example with  four class</h3>");
class course_one{
private sub_one:any;
private sub_two:any;
private sub_three:any;
private sub_four:any;
constructor(obj1:any,obj2:any,obj3:any,obj4:any){
	this.sub_one=obj1;
	this.sub_two=obj2;
	this.sub_three=obj3;
	this.sub_four=obj4;
}
public myFun():any{
return this.sub_one+" "+this.sub_two+" "+this.sub_three+" "+this.sub_four;
}
}
class course_two{
	private var_one:string;
	constructor(){
		this.var_one="angular6";
	}
public myFun(){
	return this.var_one;
}
}
class course_three{
	private var_two:string;
	constructor(){
		this.var_two="nodejs";
	}
public myFun(){
	return this.var_two;
}
}
class course_four{
	private var_three:string;
	constructor(){
		this.var_three="Mongodb";
	}
public myFun(){
	return this.var_three;
}
}
document.write(new course_two().myFun(),new course_three().myFun(),new course_four().myFun());

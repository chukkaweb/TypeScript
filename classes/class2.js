var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*ex-4*/
var Details = (function () {
    function Details() {
    }
    Details.prototype.myFun = function () {
        return {
            login: login,
            logout: logout,
            setCredentials: setCredentials,
            clearCredentials: clearCredentials
        };
    };
    return Details;
})();
function login() {
    return "welcome to login module"; //in  real time here we mention user name and password some details we get from this funtion
}
function logout() {
    return "welcome to logout module"; //lly
}
function setCredentials() {
    return "welcome to setCredentials module";
}
function clearCredentials() {
    return "welcome to clearCredentials module";
}
var obj = new Details();
var json_obj = obj.myFun();
document.write("<h3>classes ex-4 about form details</h3>");
// document.write(obj.myFun().login());
document.write(json_obj.login() + "<br>" +
    json_obj.logout() + "<br>" +
    json_obj.setCredentials() + "<br>" +
    json_obj.clearCredentials() + "<br>");
/*ex-5*/
document.write("<h3>classes ex-5 message from arrow funtion</h3>");
var Msg = (function () {
    function Msg() {
    }
    Msg.prototype.myMsg = function () {
        return {
            message: function (arg1, arg2) { return arg1 + " " + arg2; }
        };
    };
    return Msg;
})();
document.write(new Msg().myMsg().message("welcome to type script world", 37));
/*ex-6*/
document.write("<h3>classes ex-6 inheritance concept</h3>");
var class_one = (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return "i am from class_one";
    };
    return class_one;
})();
var class_two = (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        _super.apply(this, arguments);
    }
    class_two.prototype.fun_two = function () {
        return "i am  from class_two";
    };
    return class_two;
})(class_one);
var objj = new class_two();
document.write(objj.fun_one() + "<br>" + objj.fun_two());
/*ex-6*/
document.write("<h3>parent class constroctor with child class referance</h3>");
var ParentClass = (function () {
    function ParentClass(arg1) {
        this.messeage = arg1;
    }
    ParentClass.prototype.myFun = function () {
        return this.messeage;
    };
    return ParentClass;
})();
var ChildClass = (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass() {
        _super.apply(this, arguments);
    }
    return ChildClass;
})(ParentClass);
document.write(new ChildClass("welcome to constrotor referance").myFun());

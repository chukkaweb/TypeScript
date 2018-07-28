/*class basic example*/
document.write("<h3>class basic example</h3>");
var Details = (function () {
    function Details() {
        this.sub_one = "angular6";
        this.sub_two = "nodejs";
        this.sub_three = "mongodb";
    }
    Details.prototype.getSubOne = function () {
        return this.sub_one;
    };
    Details.prototype.getSubTwo = function () {
        return this.sub_two;
    };
    Details.prototype.getSubThree = function () {
        return this.sub_three;
    };
    return Details;
})();
var obj = new Details();
document.write(obj.getSubOne() + " " + obj.getSubTwo() + " " + obj.getSubThree());
/*ex-2;*/
document.write("<h3>class example with two class</h3>");
var class_one = (function () {
    function class_one() {
    }
    class_one.prototype.myFun = function () {
        return new class_two();
    };
    return class_one;
})();
var class_two = (function () {
    function class_two() {
    }
    class_two.prototype.myFun = function () {
        return "welcome to class funtion two";
    };
    return class_two;
})();
document.write(new class_one().myFun().myFun());
/*ex-3*/
document.write("<h3>class example with  four class</h3>");
var course_one = (function () {
    function course_one(obj1, obj2, obj3, obj4) {
        this.sub_one = obj1;
        this.sub_two = obj2;
        this.sub_three = obj3;
        this.sub_four = obj4;
    }
    course_one.prototype.myFun = function () {
        return this.sub_one + " " + this.sub_two + " " + this.sub_three + " " + this.sub_four;
    };
    return course_one;
})();
var course_two = (function () {
    function course_two() {
        this.var_one = "angular6";
    }
    course_two.prototype.myFun = function () {
        return this.var_one;
    };
    return course_two;
})();
var course_three = (function () {
    function course_three() {
        this.var_two = "nodejs";
    }
    course_three.prototype.myFun = function () {
        return this.var_two;
    };
    return course_three;
})();
var course_four = (function () {
    function course_four() {
        this.var_three = "Mongodb";
    }
    course_four.prototype.myFun = function () {
        return this.var_three;
    };
    return course_four;
})();
document.write(new course_two().myFun(), new course_three().myFun(), new course_four().myFun());

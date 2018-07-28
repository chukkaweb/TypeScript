document.write("<h3>json basic example</h3>");
var data={sub_one:"angular",sub_two:"node",sub_thre:"react"
}
document.write(data.sub_one);

/*with arrow funtion*/
document.write("<h3>Using arrow funtion with key values</h3>");
var data_one=():any=>{
	return{
		login:():string=>{return "login module"},
		logout:():string=>{return "loout module"},
		setCredential:():string=>{return "setcredenical  module"},
		clearCredential:():string=>{return "clear module"}
	};
};
document.write("<br>"+data_one().login()+"<br>"+data_one().logout());
/*named funtion with function defination*/
document.write("<h3>Using named  funtion with key values</h3>");
function data_two():any{
return{
	fun_one:fun_one,
	fun_two:fun_two,
	fun_three:fun_three
}
}
function fun_one():string{
	return "welcome to fun_one";
}

function fun_two():string{
	return "welcome to fun_two";
}

function fun_three():string{
	return "welcome to fun_three";
}
document.write(data_two().fun_one()+"<br>"+data_two().fun_two());
/*calculator by usina  arrow funtion*/
document.write("<h3>Calculator by using  arrow funtion</h3>");
 var calculator=():any=>{
 	return{
 		add:(arg1:number,arg2:number):number=>{return arg1+arg2},
 		sub:(arg1:number,arg2:number):number=>{return arg1-arg2},
 		mul:(arg1:number,arg2:number):number=>{return arg1*arg2},
 		div:(arg1:number,arg2:number):number=>{return arg1/arg2}
 	}
 }

document.write(calculator().add(10,20)+"<br>"+calculator().sub(20,20)+"<br>"+calculator().mul(10,20)+"<br>"+calculator().div(9,3)+"<br>")
/*json objects with array*/
document.write("<h3>json objets with array</h3>");

var Product_data={
	"products":[
	{"p_id":101,"p_name":"a","p_cost":100},
	{"p_id":102,"P_name":"b","p_cost":200},
	{"p_id":103,"P_name":"c","p_cost":300},
	{"p_id":104,"P_name":"d","p_cost":400},
	{"p_id":105,"P_name":"e","p_cost":500}
]}

// document.write(details.products[0].p_id);

document.write("<h3>json objects with arrow funtion</h3>");
 var subjects=(obj1,obj2,obj3):any=>{
document.write(obj1.sub_one+"<br>"+
	           obj2.sub_two+"<br>"+
	           obj3.sub_three+"<br>");
 }
subjects({"sub_one":"angularjs"},
	       {"sub_two":"nodejs"},
	       {"sub_three":"js"})

/*json recors w3schools exaples */
document.write("<h3>json objects example from w3schools</h3>");
var details= {
  "records": [
    {
      "Name": "Alfreds Futterkiste",
      "City": "Berlin",
      "Country": "Germany"
    },
    {
      "Name": "Ana Trujillo Emparedados y helados",
      "City": "México D.F.",
      "Country": "Mexico"
    },
    {
      "Name": "Antonio Moreno Taquería",
      "City": "México D.F.",
      "Country": "Mexico"
    },
    {
      "Name": "Around the Horn",
      "City": "London",
      "Country": "UK"
    },
    {
      "Name": "B's Beverages",
      "City": "London",
      "Country": "UK"
    },
    {
      "Name": "Berglunds snabbköp",
      "City": "Luleå",
      "Country": "Sweden"
    },
    {
      "Name": "Blauer See Delikatessen",
      "City": "Mannheim",
      "Country": "Germany"
    },
    {
      "Name": "Blondel père et fils",
      "City": "Strasbourg",
      "Country": "France"
    },
    {
      "Name": "Bólido Comidas preparadas",
      "City": "Madrid",
      "Country": "Spain"
    },
    {
      "Name": "Bon app'",
      "City": "Marseille",
      "Country": "France"
    },
    {
      "Name": "Bottom-Dollar Marketse",
      "City": "Tsawassen",
      "Country": "Canada"
    },
    {
      "Name": "Cactus Comidas para llevar",
      "City": "Buenos Aires",
      "Country": "Argentina"
    },
    {
      "Name": "Centro comercial Moctezuma",
      "City": "México D.F.",
      "Country": "Mexico"
    },
    {
      "Name": "Chop-suey Chinese",
      "City": "Bern",
      "Country": "Switzerland"
    },
    {
      "Name": "Comércio Mineiro",
      "City": "São Paulo",
      "Country": "Brazil"
    }
  ]

}
var result="";
for (var i = 0; i <details.records.length; i++) {
	var _name=details.records[i].Name;
	var _city=details.records[i].City;
	var _country=details.records[i].Country;
	result+=_name+" "+_city+" "+_country+"<br>"
}
document.write(result+"<br>")
// document.write(details.records[3].Name+" "+details.records[3].City+" "+details.records[3].Country)

/*rest coutries derails from web sites*/

var info=[
  {
    "name": "Afghanistan",
    "topLevelDomain": [
      ".af"
    ],
    "alpha2Code": "AF",
    "alpha3Code": "AFG",
    "callingCodes": [
      "93"
    ],
    "capital": "Kabul",
    "altSpellings": [
      "AF",
      "Afġānistān"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 27657145,
    "latlng": [
      33.0,
      65.0
    ],
    "demonym": "Afghan",
    "area": 652230.0,
    "gini": 27.8,
    "timezones": [
      "UTC+04:30"
    ],
    "borders": [
      "IRN",
      "PAK",
      "TKM",
      "UZB",
      "TJK",
      "CHN"
    ],
    "nativeName": "افغانستان",
    "numericCode": "004",
    "currencies": [
      {
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "؋"
      }
    ],
    "languages": [
      {
        "iso639_1": "ps",
        "iso639_2": "pus",
        "name": "Pashto",
        "nativeName": "پښتو"
      },
      {
        "iso639_1": "uz",
        "iso639_2": "uzb",
        "name": "Uzbek",
        "nativeName": "Oʻzbek"
      },
      {
        "iso639_1": "tk",
        "iso639_2": "tuk",
        "name": "Turkmen",
        "nativeName": "Türkmen"
      }
    ],
    "translations": {
      "de": "Afghanistan",
      "es": "Afganistán",
      "fr": "Afghanistan",
      "ja": "アフガニスタン",
      "it": "Afghanistan",
      "br": "Afeganistão",
      "pt": "Afeganistão",
      "nl": "Afghanistan",
      "hr": "Afganistan",
      "fa": "افغانستان"
    },
    "flag": "https://restcountries.eu/data/afg.svg",
    "regionalBlocs": [
      {
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [
          
        ],
        "otherNames": [
          
        ]
      }
    ],
    "cioc": "AFG"
  }
]
var countryInfo="";
for (var i = 0; i<info.length;i++) {
	var _name=info[i].name;
	var _flag=info[i].flag;
	var _cioc=info[i].cioc;
}
countryInfo=_name+" "+_flag+" "+_cioc;
document.write(countryInfo);




function data() {

let name = document.querySelector("#name").value;
let age = document.querySelector("#age").value;
let city = document.querySelector("#city").value;
     
localStorage.setItem("name",name)
localStorage.setItem("age",age)
localStorage.setItem("city",city)

let a=localStorage.getItem("name")
    let b=localStorage.getItem("age")
    let c=localStorage.getItem("city")
    document.querySelector("#first").innerHTML=a;
    document.querySelector("#second").innerHTML=b;
    document.querySelector("#third").innerHTML=c;

    return false;
}
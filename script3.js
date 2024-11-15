function save(){
    let data = {
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        name : document.querySelector('#contact').value,
    }
    localStorage.setItem("mydata",JSON.stringify(data))
}

let m = JSON.parse(localStorage.getItem("mydata"))
console.log(m);

let myname = document.querySelector('#myname')
let myage = document.querySelector('#myname')
let mycontact = document.querySelector('#myname')

myname.innerHTML = m.name
myage.innerHTML = m.age
mycontact.innerHTML = m.contact
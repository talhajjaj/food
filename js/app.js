'use strict';

let form= document.getElementById("myForm");
let table=document.getElementById('myTable');
let tbody=document.getElementById("myBody");

let customerNew=[];


function Food (customerName,foodType){
    this.customerName = customerName;
    this.foodType = foodType ;
    this.path= `img/${foodType}.jpg`;
    customerNew.push(this);
}

function price(min,max){
    return Math.floor( Math.random() * (max - min) + min);
}

function setlocalStorage()
{
    let data = JSON.stringify(customerNew);
    localStorage.setItem('order', data);


}
function getlocalstorage()
{
    let stringObj= localStorage.getItem("order")
    let normalObj= JSON.parse(stringObj)
    if  ( normalObj!==null) {

    
       customerNew =normalObj;}

       render();
}


function handelsubmit(event){
    event.preventDefault();
    console.log(event);
    let customerName=event.target.customerName.value;
    let foodType=event.target.foodType.value;
    new Food(customerName,foodType);
    render();
    console.log(event);

    setlocalStorage();
}

function render(){
    tbody.textContent=``;
for (let index = 0; index < customerNew.length; index++) {
    
    let tr1=document.createElement('tr');
    tbody.appendChild(tr1);

    let td1=document.createElement('td');
    tr1.appendChild(td1);

    let td2=document.createElement('td');
    tr1.appendChild(td2);

    let img =document.createElement('img');
    td1.appendChild(img);
    img.setAttribute('src',customerNew[index].path);

    td2.textContent=`customer name : ${customerNew[index].customerName}
    food type :${customerNew[index].foodType}
    price :${price(10,30)}`;
}

}

form.addEventListener("submit",handelsubmit);
getlocalstorage();

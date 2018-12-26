////////////////////////////////////
//examine document, javascript DOM//
////////////////////////////////////
console.dir(document);      //look at the document tree/collection  
console.log(document.all);
console.log(document.all[2]);
console.log(document.title);
document.title = 'learnjavascript'; //bisa dipakai buat diganti2 via javascript
console.log(document.images);
//------------------------------------------------

//------------------------------------------------
//GETELEMENTBYID, beda dengan menggunakan selector(?)
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');

headerTitle.textContent = 'dengan text content';
headerTitle.innerText = 'dengan inner text';
headerTitle.innerHTML = "<strike>list item | inner html"; //bisa pakai atribut html 

headerBorder = document.getElementById('header')
headerBorder.style.borderRight = 'solid 3px #666';
//------------------------------------------------

//------------------------------------------------
//GETELEMENTSBYCLASSNAME
var items = document.getElementsByClassName('list-group-item');
console.log(items);  //bisa diakses berdasarkan colection (items[0], dll)

//akses untukl semua collection
for (var i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold';
}

//akses per collection
items[1].textContent = 'item 2 lighter with different background';
items[1].style.fontWeight = 'lighter';
items[1].style.color = 'white';
items[1].style.backgroundColor = 'grey';
//------------------------------------------------

//------------------------------------------------
//GETELEMENTSBYTAGNAME
var li = document.getElementsByTagName('li'); //ambil semua li dalam page, jika di loop semua li akan ganti sesuai kodingan anda
li[3].innerHTML = 'item 4 diakses dengan tag li[3]';//biasanya dipake misal mau nambahin li pada list, biar style dari li yang baru mengikuti li yang sebelumnya (misal tidak diberi class)
//------------------------------------------------

//------------------------------------------------
//QUERYSELECTOR, only for 1 item, seperti jquery
var header = document.querySelector('#header')
header.style.borderLeft = 'solid 4px #000';

var input = document.querySelector('input');
input.value = 'heyyy'; //cuma yang di textbox yg berubah karna queryselector cuma akses yg pertama saja,kalo mau akses yg lain pake semisal dibawah
//oper dalam bentuk css bisa dilakukan
var submit = document.querySelector('input[type="submit"]');
submit.value = "Send!";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var itemterakhir = document.querySelector('.list-group-item:nth-child(3)');
itemterakhir.style.color = 'blue';
//------------------------------------------------

//------------------------------------------------
//QUERYSELECTORALL, grab more than 1 thing
//cukup jelas(?)
// misal membuat isi list belang2
// var oddItem = document.querySelectorAll('.list-group-item:nth-child(odd)');
//var evenItem = document.querySelectorAll('.list-group-item:nth-child(even)');
// for (var [i] = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#000';
//     even[i].style.backgroundColor = '#fff'; n
// }
//------------------------------------------------

//------------------------------------------------
//DOM Traversing (access child,parent,sibling)
var itemList = document.querySelector('#items');
//parent
console.log(itemList.parentNode) //access the parent node
console.log(itemList.parentNode.parentNode.parentNode)
itemList.parentNode.style.backgroundColor = '#f4f4f4'
//parentNode==parentElement
//child
console.log(itemList.childNodes); //nodelist
console.log(itemList.children); //collection
//sibling
console.log(itemList.nextElementSibling);
//------------------------------------------------

//------------------------------------------------
//CREATING ELEMENT
var newDiv = document.createElement('div');
newDiv.className = 'add-class';
newDiv.id = 'add-id'
newDiv.setAttribute('title', 'this is a title');
console.log(newDiv);

var newDivText = document.createTextNode('hello world');
console.log(newDivText);

newDiv.appendChild(newDivText);
console.log(newDiv);

newDiv.style.fontSizez = '30px';

//inserting the element
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);
//------------------------------------------------

//------------------------------------------------
//EVENT
//ada click, dbclick, mousedown, mouseup, mouseenter, mouseleave, mouseout, mouseover, mousemove
//keydown, keyup, keypress, focus,blur, cut, paste
function buttonClick() {
    console.log('button clicked');
}

var button = document.getElementById('button-clickhere').addEventListener('click', function () {
    console.log('button clicked via getelementbyid');
})

var button2 = document.getElementById('button-clickhere2').addEventListener('click', function () {
    document.getElementById('header-title').textContent = 'title changed via button click'
})

var button3 = document.getElementById('button-clickhere3').addEventListener('click', function (x) {
    var output = document.getElementById('output');
    output.innerHTML = '<h3>' + x.target + '</h3>';

    //x.clientX -> x axis dari mouseclick pada layar keseluruhan
    //x.clientY -> y axis dari mouseclick ----
    //x.offsetX -> x axis dari mosueclick pada element tertentu misal button 
    //x.altKey/shiftKey/ctrlKey -> return true jika bersama click dipencet juga ctrl/shift/alt
})
var position = document.getElementById('position');
var canvas = document.getElementById('empty-card');
canvas.addEventListener('mousemove', function (e) {
    position.innerHTML = '<h3> x= ' + e.offsetX + ', y =' + e.offsetY + '</h3>';
    canvas.style.backgroundColor = "rgb(" + e.offsetX/2 + "," + e.offsetY/2 + ","+40+")";
})

var itemInput = document.querySelector('input[type="text"');
var form = document.querySelector('form');

itemInput.addEventListener('keydown',function(e){
    console.log(e);
    console.log(e.target.value)
    position.innerHTML = '<h3>'+e.target.value+'</h3>';
})

var select = document.querySelector('select');
select.addEventListener('change',function(e){
    console.log(e.type);
    console.log(e.target.value);
});

form.addEventListener('submit',function(e){
    e.preventDefault;
})
//------------------------------------------------
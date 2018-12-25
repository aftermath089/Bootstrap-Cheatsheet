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
var itemList=document.querySelector('#items');
//parent
console.log(itemList.parentNode) //access the parent node
console.log(itemList.parentNode.parentNode.parentNode)
itemList.parentNode.style.backgroundColor='#f4f4f4'
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
newDiv.className='add-class';
newDiv.id='add-id'
newDiv.setAttribute('title', 'this is a title');
console.log(newDiv);

var newDivText = document.createTextNode('hello world');
console.log(newDivText);

newDiv.appendChild(newDivText);
console.log(newDiv);

newDiv.style.fontSizez='30px';

//inserting the element
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
 
container.insertBefore(newDiv,h1);
//------------------------------------------------

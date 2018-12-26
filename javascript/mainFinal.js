var form = document.getElementById('add-form');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//filter
filter.addEventListener('keyup',function(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    //converting to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })

})

//add
form.addEventListener('submit',function(e){
    e.preventDefault();
    var inputItem = document.getElementById('input-item').value;

    //create li 
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    //append  child
    li.appendChild(document.createTextNode(inputItem));


     //delete button
     var deleteButton = document.createElement('button');
     deleteButton.className = 'x-button';
    deleteButton.appendChild(document.createTextNode('x'))

    //append child
    li.appendChild(deleteButton);

   
    itemList.appendChild(li);
    console.log(li);
})

//delete
itemList.addEventListener('click',function(e){
    if(e.target.classList.contains('x-button')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement; //ngambil li elemenya,karna tadi e nya pada buttonm
            itemList.removeChild(li); //li langsung nunjuk ke posisi ke berapa jadi deletenya gaperlu pakai alamt lagi
        }
    }
}); 


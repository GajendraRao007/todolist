let form = document.getElementById("addForm")
let itemlist = document.getElementById("items")
let filteritem = document.getElementById("filter")

// Form submit event
form.addEventListener('submit', additem)

itemlist.addEventListener('click' ,removeItem)

filteritem.addEventListener('keyup' , filterItems)



//Add event
function additem(e){
    e.preventDefault();

    // get input value

let newItem = document.getElementById("item").value;

//create new li elemenet

let li = document.createElement("li")

//add class

li.className ='list-group-item';
// Add text node with input value
li.appendChild(document.createTextNode(newItem));

// Create del button element
var deleteBtn = document.createElement('button');

// Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

deleteBtn.appendChild(document.createTextNode('X'))

li.appendChild(deleteBtn)

itemlist.appendChild(li);
}


// Remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are You Sure")){
        let li = e.target.parentElement;
        
        itemlist.removeChild(li);


        }
    }
}


//Filter items 

function filterItems(e){
//Convert text to lower Case
let text = e.target.value.toLowerCase()
console.log(text);

// Get all list
let items = itemlist.getElementsByTagName("li")
console.log(items);

//convert it into array
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


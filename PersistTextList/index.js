let ul = document.getElementById("listOfItems")
let foodItem = document.getElementById("item")

function addItem() {
    let li = document.createElement("li")
    li.setAttribute('id', foodItem.value)
    li.appendChild(document.createTextNode(foodItem.value))
    ul.appendChild(li)
}
function removeItem() {
    let removedItem = document.getElementById(foodItem.value)
    ul.removeChild(removedItem)
}

function savedItem() {
    let savedFoodItem = document.getElementById("item").value
    localStorage.setItem('saveList', savedFoodItem)
    
}
function loadItem() {
    let savedFoodItem = localStorage.getItem('saveList')
    document.getElementById("item").value = savedFoodItem
}
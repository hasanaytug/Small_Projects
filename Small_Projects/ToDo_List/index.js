
const itemList = document.querySelectorAll(".list li");

function addItem(){
    
    const newItem = document.querySelector(".item-area").value;
    const newListItem = document.createElement('li');
    newListItem.className = "list-item";
    newListItem.innerHTML = `<div>
    <span class="text">${newItem}</span>
    </div>
    <div class"buttons">
        <button class="btn done-btn"><i class="fas fa-check"></i></button>
        <button class="btn delete-btn"><i class="far fa-trash-alt"></i></button>
    </div>`

    document.querySelector("ul").appendChild(newListItem);
}

function appendListItem(e){
    if (e.target.className.includes("add-item-btn") || e.target.className.includes("fa-plus")){
        addItem()
        document.querySelector(".item-area").value = ""
    }else if(e.target.className.includes("done-btn") || e.target.className.includes("fa-check")){
        e.target.closest("button").parentElement.parentElement.querySelector("span").classList.toggle("done-item")
        e.target.closest("button").classList.toggle("checked");
        
        ;
    }else if(e.target.className.includes("delete-btn") || e.target.className.includes("fa-trash-alt")){
        e.target.closest("button").parentElement.parentElement.remove();
    }

}

document.querySelector(".container").addEventListener("click",function(e){
    console.log(e.target);
    appendListItem(e);
})

document.addEventListener("keypress",function(e){
    if(e.target.className === "item-area" && e.code === "Enter"){
        addItem();
        document.querySelector(".item-area").value = "";
    }else{
        return
    }
})
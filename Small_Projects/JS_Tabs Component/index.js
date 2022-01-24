
const allTabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

document.querySelector(".wrapper").addEventListener("click",function(e){
    if(e.target.className.includes("tab")){
        allTabs.forEach(t => t.classList.remove("transform"));
        e.target.classList.add("transform");

        const targetId = e.target.id

        contents.forEach(c => c.classList.remove("show"));

        document.querySelector(`#content${targetId[targetId.length-1]}`).classList.add("show");

    }
    
})
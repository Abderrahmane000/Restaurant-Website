let container = document.querySelector(".overview-container");
let overviewBoxes = document.querySelectorAll(".overview-item");
let foodItems = document.querySelectorAll('.single-menu');
let exitSign = document.querySelectorAll(".overview-item i");


foodItems.forEach(e => {
    e.addEventListener("click",()=>{
        container.style.display = 'flex';
        let myTarget = e.getAttribute("data-name");
        overviewBoxes.forEach(box => {
            if(box.getAttribute("data-target") == myTarget){
                box.classList.add("active");
            }
        })
    })
})
exitSign.forEach(e => {
    e.addEventListener("click",()=>{
        e.parentElement.classList.remove("active");
        container.style.display = "none";
    });
});


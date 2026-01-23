const envelope = document.getElementById("envelope");
const note = document.getElementById("note");
let countFlame = 3;

envelope.addEventListener("click",function(){
    this.classList.add("open")
})
note.addEventListener("click", function(){
    envelope.classList.add('active-note')
    document.getElementById("leftNote").style.opacity= 1;
})

function nextPage(nextPage){
    document.querySelectorAll(".page").forEach(currentPage =>{currentPage.style.display="none";});
    document.getElementById(`page${nextPage}`).style.display="flex";
}

function closePopUp(){
    document.querySelector(".pop-up").style.opacity=0;
    setTimeout(()=>{document.querySelector(".pop-up").style.display="none";},1000)
}
function cancelFlame(numberOfFlame){
    let flames;
    if(numberOfFlame === 1 ){
        flames = document.querySelector(`.flame`);
    }
    else{
        flames = document.querySelector(`.flame${numberOfFlame}`);
    }
    countFlame -= 1;
    flames.style.opacity = 0;

    if(countFlame <= 0){
        document.querySelector(".page4").classList.add("show");
    }
}

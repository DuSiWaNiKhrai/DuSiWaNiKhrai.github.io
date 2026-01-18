const envelope = document.getElementById("envelope");
const note = document.getElementById("note");

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

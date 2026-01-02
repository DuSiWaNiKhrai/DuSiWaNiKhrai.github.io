const envelope = document.getElementById("envelope");
const note = document.getElementById("note");

envelope.addEventListener("click",function(){
    this.classList.add("open")
})
note.addEventListener("click", function(){
    envelope.classList.add('active-note')
    document.getElementById("leftNote").style.opacity= 1;
})

function nextPage(page){
    document.getElementById(`page${page-1}`).style.display="none";
    document.getElementById(`page${page}`).style.display="flex";
}

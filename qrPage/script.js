function pages(nextPage){
    document.querySelectorAll(".page").forEach(currentPage =>{currentPage.style.display="none";});
    document.getElementById(`page${nextPage}`).style.display="flex";
}

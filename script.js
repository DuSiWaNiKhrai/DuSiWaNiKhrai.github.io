let passwordKey = "NamoZaza55"

const params = new URLSearchParams(window.location.search);
const key = params.get("key");


if (key === passwordKey){
    localStorage.setItem("permission" , "true");
    window.location.href = "/qrPage"
}
else if(localStorage.getItem("permission") === "true"){
    document.getElementById("nextBtn").style.display="flex";
}
else{
    document.getElementById("nextBtn").style.display="none";
}

function pages(nextPage){
    document.querySelectorAll(".page").forEach(currentPage =>{currentPage.style.display="none";});
    document.getElementById(`page${nextPage}`).style.display="flex";
}


// ชั่วคราว
if(new URLSearchParams(window.location.search).get("reset") === "okay"){
    localStorage.removeItem("permission")
    window.location.href="/"
}

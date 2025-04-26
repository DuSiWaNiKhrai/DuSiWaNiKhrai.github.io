let currentPage = 1;

for(let i = 1 ; i <= 8 ; i++){
    document.getElementById(`keyPage${i}`).addEventListener('keypress',function(event){
        if(event.key === 'Enter'){
            checkKey(i)
        }
    });
}

const key = {
    1: "aotsong",
    2: "pngfile",
    3: "hangena",
    4: "iamatom",
    5: "nonskid",
    6: "uiiaoai",
    7: "twoplan",
    
};

function checkKey(pageNumber){
    const input = document.getElementById(`keyPage${pageNumber}`);
    const correctKey = key[pageNumber];

    if(input.value === correctKey){
        setTimeout(()=>{
            document.querySelector(`.page${pageNumber}`).style.display="none";
            document.querySelector(`.page${pageNumber + 1}`).style.display="flex";
            currentPage = pageNumber+1;
            saveProgress(currentPage);
        },1000);
        input.style.borderColor="lime";
    }
    else if(input.value === 'reset' && pageNumber>1){
        if(input.value.includes('reset')){
            input.value = input.value.replace('reset','');
        }
        localStorage.removeItem('highestPage');
        document.querySelector(".page1").style.display="flex"
        document.querySelector(`.page${pageNumber}`).style.display="none"
        currentPage = 1;
    }
    else{
        input.style.borderColor="red";
        setTimeout(()=>{
            input.style.borderColor="#ccc";
        },800);
    }
}

function saveProgress(pageNumber){
    localStorage.setItem('highestPage', pageNumber);
}
function loadProgress(){
    try{
        const savedHighest = localStorage.getItem('highestPage');
        if(savedHighest){
            const pageNum =parseInt(savedHighest);
            if(!isNaN(pageNum) && pageNum>1){
                document.querySelector(".page1").style.display="none";
                document.querySelector(`.page${pageNum}`).style.display="flex";
                currentPage = pageNum;
            }
        }
    }
    catch(e){
        console.error('Error loading saved progress:', e);
    }
}

window.onload = function(){
    loadProgress();
};

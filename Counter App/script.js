const increBtn=document.getElementById("incre-btn");
const decreBtn=document.getElementById("decre-btn");
const disVal=document.getElementById("display-val");
const rstBtn=document.getElementById("rst-btn");

// For Increment 
increBtn.addEventListener("click",()=>{
    const value=Number(disVal.innerText);
    if(value>=100){
        alert("100+ value are not allowed")
    }else{
        disVal.innerText=value+1;
    }
})

// For Decrement
decreBtn.addEventListener("click",()=>{
    const value=Number(disVal.innerText);
    if(value>0){
        disVal.innerText=value-1;
    }else{
        alert("Negative Value are not allowed");
    }
})

// For Reset 
rstBtn.addEventListener("click",()=>{
    disVal.innerHTML=0;
})

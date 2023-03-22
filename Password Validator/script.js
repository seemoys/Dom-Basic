
function fun(){

    const pass=document.getElementById("pass").value;
    const cnfpass=document.getElementById("cnfpass").value;
    
    if(pass==""){
        document.getElementById("msg1").innerText="*** Please Enter Password ***";
        document.getElementById("msg1").style.color="red";
        return false;
    }
    if(pass.length<5){
        document.getElementById("msg1").innerText="*** Password Length Must be Greater than 5 Character ***";
        return false;
    }
    if(pass.length>15){
        document.getElementById("msg1").innerText="*** Password Length Must be Smaller than 15 Character ***";
        return false;
    }
    if(pass != cnfpass){
        document.getElementById("msg2").innerText="*** Password Does not Matched ***";
        document.getElementById("msg2").style.color="crimson";
        return false;
    }
    if(pass == cnfpass){
        document.getElementById("msg3").innerText="*** Password Matched ***";
        document.getElementById("msg3").style.color="green";
        return false;
    }
   
}
const btn=document.getElementById("sub-btn");
btn.addEventListener("click",fun3);
function fun3(){
    document.getElementById("sub-btn").style.backgroundColor="white";
    document.getElementById("sub-btn").style.color="crimson";
    document.getElementById("sub-btn").style.fontSize="20px";
    document.getElementById("sub-btn").style.boxShadow="-2px -3px 2px 3px #808080";
}




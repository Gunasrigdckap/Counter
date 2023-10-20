let count=0;

function decrease(){
    count--
    document.getElementById("zero").innerHTML=count;
   if(count<0){
    document.getElementById("zero").style.color="red"
   }
   else if(count==0){
    document.getElementById("zero").style.color="black"
   }
}


function reset(){
    count=0;
    document.getElementById("zero").innerHTML=count;
    document.getElementById("zero").style.color="black"
    
}

function increase(){
    count++
    document.getElementById("zero").innerHTML=count;
    if (count>0) {
        document.getElementById("zero").style.color="green"
    } else if(count==0) {
        document.getElementById("zero").style.color="black"
    }
    
}

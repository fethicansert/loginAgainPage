let isClose = true;

document.getElementById("arrow-button").onclick =function (){
    if(isClose){
        isClose = false;
        document.getElementById("box").style.transform = "scale(1,1)";
    }else{
        document.getElementById("box").style.transform = "scale(0,0)";
        isClose = true
    }
    
}
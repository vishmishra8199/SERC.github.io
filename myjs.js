function admin1(){
    x = document.getElementById("kun");
    
    if(x.innerHTML=="Enter Admin Mode"){
    x.innerHTML="Enter Non Admin Mode";
    document.body.contentEditable=true;
    }

    else{
        x.innerHTML="Enter Admin Mode";
      
        document.body.contentEditable=false;

    }
}





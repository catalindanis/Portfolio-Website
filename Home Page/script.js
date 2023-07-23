window.addEventListener('load', function () {
    init();
    //this.window.setInterval(nameAnimate,100);
});

let divName;
let spanName;
let fullName;

function init(){
    divName = document.getElementById("name");
    spanName = divName.getElementsByTagName("span")[0];   
    fullName = spanName.textContent;
}

//deleting and rewriting the name from the header
//between each time a letter is deleted or rewrited, 
//it has a 150ms pause for a fluid move 
//alos it has a 1.35s pause when name is full
let deleting = false;
var waited = 0;
function nameAnimate(){
        if(spanName.textContent.length == 1)
            deleting = false;

        if(!deleting && spanName.textContent.length == fullName.length){
            deleting = true;
            waited = 0;
        }

        if(!deleting){
            spanName.textContent = fullName.substring(0,spanName.textContent.length+1);
            if(spanName.textContent[spanName.textContent.length-1] == ' ')
                spanName.textContent = fullName.substring(0,spanName.textContent.length+1);
        }

        if(deleting){
            if(waited < 12){
                waited++;
            }
            else{
                spanName.textContent = fullName.substring(0,spanName.textContent.length-1);
                if(spanName.textContent[spanName.textContent.length-1] == ' ')
                    spanName.textContent = fullName.substring(0,spanName.textContent.length-1);
            }
        }     
}


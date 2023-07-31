window.addEventListener('load', function () {
    init();
    this.window.setInterval(nameAnimate,100);
    this.window.setInterval(scrollListen, 0);
});

let divName;
let spanName;
let fullName;
let miniNavBar;
let projectsSection

function init(){
    divName = document.getElementById("name");
    spanName = divName.getElementsByTagName("span")[0];   
    fullName = spanName.textContent;
    miniNavBar = document.getElementById("mini-navigation-bar");
    projectsSection = document.getElementById("projects");
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

function navigateTo(url,newTab){
    console.log(newTab);
    if(!newTab)
        window.location.href=url;
    else
        window.open(url, "_blank");
}

var lastScrollY = 0;
function scrollListen(){
    var scrollY = window.scrollY;

    if(scrollY >= 200){
        projectsSection.style.animation = "opacity_increase 0.6s";
        projectsSection.style.opacity = "1";
    }

    if(scrollY > 490 && scrollY < lastScrollY){
        miniNavBar.style.display = "flex";
        miniNavBar.style.animation = "opacity_increase 0.3s";   
    }
    else if(scrollY < 490 || scrollY > lastScrollY){ 
        miniNavBar.style.animation = "opacity_decrease 0.3s";
        this.window.setTimeout(() => {
            miniNavBar.style.display = "none";
        }, 300);
    }

    lastScrollY = scrollY;
}

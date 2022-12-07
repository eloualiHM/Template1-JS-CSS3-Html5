// Start Setting
let toggle=document.querySelector(".toggle-sett");
let icon=document.querySelector(".icon");
let setting=document.querySelector(".setting-box");
let colorsLi=document.querySelectorAll(".colors-list li");
//storage
let colorStorage=localStorage.getItem("color_option");
if(colorStorage!==null){
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color_option"));
    colorsLi.forEach(l=>{
        l.classList.remove("active");
        if(l.dataset.color===colorStorage)l.classList.add("active");
    });
    
}
//switch colors
toggle.addEventListener("click",showSetting);
function showSetting(){
    setting.classList.toggle("open");
    icon.classList.toggle("fa-spin");
}

colorsLi.forEach(el => {
    el.addEventListener("click",(e)=>{
        colorsLi.forEach(l=>l.classList.remove("active"));
        e.currentTarget.classList.add("active");
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
        localStorage.setItem("color_option",e.target.dataset.color);
    });
});
//switch random background
let random=document.querySelectorAll(".random span");
random.forEach(el=>{
    el.addEventListener("click",function(e){
        random.forEach(l=>l.classList.remove("active"));
        e.currentTarget.classList.add("active");
    });
});
// End Setting
// Start Landing
let landing=document.querySelector(".landing-page");
let imgArray=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg"];

setInterval(() => {
    let a=Math.floor(Math.random()*imgArray.length);
    // console.log(imgArray[a]);
     landing.style.backgroundImage='url("img/'+imgArray[a]+'")';
}, 5000);
// End Landing
// Start skills
let skills= document.querySelector(".skills");
window.onscroll=function(){
    // skills top
    let scrTop=skills.offsetTop;
    // skills height
    let scrHeight=skills.offsetHeight;
    // window height
    let winHeight=this.innerHeight;
    // window height
    let winTop=this.pageYOffset;
     if(winTop > (scrTop+scrHeight - winHeight)){
let span=document.querySelectorAll(".skill-progress span");
span.forEach(el=>{
    el.style.width=el.dataset.progress;
})
     }
}

// End skills
// Start Gallary
let imgs=document.querySelectorAll(".imgs-box img");
imgs.forEach(el=>{
    el.addEventListener("click",function(){
        let overly=document.createElement("div");
        overly.className="pop-overly";
        document.body.append(overly);

        let pop=document.createElement("div");
        pop.className="pop";

        let popImg=document.createElement("img");
        popImg.src=el.src;

        pop.append(popImg);
        document.body.append(pop);
        if(el.alt!==null){
            let head=document.createElement("h3");
            head.append(el.alt);
            pop.prepend(head);
        }
        let closeButton=document.createElement("span");
        let closeButtonText=document.createTextNode("X");
        closeButton.className="close-button";
        closeButton.append(closeButtonText);
        pop.prepend(closeButton);
       
    });
});
//close function
 document.addEventListener("click",function(e){
    if(e.target.className=="close-button"){
        e.target.parentNode.remove();
        document.querySelector(".pop-overly").remove();
    }
});
// End Gallary
// Start bullets
let bullets=document.querySelectorAll(".nav-bullets .bullet");

scroll(bullets);
// End bullets
//Start header
let links=document.querySelectorAll("header .links li");
scroll(links);
let men=document.querySelector("header .links");
let ic=document.querySelector("header i");
let icAfter=document.querySelector("header i");

ic.addEventListener("click",(e)=>{
    men.classList.toggle("open");
    icAfter.classList.toggle("icon");
});
document.onclick=function(e){
    if(e.target!==ic && e.target!==men){
    if(men.classList.contains("open")){
      men.classList.toggle("open");
      icAfter.classList.toggle("icon");
    }
}    
};
//End header
//Functions
// scrolling
function scroll(element){
element.forEach(el=>{
    el.addEventListener("click",e=>{
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        });
    });
});
};

//end functions

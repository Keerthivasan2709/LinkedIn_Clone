window.onscroll = function (e) {
    if (window.pageYOffset > 360) {
        fixed.classList.add('fixed')
    }
    else if (window.pageYOffset < 360) {
        fixed.classList.remove('fixed')
    }
     if (window.pageYOffset > 455) {
        recent.classList.add('recent-fixed')
    }
    else if (window.pageYOffset < 455) {
        recent.classList.remove('recent-fixed')
    }
}
let state=false;
Me.addEventListener("click",()=>{
    console.log(state);
    if(state){
        aboutMeSection.classList.add("hide");
        state=false;
    }
    else{
        aboutMeSection.classList.remove("hide");
        state=true;
    }
})
var meOffset=Me.getBoundingClientRect();
console.log(meOffset);
aboutMeSection.style.left=`${meOffset.x}px`
window.onscroll = function () {
    if (window.pageYOffset > 360) {
        console.log(window.pageYOffset);
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
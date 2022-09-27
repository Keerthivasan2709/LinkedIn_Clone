$("#Me").click(() => {
    console.log($("#Me"))
    a = $("#Me")[0].getBoundingClientRect();
    console.log(a);
    $('#aboutMeSection').toggle()
    $('#aboutMeSection')[0].style.left = `${a.x}px`
});
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 360) {
        $(".ads-container").addClass('fixed')
    }
    else if (window.pageYOffset < 360) {
        $(".ads-container").removeClass('fixed')
    }
})
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 455) {
        $("#recent").addClass('recent-fixed')
    }
    else if (window.pageYOffset < 455) {
        $("#recent").removeClass('recent-fixed')
    }

})
let counter=0;
$(".btn-right-arrow").click(() => {
    $(".features")[0].scrollBy(600, 0)
    // checkCounter(counter);

})

$(".btn-left-arrow").click(() => {
    $(".features")[0].scrollBy(-600, 0)
    // counter--;
    // checkCounter(counter)
})
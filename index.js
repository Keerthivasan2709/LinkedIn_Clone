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

let scroll=window.innerHeight<768?300:600;


$(".btn-right-arrow").click(() => {
    $(".features")[0].scrollBy(scroll, 0)
})

$(".btn-left-arrow").click(() => {
    $(".features")[0].scrollBy(-scroll, 0)
})
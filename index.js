$(document).ready(() => {
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
    let width=$(".feature").outerWidth();
    console.log(width)
    $('.btn-left-arrow').hide();
    $(".btn-right-arrow").click(() => {
        $(".features")[0].scrollBy(width*1, 0)
    })

    $(".btn-left-arrow").click(() => {
        $(".features")[0].scrollBy(-width*1, 0)
    })
    $('.features').scroll((e)=>{
        if($('.features').scrollLeft()>=50){
            $('.btn-left-arrow').show();
        }
        else{
            $('.btn-left-arrow').hide();   
        }
    })
});
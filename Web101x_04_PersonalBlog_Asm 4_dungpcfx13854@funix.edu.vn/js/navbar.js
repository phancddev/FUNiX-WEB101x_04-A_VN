// if (window.innerWidth <= 991) {
// $(document).mouseup(function(e) {

//     $(e.target).closest(".navbar");
//     if ($(e.target).closest(".navbar").length === 0) {
//         // console.log(e.target);
//         $(".navbar-nav").hide();
//     } else {
//         $(".navbar-nav").show();
//     }
// });
// // }
// console.log(window.innerWidth);

$(document).click(function(e) {
    if ($(e.target).closest('.navbar').length == 0) {
        console.log("Click ngoai");
        //xoa class show cho id navbarNavDropdown
        if ($('#navbarNavDropdown').hasClass('show'))
            $('#navbarNavDropdown').removeClass('show');
    } else {
        console.log("Click trong");
    }
})
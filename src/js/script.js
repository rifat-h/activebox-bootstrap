import "../scss/bundle.scss";



window.$ = window.jQuery = require('jquery');
require('animatescroll.js');
require('popper.js');
require('bootstrap');
require('@fortawesome/fontawesome-free/js/all');


// smooth scroll
// $(function () {
//     $('.nav-link').click(function (e) {
//         e.preventDefault();
//         var thisLink = $(this).attr('href');
//         $('html, body').animate({
//             scrollTop: $(thisLink).offset().top
//         },1000);

//     });
// });

// animate scroll
// $('#a').animatescroll({element:'#service',padding:20});


console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {
    // Click event for "Download Resume" button
    $('.heroImg .text button').click(function() {
        alert('Resume download initiated!');
    });
});

$(document).ready(function() {
    // Hover event for "View Project" buttons
    $('.workDescription button').hover(
        function() {
            $(this).css('background-color', '#F4C881'); // Change color on hover
        },
        function() {
            $(this).css('background-color', '#43647C'); // Revert color on mouse leave
        }
    );
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navigation').css('background-color', '#333');
        } else {
            $('.navigation').css('background-color', 'transparent');
        }
    });
});
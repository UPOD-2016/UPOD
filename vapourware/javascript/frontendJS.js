var main = function() {
    $("#footerContent").load("footer.html"); // load footer
    $("#slideMenuContent").load("slideMenu.html"); // load slide menu    
	$("#headerContent").load("header.html"); // load header/nav-bar
	
};
$(document).ready(main);
/* using new slide menu so dont need below code
(function() {
    $("#headerContent").load("header.html", function(){
        $('.icon-menu').click(function() {
            $('.menu').animate({
                left: "0px"
            }, 200);

            $('body').animate({
                left: "285px"
            }, 200);
            console.log("hello");
        });

        $('.icon-close').click(function() {
            $('.menu').animate({
                left: "-285px"
            }, 200);

            $('body').animate({
                left: "0px"
            }, 200);    
        });        
    }); // load header/nav-bar
    $("#footerContent").load("footer.html"); // load footer
    $("#slideMenuContent").load("slideMenu.html"); // load slide menu
    $("#pushmenuContent").load("push-menu.html", function() {
        $('.icon-menu').click(function() {
            $('.menu').animate({
                left: "0px"
            }, 200);

            $('body').animate({
                left: "285px"
            }, 200);
        });

        $('.icon-close').click(function() {
            $('.menu').animate({
                left: "-285px"
            }, 200);

            $('body').animate({
                left: "0px"
            }, 200);    
        }); 
    }); // load push menu
})(); */

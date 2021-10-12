$(document).ready(function() {
    // this method is not recomended as it creates inline style
    // $("body").css("text-decoration", "underline")
    // good practice to use classes to style
    $("body").addClass("underline");
    $("body").addClass("border");

    $("tr:odd" ).addClass("background-red")
    $("tr:even").addClass("background-grey")
    
});

// Add event listener for input element to transform
document.getElementById("input").addEventListener("change", function() {
    let input = $('#input').val();
    let hashedInput = createMD5Hash(input);
    $('#output').val(hashedInput);
});

$(document).ready(function() {
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
});

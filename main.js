
// Add event listener for input element to transform
document.getElementById("input").addEventListener("change", function() {
    var input = $('#input').val();
    var hashedInput = createMD5Hash(input);
    $('#output').val(hashedInput);
});

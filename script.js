// runs when the webpage fully loads 
window.onload = function(){

//shows welcome popup message 
alert("Welcome to my NCC Journey website");

};
//function to scroll to about section
function scrollContent(){

document.getElementById("about").scrollIntoView({
behavior:"smooth" //smooth scrooling 
});

}
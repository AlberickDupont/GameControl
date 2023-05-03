let burger = document.querySelector('.burger');
let spanmid = document.querySelector('.milieux');

burger.addEventListener("mouseover", function (){
    spanmid.style.width="35px";
});
burger.addEventListener("mouseleave", function (){
    spanmid.style.width="20px";
});
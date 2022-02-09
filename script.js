const button = document.querySelector('.main-button');

button.addEventListener("mouseover", function (event){
    let target = event.target.style.backgroundColor = "rgb(107, 125, 59)";
    target = event.target.style.color = "rgb(239, 255, 224)";
});
button.addEventListener("mouseout", function (event){
    target = event.target.style.backgroundColor = "rgb(239, 255, 224)";
    target = event.target.style.color = "rgb(107, 125, 59)";
});

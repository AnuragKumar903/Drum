var arr = document.querySelectorAll(".drum");
var len = arr.length;

for(var i=0; i < len; i++){
    arr[i].addEventListener("click", function(){
        var btnInnerHtml = this.innerHTML;
        
        makeSound(btnInnerHtml);
        buttonAnimation(btnInnerHtml);
    });
}

document.addEventListener("keypress", function(Event){
    var btnInnerHtml = Event.key;

    makeSound(btnInnerHtml);  
    buttonAnimation(btnInnerHtml);  
})

function makeSound(key){

    switch(key){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("../sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("../sounds/snare.mp3");
            snare.play();
            break;

        default: console.log(btnInnerHtml);

    }
}

function buttonAnimation(currentKey){
    var key = document.querySelector("." + currentKey);
    key.classList.add("pressed");
    setTimeout(function(){
        key.classList.remove("pressed");
    }, 100);
}


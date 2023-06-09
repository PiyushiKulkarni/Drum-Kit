//detecting button clicks

for(var i=0; i<7 ; i++ ){
    // var clickedbtn = document.querySelectorAll(".drum")[i]
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

}    

function handleClick(){
    var btn=this.innerHTML;
    makeSound(btn);
    buttonAnimation(btn);
}

//detecting keyboard press
    document.addEventListener("keypress",function(event){
    makeSound(event.key);//event here is just a variable
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w": 
            var audio = new Audio('crash.mp3');
            audio.play();
        break;
        case "a": 
            var audio = new Audio('kick-bass.mp3');
            audio.play();
        break;
        case "s":
             var audio = new Audio('snare.mp3');
            audio.play();
        break;
        case "d": 
            var audio = new Audio('tom-1.mp3');
            audio.play();
        break;
        case "j":
            var audio = new Audio('tom-2.mp3');
            audio.play();
        break;
        case "k":  
            var audio = new Audio('tom-3.mp3');
            audio.play();
        break;
        case "l": 
            var audio = new Audio('tom-4.mp3');
            audio.play();
        break;
        }
}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function() {
    activeButton.classList.remove("pressed");
   }, 100);
}

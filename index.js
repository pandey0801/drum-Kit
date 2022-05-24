//alert("hello");
/*
If you save the JS file with UTF-8, then you must declare charset="UTF-8" 
in the <script> tag of the HTML file. Otherwise, most browsers will decode 
the JS file as ISO 8859-1,which does not include Arabic characters.*/

/* eventLins
Attach a click event to the document.
 When the user clicks botton in the document, output will come */
 //document.querySelector(".w").addEventListener("click",
 

 //detecting button press using mouse
 var number =  document.querySelectorAll(".drum").length;
 for (let i = 0; i < number; i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",
function handleCLick(){
    var buttonInnerHTML = this.innerHTML;  //thid refer to document.querySelectorAll(".drum")[i]  console.log(buttonInnerHTML);
    makesound(buttonInnerHTML);            // function to call switch event by passing buttonInnnerHTHL value
    bottonAnimation(buttonInnerHTML);
}
);
}  

//detscting keyboard press 
document.addEventListener('keypress',function(event){
    console.log(event);
    var keyname = (event.key)
    console.log(event.key)
    makesound(keyname); //function calling name makesound with keyname parmeter
    bottonAnimation(keyname);
    }
);

//function makesound with parameter key(keyname/buttonInnerHTML) will play the according the buttonclick
//with using switch case to indentifire diffrent key 
function makesound(key){
    switch(key){
        case"w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case"a":
        var tom1 = new Audio('sounds/tom-2.mp3');
        tom1.play();
        break;

        case"s":
        var tom1 = new Audio('sounds/tom-3.mp3');
        tom1.play();
        break;

        case"d":
        var tom1 = new Audio('sounds/tom-4.mp3');
        tom1.play();
        break;

        case"j":
        var tom1 = new Audio('sounds/crash.mp3');
        tom1.play();
        break;

        case"k":
        var tom1 = new Audio('sounds/kick-bass.mp3');
        tom1.play();
        break;

        case"l":
        var tom1 = new Audio('sounds/snare.mp3');
        tom1.play();
        break;

        default:console.log(key);
        break;



    }    
}

//function bottonAnimation 
function bottonAnimation(key)
{
   var activeButoon =  document.querySelector('.'+key);
   console.log(activeButoon);
   activeButoon.classList.add('pressed');
   setTimeout(() => {
       activeButoon.classList.remove('pressed');
   },100 );
}    


 
var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
	.addEventListener("click", function() {
	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}
document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
    });
    function sound(key) {
        switch (key) {
            case "A":
            var sound1 = new Audio("Rolex - Bgm ! Tamil.mp3");
            sound1.play();
            break;
        
            case "S":
            var sound2 = new Audio("Vijay Songs New Varisu - Ranjithame ! Tamil.mp3");
            sound2.play();
            break;
        
            case "D":
            var sound3 = new Audio('Ennai Vittu - Love Today ! Tamil Songs.mp3');
            sound3.play();
            break;
        
            case "F":
            var sound4 = new Audio('Rolex - Bgm ! Tamil.mp3');
            sound4.play();
            break;
        
            case "G":
            var sound5 = new Audio('Vijay Songs New Varisu - Ranjithame ! Tamil.mp3');
            sound5.play();
            break;
        
            case "H":
            var sound6 = new Audio('Ennai Vittu - Love Today ! Tamil Songs.mp3');
            sound6.play();
            break;
        
            case "J":
            var sound7 = new Audio('Rolex - Bgm ! Tamil.mp3');
            sound7.play();
            break;
            
            case "K":
                var sound7 = new Audio('Vijay Songs New Varisu - Ranjithame ! Tamil.mp3');
                sound7.play();
                break;
        
            default: console.log(key);
        }
        }
            
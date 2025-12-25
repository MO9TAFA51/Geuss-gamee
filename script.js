let random_number = Math.floor(Math.random() * 11);

function game() {
    let user_input = document.getElementById('userInput').value;
    
    let result = document.getElementById('message');

    

    if (user_input < random_number) {
        result.innerText = "Try a larger number 🥴";
        result.style.color = "red";
    } 
    else if (user_input > random_number) {
        result.innerText = "Try a smaller number 🥴";
        result.style.color = "red";
    } 
    else if (user_input == random_number){
        result.innerText = "Congratulations, you have won!🎉😍";
        result.style.color = "green"; 
    }
}

   

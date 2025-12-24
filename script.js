let random_number = Math.floor(Math.random() * 11);

function game() {
    let user_input = document.getElementById('userInput').value;
    
    let result = document.getElementById('message');

    if (document.getElementById('userInput').value == "") {
        result.innerText = "الرجاء إدخال رقم أولاً!";
        result.style.color = "orange";
        return;
    }

    if (user_input < random_number) {
        result.innerText = "الرقم صغير جداً! حاول مرة أخرى.";
        result.style.color = "red";
    } 
    else if (user_input > random_number) {
        result.innerText = "الرقم كبير جداً! حاول مرة أخرى.";
        result.style.color = "red";
    } 
    else if (user_input == random_number){
        result.innerText = "مبروك! الإجابة صحيحة 🎉";
        result.style.color = "green"; 
        
        return(2000);
    }
   }
const max = prompt("enter the max number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }

    if(guess == random){
        console.log("You are right! Congrates!! random no. was", random);
        break;
    }else if(guess > random){
        console.log("You guess the large number. Please guess small no.");
        guess = prompt("guess the number");
    }
    else if(guess < random){
        console.log("You guess the small number. Please guess large no.");
        guess = prompt("guess the number");
        
    }
}
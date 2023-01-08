alert("You are a wanted robber who just robbed a bank and is now trying to escape the police")

let bunker_or_farm = prompt("Do you (1) run to your bunker where you live, or do you (2) run to the farm at the edge of the city? Please type 1 for bunker and 2 for farm.")

if(bunker_or_farm == 1) {
    let stay_or_friendshouse = prompt("Do you (1) choose to stay in your own bunker and hide there, or do you (2) run to your friends house so he can help you hide?")
    if(stay_or_friendshouse == 1){
        alert("The police will find your bunker and catch you. Game Over.");
    } else {
        alert("Your friend will help you stay under cover and you will eventually escape!");
    }
} else {
    alert("As you get to the farm an hide in the barn, the farmer spots you and decides to report you to the police and you will be caught. Game Over.");
}

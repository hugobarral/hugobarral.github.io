let player_1 = "";
let player_2 = "";

function launch() {
    let selected_1 = document.getElementById("player_1");
    let selected_2 = document.getElementById("player_2");

    player_1 = selected_1.options[selected_1.selectedIndex];
    player_2 = selected_2.options[selected_2.selectedIndex];

    if (player_1 === undefined) {
        console.error("Entrer un joueur")
    } else {
        console.log(player_1);
        console.log(player_2);
    }
}
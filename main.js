function roll() {
  var player1 = Math.floor(Math.random() * 6 + 1);
  var player2 = Math.floor(Math.random() * 6 + 1);

  document.querySelector(".plr-1_dice").src = `./images/dice${player1}.png`;
  document.querySelector(".plr-2_dice").src = `./images/dice${player2}.png`;

  if (player1 > player2) {
    document.querySelector("header h2").textContent = "Player 1 Won 🏆";
    return 1;
  } else if (player1 < player2) {
    document.querySelector("header h2").textContent = "Player 2 Won 🏆";
    return 2;
  } else {
    document.querySelector("header h2").textContent = "Its a Draw 😑";
    return 0;
  }
}

addEventListener("keydown", function (e) {
    if (e.key == "d" && playerA.cooldown == false) {
        player1.setAttribute('src', "../img/player red shoot.gif");
        playerA.switchCooldown();
        setTimeout(playerA.returnPlayer, 1000);
        setTimeout(() => {
            playerA.switchCooldown()
        }, 1000)
        setTimeout(() => {
            playerA.aHitStart()
        }, 300)
    } else if (e.key == "k" && playerB.cooldown == false) {
        player2.setAttribute('src', "../img/player blue shootgif.gif")
        playerB.switchCooldown();
        setTimeout(playerB.returnPlayer, 1000);
        setTimeout(() => {
            playerB.switchCooldown()
        }, 1000)
        setTimeout(() => {
            playerB.bhitStart()
        }, 300)
    } else if (e.key == " ") {
        console.log(e.key)
        game.restartGame()
    }
})
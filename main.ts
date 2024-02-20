controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(-5)
    info.changeLifeBy(2)
})
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (info.countdown() < 3) {
        Score = 200 * info.highScore()
        info.setScore(Math.abs(Score))
    } else {
        info.changeLifeBy(-1)
    }
})
let Enemy_Attacks: Sprite = null
let Coin: Sprite = null
let Score = 0
scene.setBackgroundImage(assets.image`Freeway`)
let Player_Character = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveSprite(Player_Character, 50, 50)
Player_Character.setStayInScreen(true)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
animation.runImageAnimation(
Player_Character,
assets.animation`Mama Moving`,
150,
true
)
forever(function () {
    Coin = sprites.createProjectileFromSide(assets.image`Coin`, -90, 0)
    Coin.y = randint(15, 115)
    animation.runImageAnimation(
    Coin,
    assets.animation`Animated Coin`,
    100,
    true
    )
    pause(1000)
})
forever(function () {
    Enemy_Attacks = sprites.createProjectileFromSide(assets.image`Worm Virus`, -90, 0)
    Enemy_Attacks.y = randint(15, 115)
    Enemy_Attacks.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    Enemy_Attacks,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . a a . 
        . . . . . . . . . . . . a a a a 
        a a a . . . . . . . . a a a a a 
        1 1 a a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a . 
        1 1 a a a a a a a a a a a a . . 
        a a a . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . a 
        . . . . . . . . . . . . . a a a 
        a a a . . . . . . . . . a a a a 
        1 1 a a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a . 
        1 1 a a a a a a a a a a a a . . 
        a a a . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . a 
        a a a . . . . . . . . . . a a a 
        1 1 a a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a . 
        1 1 a a a a a a a a a . . . . . 
        a a a . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . a 
        a a a . . . . . . . . . . a a a 
        1 1 a a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a a 
        1 1 a a a a a a a a a a a a a a 
        a a a . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        a a a . . . . . . . . . . . . . 
        1 1 a a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a a 
        1 1 a a a a a a a a a a a a a a 
        a a a . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        a a a . . . . . . . . . . . . . 
        1 1 a a a a a a a a a a a a . . 
        . . 3 a a a a a a a a a a a a a 
        . . 3 a a a a a a a a a a a a a 
        1 1 a a a a a a a a a a a a a a 
        a a a . . . . . . . . . . . a . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        a a a . . . . . . . . . . . . . 
        1 1 a a a a a a a a a a a . . . 
        . . 3 a a a a a a a a a a a . . 
        . . 3 a a a a a a a a a a a a a 
        1 1 a a a a a a a a a a a a a a 
        a a a . . . . . . . . . a a a a 
        . . . . . . . . . . . . . a a a 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        a a a . . . . . . . . . . . . . 
        1 1 a a a a a a a a a a a . . . 
        . . 3 a a a a a a a a a a a . . 
        . . 3 a a a a a a a a a a a a . 
        1 1 a a a a a a a a a a a a a a 
        a a a . . . . . . . . . a a a a 
        . . . . . . . . . . . . . a a a 
        . . . . . . . . . . . . . . a a 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        a a a . . . . . . . . . . . . . 
        1 1 a a a a a a a a a a . . . . 
        . . 3 a a a a a a a a a a . . . 
        . . 3 a a a a a a a a a a a . . 
        1 1 a a a a a a a a a a a a a . 
        a a a . . . . . . . . a a a a . 
        . . . . . . . . . . . a a a a a 
        . . . . . . . . . . . . a a a a 
        . . . . . . . . . . . . . a a . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
    if (info.countdown() > 3.5) {
        pause(2100)
    }
})

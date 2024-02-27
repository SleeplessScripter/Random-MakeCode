namespace SpriteKind {
    export const Shop_Item = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Countd = info.countdown()
    info.stopCountdown()
    lif = info.life()
    Store = 1
    effects.blizzard.startScreenEffect()
    pause(1500)
    scene.setBackgroundImage(assets.image`Store Background`)
    effects.blizzard.endScreenEffect()
    Player_Character.setPosition(80, 100)
    Speed__1 = sprites.create(assets.image`Speed 1`, SpriteKind.Shop_Item)
    Speed__2 = sprites.create(assets.image`Speed 2`, SpriteKind.Shop_Item)
    Speed__2.setPosition(61, 55)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Enemy_Attacks: Sprite = null
let Coin: Sprite = null
let Speed__2: Sprite = null
let Speed__1: Sprite = null
let lif = 0
let Countd = 0
let Player_Character: Sprite = null
let Store = 0
let Level = 1
Store = 0
scene.setBackgroundImage(assets.image`Stage`)
Player_Character = sprites.create(assets.image`Operating System`, SpriteKind.Player)
Player_Character.setScale(0.5, ScaleAnchor.Middle)
controller.moveSprite(Player_Character, 50, 50)
Player_Character.setStayInScreen(true)
info.startCountdown(15)
music.play(music.createSong(assets.song`Music`), music.PlaybackMode.LoopingInBackground)
forever(function () {
    Coin = sprites.createProjectileFromSide(assets.image`Coin`, -90, 0)
    Coin.y = randint(40, 96)
    animation.runImageAnimation(
    Coin,
    assets.animation`Animated Coin`,
    100,
    true
    )
    pause(1000)
    pauseUntil(() => Store != 1)
})
forever(function () {
    Enemy_Attacks = sprites.createProjectileFromSide(assets.image`Worm Virus`, -90, 0)
    Enemy_Attacks.y = randint(40, 96)
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
    if (Level == 1) {
        pause(1500)
    } else if (Level == 2) {
        pause(1000)
    } else if (Level == 3) {
        pause(500)
    }
    pauseUntil(() => Store != 1)
})

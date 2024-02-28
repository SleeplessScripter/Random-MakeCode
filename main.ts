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
    Speed__1.setPosition(28, 55)
    Speed__2 = sprites.create(assets.image`Speed 2`, SpriteKind.Shop_Item)
    Speed__2.setPosition(60, 55)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shop_Item, function (sprite, otherSprite) {
    if (otherSprite == Speed__1 && Purchased_S1 == 0) {
        Purchased_S1 = 1
        info.changeScoreBy(-10.7)
        controller.moveSprite(Player_Character, 75, 75)
        sprites.destroy(Speed__1)
        Speed__1 = sprites.create(img`
            222............222
            2222.....2....2222
            2222222222....2222
            .222222221...2222.
            .222221111..22222.
            ..22221111..2222..
            ..1222211112222...
            ..1222221122222...
            ..1122221122221...
            ...112222222211...
            ....1222222221....
            .....12222221.....
            .......2222.......
            ...7..222222......
            ..777.2222222.....
            ...7.22222222.....
            ....22222.2222....
            ..7.22227722222...
            7772222....2222...
            7.2222277...2222..
            7.22227.7...22222.
            72222...7...72222.
            22222...7...7.2222
            22227...7...7.2222
            22277.7777...77222
            `, SpriteKind.Shop_Item)
        Speed__1.setPosition(28, 55)
    }
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
let Purchased_S1 = 0
let Player_Character: Sprite = null
let Store = 0
let Level = 1
Store = 0
scene.setBackgroundImage(assets.image`Stage`)
Player_Character = sprites.create(assets.image`Operating System`, SpriteKind.Player)
Player_Character.setScale(0.5, ScaleAnchor.Middle)
controller.moveSprite(Player_Character, 50, 50)
Player_Character.setStayInScreen(true)
Purchased_S1 = 0
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

namespace SpriteKind {
    export const Shop_Item = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (activation == 1) {
        Countermeasure = sprites.createProjectileFromSprite(assets.image`Counter Measure`, Player_Character, 90, 0)
        Countermeasure.setKind(SpriteKind.Enemy)
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    Hacker__Health += -1
})
info.onCountdownEnd(function () {
    if (Hacker__Health == 0) {
        game.setGameOverMessage(true, "You successfully beat the hacker!")
        game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
        game.gameOver(true)
    } else if (Level == 4) {
        game.setGameOverMessage(true, "You survived the attack!")
        game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
        game.gameOver(true)
    } else {
        Store = 1
        effects.blizzard.startScreenEffect()
        pause(1500)
        scene.setBackgroundImage(assets.image`Store Background`)
        effects.blizzard.endScreenEffect()
        Player_Character.setPosition(80, 110)
        Speed__1 = sprites.create(assets.image`Speed 1`, SpriteKind.Shop_Item)
        Speed__1.setPosition(30, 55)
        Speed__2 = sprites.create(assets.image`Speed 2`, SpriteKind.Shop_Item)
        Speed__2.setPosition(60, 55)
        Life__1 = sprites.create(assets.image`Heart 1`, SpriteKind.Shop_Item)
        Life__1.setPosition(90, 55)
        Life__3 = sprites.create(assets.image`Life 3`, SpriteKind.Shop_Item)
        Life__3.setPosition(120, 55)
        THE_SCRIPT = sprites.create(assets.image`THE SCRIPT`, SpriteKind.Shop_Item)
        THE_SCRIPT.setPosition(75, 86)
        exit = sprites.create(assets.image`exit`, SpriteKind.Shop_Item)
        exit.setPosition(15, 103)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "Seriously, You better beat him next time...")
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shop_Item, function (sprite, otherSprite) {
    if (otherSprite == Speed__1 && Purchased_S1 == 0) {
        Purchased_S1 = 1
        info.changeScoreBy(-10)
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
    } else if (otherSprite == Speed__2 && Purchased_S2 == 0) {
        Purchased_S2 = 1
        info.changeScoreBy(-18)
        controller.moveSprite(Player_Character, 100, 100)
        sprites.destroy(Speed__2)
        Speed__2 = sprites.create(assets.image`S2 Puc`, SpriteKind.Shop_Item)
        Speed__2.setPosition(60, 55)
    } else if (otherSprite == Life__1) {
        Player_Character.setPosition(80, 110)
        info.changeScoreBy(-5)
        info.changeLifeBy(1)
    } else if (otherSprite == Life__3) {
        Player_Character.setPosition(80, 110)
        info.changeScoreBy(-13)
        info.changeLifeBy(3)
    } else if (otherSprite == THE_SCRIPT) {
        info.changeScoreBy(-40)
        activation = 1
    } else if (otherSprite == exit) {
        Store += -1
        sprites.destroyAllSpritesOfKind(SpriteKind.Shop_Item)
        scene.setBackgroundImage(assets.image`Stage`)
        game.showLongText("You have completed this level, prepare for the next!", DialogLayout.Full)
        Level += 1
        info.startCountdown(60)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (activation == 1) {
        otherSprite.destroy()
        info.changeLifeBy(1)
    } else {
        otherSprite.destroy()
        info.changeLifeBy(-1)
    }
})
let place = 0
let Enemy_Attacks: Sprite = null
let Coin: Sprite = null
let Purchased_S2 = 0
let exit: Sprite = null
let THE_SCRIPT: Sprite = null
let Life__3: Sprite = null
let Life__1: Sprite = null
let Speed__2: Sprite = null
let Speed__1: Sprite = null
let Countermeasure: Sprite = null
let activation = 0
let Purchased_S1 = 0
let Player_Character: Sprite = null
let Store = 0
let Level = 0
let Hacker__Health = 0
game.splash("Hacker Defense", "By: Thomas Carlisle")
game.showLongText("This is my game hacker defense! Dodge the hacker and his attacks. You will go to a shop between levels, the script is the final upgrade and gives offensive capibilities.", DialogLayout.Full)
game.showLongText("You are the operating system, directly relating to my project and you must fight the hacker(s).", DialogLayout.Full)
Hacker__Health = 5
Level = 1
Store = 0
scene.setBackgroundImage(assets.image`Stage`)
Player_Character = sprites.create(assets.image`Operating System`, SpriteKind.Player)
let Hacker = sprites.create(assets.image`Hacker`, SpriteKind.Enemy)
Hacker.setPosition(150, 51)
Player_Character.setScale(0.5, ScaleAnchor.Middle)
controller.moveSprite(Player_Character, 50, 50)
Player_Character.setStayInScreen(true)
Purchased_S1 = 0
info.startCountdown(30)
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
    pause(750)
    pauseUntil(() => Store != 1)
})
forever(function () {
    Enemy_Attacks = sprites.createProjectileFromSide(assets.image`Worm Virus`, -90, 0)
    place = randint(40, 96)
    Hacker.y = place
    Enemy_Attacks.y = place
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

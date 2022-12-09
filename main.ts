input.onButtonPressed(Button.A, function () {
    m1.move(-1)
})
input.onButtonPressed(Button.B, function () {
    m1.move(1)
})
let m2: game.LedSprite = null
let m3: game.LedSprite = null
let m1: game.LedSprite = null
m1 = game.createSprite(0, 4)
game.setScore(5)
game.startCountdown(15000)
basic.forever(function () {
    m3 = game.createSprite(3, 0)
    m3.turn(Direction.Right, 90)
    basic.pause(300)
    for (let index = 0; index < 4; index++) {
        m3.move(1)
        basic.pause(300)
    }
    m3.delete()
})
basic.forever(function () {
    m2 = game.createSprite(2, 0)
    m2.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        m2.move(1)
        basic.pause(300)
    }
    m2.delete()
})
basic.forever(function () {
    if (m1.isTouching(m3)) {
        basic.showIcon(IconNames.Sad)
        game.addScore(-1)
        m1.set(LedSpriteProperty.X, 0)
    }
})
basic.forever(function () {
    if (m1.isTouching(m2)) {
        basic.showIcon(IconNames.Sad)
        game.addScore(-1)
        m1.set(LedSpriteProperty.X, 0)
    }
})
basic.forever(function () {
    if (m1.isTouching(game.createSprite(4, 4))) {
        basic.showIcon(IconNames.Happy)
        game.addScore(1)
        m1.set(LedSpriteProperty.X, 0)
    }
})

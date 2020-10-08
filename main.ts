input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        sprite.move(4)
        sprite.turn(Direction.Right, 90)
        basic.pause(500)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})

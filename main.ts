controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
let mySprite = sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . . f 6 6 f . . . . . . 
    . . . . . f 6 6 6 6 f . . . . . 
    . . . . f 6 f f f f 6 f . . . . 
    . . . f 6 f 9 9 9 9 f 6 f . . . 
    . . . f 6 f 9 9 9 9 f 6 f . . . 
    . . . f 6 f 9 9 9 9 f 6 f . . . 
    . . . f 6 f 9 9 9 9 f 6 f . . . 
    . . f 6 6 6 f f f f 6 6 6 f . . 
    . f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
    . f f f f f f f f f f f f f f . 
    . 2 4 5 5 5 5 5 5 5 5 5 5 4 2 . 
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . 2 . 2 . 2 . 2 . 2 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level`)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . f 9 9 1 1 1 1 1 f . . . 
    . . . . f 9 1 1 1 1 1 1 f . . . 
    . . . . f 1 1 1 1 1 1 1 f . . . 
    . . f f f f f f f f f f f f f . 
    . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    . f 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
    . . f f f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(23, 11)

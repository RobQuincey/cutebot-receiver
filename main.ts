function turnLeft () {
    cuteBot.motors(50, 100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x000000)
    leftled.showColor(neopixel.colors(NeoPixelColors.Green))
    rightled.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
function goForward () {
    cuteBot.motors(100, 100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}
function stop () {
    cuteBot.stopcar()
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
}
function reverse () {
    stop()
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff8000)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
    rightled.showColor(neopixel.colors(NeoPixelColors.Orange))
    leftled.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    cuteBot.moveTime(cuteBot.Direction.backward, 50, 2)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
}
function turnRight () {
    cuteBot.motors(100, 50)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x000000)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
    leftled.showColor(neopixel.colors(NeoPixelColors.Black))
    rightled.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        goForward()
    } else if (receivedString == "stop") {
        stop()
    } else if (receivedString == "left") {
        turnLeft()
    } else if (receivedString == "right") {
        turnRight()
    } else if (receivedString == "reverse") {
        reverse()
    } else {
    	
    }
})
// Set up LEDs and assign radio group
let rightled: neopixel.Strip = null
let leftled: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
leftled = strip.range(0, 1)
rightled = strip.range(1, 1)
radio.setGroup(82)
basic.showIcon(IconNames.Yes)

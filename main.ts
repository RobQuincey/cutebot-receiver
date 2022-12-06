radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        cuteBot.motors(100, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (receivedString == "stop") {
        cuteBot.stopcar()
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (receivedString == "left") {
        cuteBot.motors(50, 100)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedString == "right") {
        cuteBot.motors(100, 50)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
    	
    }
})
radio.setGroup(82)
basic.showString("READY")
basic.showIcon(IconNames.Yes)

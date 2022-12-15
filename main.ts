pins.digitalWritePin(DigitalPin.P12, 1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.showString("W")
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showString("R")
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.showString("L")
    } else {
        basic.clearScreen()
    }
})

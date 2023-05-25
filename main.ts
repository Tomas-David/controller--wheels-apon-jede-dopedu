input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(253)
})
// logo jede dopředu
// A měl by zatáčet do leva
// B měl by zatáčet do prava
// AB měl by zastavit
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(254)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(255)
})
function car_motor(lw: number = 0, rw: number = 0) {
    const ul = Math.map(lw, -100, 100, -255, 255)
    const ur = Math.map(rw, -100, 100, -215, 215)
    PCAmotor.MotorRun(PCAmotor.Motors.M1, ur)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, ul)

}
basic.forever(function () {
    radio.setGroup(20)
    radio.onReceivedNumber(function (receivedNumber) {
        if (receivedNumber === 255) {
            car_motor(receivedNumber * -1, receivedNumber - 200)
        } else if (receivedNumber === 253) {
            car_motor(0, receivedNumber - 200)
        } else if (receivedNumber === 254) {
            car_motor(receivedNumber * -1, receivedNumber - 250)
        }
        else {
            car_motor(0, 0)
        }
    })
})

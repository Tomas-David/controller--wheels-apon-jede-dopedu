

input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})


input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(200)
    
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
        if (receivedNumber > 0) {
            car_motor(receivedNumber , receivedNumber - 143)
        } else {
            car_motor(0, 0)
        }
    })
})


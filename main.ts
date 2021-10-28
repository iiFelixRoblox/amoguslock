input.onButtonPressed(Button.A, function () {
    entry = "" + entry + "A"
    music.playTone(988, music.beat(BeatFraction.Half))
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    if (password == entry) {
        pins.servoWritePin(AnalogPin.P11, 90)
        basic.showIcon(IconNames.Yes)
        music.playMelody("C C C C5 - - - - ", 350)
    } else {
        basic.showIcon(IconNames.No)
        music.playMelody("B C5 B C5 B C5 B C5 ", 500)
    }
    basic.pause(500)
    basic.clearScreen()
    entry = ""
})
input.onButtonPressed(Button.B, function () {
    entry = "" + entry + "B"
    music.playTone(988, music.beat(BeatFraction.Half))
    basic.showString("B")
})
let entry = ""
let password = ""
let someone = pins.digitalReadPin(DigitalPin.P2)
if (someone == 1) {
    basic.showString("LOCKED")
}
password = "ABAB"
entry = ""
basic.forever(function () {
    music.setVolume(255)
})

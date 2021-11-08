radio.onReceivedString(function (receivedString) {
    Move = receivedString
    basic.showString(receivedString)
})
let Move = ""
radio.setGroup(1)
basic.forever(function () {
	
})

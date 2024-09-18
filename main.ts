input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (input.temperature() < 15) {
    	
    } else if (input.temperature() > 25) {
    	
    } else {
    	
    }
    basic.showString("" + (input.temperature()))
})
basic.forever(function () {
	
})

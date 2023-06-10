// Disables all keyboard buttons. Cant use keyboard for navigating
window.addEventListener('keydown', function(e) {
	e.preventDefault();
});
var keyboardMap;
var keyboardOct1;
const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const noteNums = [1,2,3,4,5,6,7,8,9];
let octNow = 0;
let pianoMode = 0;

// oct 0
function bindingOct0() {
	octNow=0;
	keyboardMap = {
		"Tab":"C4",
		"Digit1":"C#4",
		"KeyQ":"D4",
		"Digit2":"D#4",
		"KeyW":"E4",
		"KeyE":"F4",
		"Digit4":"F#4",
		"KeyR":"G4",
		"Digit5":"G#4",
		"KeyT":"A4",
		"Digit6":"A#4",
		"KeyY":"B4",
		"KeyU":"C5",
		"Digit8":"C#5",
		"KeyI":"D5",
		"Digit9":"D#5",
		"KeyO":"E5",
		"KeyP":"F5",
		"Minus":"F#5",
		"BracketLeft":"G5",
		"Equal":"G#5",
		"BracketRight":"A5",
		"Backspace":"A#5",
		"Backslash":"B5",
	};

	// Add another keyboard bindings
	keyboardOct1 = {
		"CapsLock":"D#3",
		"ShiftLeft":"E3",
		"KeyZ":"F3",
		"KeyS":"F#3",
		"KeyX":"G3",
		"KeyD":"G#3",
		"KeyC":"A3",
		"KeyF":"A#3",
		"KeyV":"B3",
		"KeyB":"C4",
		"KeyH":"C#4",
		"KeyN":"D4",
		"KeyJ":"D#4",
		"KeyM":"E4",
		"Comma":"F4",
		"KeyL":"F#4",
		"Period":"G4",
		"Semicolon":"G#4",
		"Slash":"A4",
		"Quote":"A#4",
		"ShiftRight":"B4",
	};

	Object.assign(keyboardMap, keyboardOct1);
}




// oct 1
function bindingOct1() {
	octNow=1;
	keyboardMap = {
		"Tab":"C5",
		"Digit1":"C#5",
		"KeyQ":"D5",
		"Digit2":"D#5",
		"KeyW":"E5",
		"KeyE":"F5",
		"Digit4":"F#5",
		"KeyR":"G5",
		"Digit5":"G#5",
		"KeyT":"A5",
		"Digit6":"A#5",
		"KeyY":"B5",
		"KeyU":"C6",
		"Digit8":"C#6",
		"KeyI":"D6",
		"Digit9":"D#6",
		"KeyO":"E6",
		"KeyP":"F6",
		"Minus":"F#6",
		"BracketLeft":"G6",
		"Equal":"G#6",
		"BracketRight":"A6",
		"Backspace":"A#6",
		"Backslash":"B6",
	};

	// Add another keyboard bindings
	keyboardOct1 = {
		"CapsLock":"D#4",
		"ShiftLeft":"E4",
		"KeyZ":"F4",
		"KeyS":"F#4",
		"KeyX":"G4",
		"KeyD":"G#4",
		"KeyC":"A4",
		"KeyF":"A#4",
		"KeyV":"B4",
		"KeyB":"C5",
		"KeyH":"C#5",
		"KeyN":"D5",
		"KeyJ":"D#5",
		"KeyM":"E5",
		"Comma":"F5",
		"KeyL":"F#5",
		"Period":"G5",
		"Semicolon":"G#5",
		"Slash":"A5",
		"Quote":"A#5",
		"ShiftRight":"B5",
	};

	Object.assign(keyboardMap, keyboardOct1);
}


// another binding
function bindingOct0type1() {
	octNow=0;
	keyboardMap = {
		"Tab":"C4",
		"Digit1":"C#4",
		"KeyQ":"D4",
		"Digit2":"D#4",
		"KeyW":"E4",
		"KeyE":"F4",
		"Digit4":"F#4",
		"KeyR":"G4",
		"Digit5":"G#4",
		"KeyT":"A4",
		"Digit6":"A#4",
		"KeyY":"B4",
		"KeyU":"C5",
		"Digit8":"C#5",
		"KeyI":"D5",
		"Digit9":"D#5",
		"KeyO":"E5",
		"KeyP":"F5",
		"Minus":"F#5",
		"BracketLeft":"G5",
		"Equal":"G#5",
		"BracketRight":"A5",
		"Backspace":"A#5",
		"Backslash":"B5",
	};

	// Add another keyboard bindings
	keyboardOct1 = {
		"CapsLock":"D#2",
		"ShiftLeft":"E2",
		"KeyZ":"F2",
		"KeyS":"F#2",
		"KeyX":"G2",
		"KeyD":"G#2",
		"KeyC":"A2",
		"KeyF":"A#2",
		"KeyV":"B2",
		"KeyB":"C3",
		"KeyH":"C#3",
		"KeyN":"D3",
		"KeyJ":"D#3",
		"KeyM":"E3",
		"Comma":"F3",
		"KeyL":"F#3",
		"Period":"G3",
		"Semicolon":"G#3",
		"Slash":"A3",
		"Quote":"A#3",
		"ShiftRight":"B3",
	};

	Object.assign(keyboardMap, keyboardOct1);
}


function changePianoMode() {
	if (pianoMode == 0) {
		bindingOct0type1();
		octNow=0;
		pianoMode=1;
		document.getElementById('pianoModes').innerHTML = "Separated";
	} else if (pianoMode == 1) {
		bindingOct0();
		octNow=0;
		pianoMode=0;
		document.getElementById('pianoModes').innerHTML = "Combined";
	}
	document.getElementById('octaveMsg').innerHTML = octNow;
}
// Octave, ADSR, Mouse mapping, Keyboard mapping


// there is no built-in octave control in Tone.js
// so made own octave function
function octaveUp(limit=1) {
	if (octNow >= limit) {
		return;
	}
	let keyboardTemp = {};

	for (const prop in keyboardMap) {
		for (var i=0; i<notes.length; i++) {
			for (var j=0; j<noteNums.length; j++) {
				if (notes[i]+noteNums[j] === keyboardMap[prop]) {
					let resultn = notes[i]+(noteNums[j]+1);
					keyboardTemp[prop] = resultn;
				}
			}
		}
	}
	Object.assign(keyboardMap, keyboardTemp);
	octNow++;
	document.getElementById('octaveMsg').innerHTML = octNow;
	console.log("Octave up : "+octNow);
}

function octaveDown(limit=1) {
	if (octNow <= -limit) {
		return;
	}
	let keyboardTemp = {};

	for (const prop in keyboardMap) {
		for (var i=notes.length; i>=0; i--) {
			for (var j=noteNums.length; j>=0; j--) {
				if (notes[i]+noteNums[j] === keyboardMap[prop]) {
					let resultn = notes[i]+(noteNums[j]-1);
					keyboardTemp[prop] = resultn;
				}
			}
		}
	}
	Object.assign(keyboardMap, keyboardTemp);
	octNow--;
	document.getElementById('octaveMsg').innerHTML = octNow;
	console.log("Octave down : "+octNow);
}

// debug purpose
function zeroOct() {
	octNow=0;
	document.getElementById('octaveMsg').innerHTML = octNow;
}



// ADSR Controls
function playSample(instrument, noteName) {
	instrument.triggerAttackRelease(noteName, 2);
	setPianoDisplay(noteName);
}
function attackSmp(instrument, noteName) {
	instrument.triggerAttack(noteName);
	setPianoDisplay(noteName);
	// console.log('Note on : '+noteName1);
}
function attackSmp2(instrument, noteName1, noteName2) {
	setPianoDisplay(noteName1);
	setPianoDisplay(noteName2);
	instrument.triggerAttack([noteName1, noteName2]);
}
function releaseSmp(instrument, noteName) {
	instrument.triggerRelease(noteName);
	removePianoDisplay(noteName);
	// console.log('Note off : '+noteName2);
}



// Mouse mapping
let mouseHold = false;
let _mouseNote;
// get property-name only from object
const keyObj = Object.keys(keyboardMap);
function mouseMap(instrument) {
	document.getElementById('keyBase').addEventListener("mousedown", () => {
		mouseHold = true;
	});
	keyObj.forEach((keyName, keyNote) => {
		// first time note on
		document.getElementById(keyName).addEventListener("mousedown", () => {
			attackSmp(instrument, keyboardMap[keyName]);
			_mouseNote = keyboardMap[keyName];
		});
		
		// when mouse is dragged, do note on and off definitely
		document.getElementById(keyName).addEventListener("mouseenter", () => {
			if (mouseHold) {
				attackSmp(instrument, keyboardMap[keyName]);
				_mouseNote = keyboardMap[keyName];
			}
		});
		document.getElementById(keyName).addEventListener("mouseleave", () => {
			releaseSmp(instrument, keyboardMap[keyName]);
		});
	});
	document.getElementById('keyBase').addEventListener('mouseup', () => {
		mouseHold = false;
		releaseSmp(instrument, _mouseNote);
		// instead of releasing individual note, so kill all notes!
		instrument.releaseAll();
	});
	console.log('Mouse Mapped');
}



// Keyboard mapping

// Note on
var keysPressed = [];
var noKey=0;
let keybFin=false;
function keyboardMapping(instrument) {
	if (keybFin==true){return;}
	keybFin=true;

	window.addEventListener("keydown", e => {
		let keyVal = e.code;

		// prevent repeated keys when hold
		if (e.repeat || !(keyboardMap[keyVal])) { return; }
		var i = keysPressed.length;
		while(i--) {
			if(keysPressed[i]==keyVal) {
				return false;	
		    }
		} keysPressed.push(keyVal);

		try {
			attackSmp(instrument, keyboardMap[keyVal]);
			noKey=0;
			document.getElementById(keyVal).classList.add("keypress");
		} catch(err) {
			noKey=1;
		}
		// console.log('Online : '+keysPressed);
	});


	window.addEventListener("keyup", e => {
		let keyVal = e.code;

		if (noKey==1 || !(keyboardMap[keyVal])) { return; }
		var j = keysPressed.length;
		while(j--) {
			if(keysPressed[j]==keyVal) {
				keysPressed.splice(j, 1);
			}
		}

		releaseSmp(instrument, keyboardMap[keyVal]);
		document.getElementById(keyVal).classList.remove("keypress");
		// console.log('Online : '+keysPressed);
	});
}
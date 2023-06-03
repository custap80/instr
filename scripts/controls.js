// there is no built-in octave control in Tone.js
// so made own octave function

function octaveUp() {
	if (octNow >= 2) {
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

function octaveDown() {
	if (octNow <= -2) {
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


function zeroOct() {
	octNow=0;
	document.getElementById('octaveMsg').innerHTML = octNow;
}



// Map Piano Live-display

function displayPianoKeys(instrument) {
	piano({
		parent: document.querySelector("#content"),
		polyphonic: true,
		noteon: note => instrument.triggerAttack(note.name),
		noteoff: note => instrument.triggerRelease(note.name)
	});
}


let pianoArray;
let _arrayToken = { name:0 };

function getPianoArrayOneTime() {
	if (_arrayToken.name == 1) {return;}
	_arrayToken.name=1;
	Object.freeze(_arrayToken);

	pianoArray = document.querySelector('tone-piano').shadowRoot.querySelector('#container').querySelector('tone-keyboard').shadowRoot.querySelector('#container').querySelectorAll('tone-keyboard-octave');
};


// uhh make piano monitor, check every note recursively
function setPianoDisplay(noteName) {
	getPianoArrayOneTime();

	let getNoteMidi = Tone.Frequency(noteName).toMidi();

	for (var i=0; i<pianoArray.length; i++) {
		for (var j=0; j<2; j++) {
			let liveNote = pianoArray[i].shadowRoot.querySelector('#container').querySelectorAll('div')[j].querySelectorAll('tone-keyboard-note');

			for (var k=0; k<liveNote.length; k++) {
				if (liveNote[k].getAttribute('note') == getNoteMidi) {
					liveNote[k].shadowRoot.querySelector('#container').querySelector('button').setAttribute('active','');
				}
			}
		}
	}
}

function removePianoDisplay(noteName) {
	let getNoteMidi = Tone.Frequency(noteName).toMidi();

	for (var i=0; i<pianoArray.length; i++) {
		for (var j=0; j<2; j++) {
			let liveNote = pianoArray[i].shadowRoot.querySelector('#container').querySelectorAll('div')[j].querySelectorAll('tone-keyboard-note');

			for (var k=0; k<liveNote.length; k++) {
				if (liveNote[k].getAttribute('note') == getNoteMidi) {
					liveNote[k].shadowRoot.querySelector('#container').querySelector('button').removeAttribute('active');
				}
			}
		}
	}
}

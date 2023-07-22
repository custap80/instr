

// Map Piano Live-display

function showPianoKeys(instrument) {
	piano({
		parent: document.querySelector("#content"),
		polyphonic: true,
		noteon: note => instrument.triggerAttack(note.name),
		noteoff: note => instrument.triggerRelease(note.name)
	});
}

let pianoArray;
let _intcheck = 1;
// check highest note recursively, and set pianoArray
const pianoInterval = setInterval(function() {
	pianoArray = document.querySelector('tone-piano').shadowRoot.querySelector('#container').querySelector('tone-keyboard').shadowRoot.querySelector('#container').querySelectorAll('tone-keyboard-octave');
	_intcheck++;
	try {
		pianoArray[7].shadowRoot.querySelector('#container').querySelector('div').querySelector('tone-keyboard-note').shadowRoot.querySelector('#container').querySelector('button');
		clearInterval(pianoInterval);
		console.log('Live piano ready')
	} catch (e) {}
}, 100)



// yeah make a piano monitor, check every note recursively
function setPianoDisplay(noteName) {
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

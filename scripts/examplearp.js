// arp notes
let noteArr1 = [0,400,700,1100,0,400,700,1100,1200,1100,700,400,1200,1100,700,400];
let noteArr1sub = [0,400,700,1100,0,400,700,1100,1600,1100,700,400,1800,1100,700,400];
noteArr1 = noteArr1.concat(noteArr1sub);

let noteArr2 = [1200,1100,700,400,0,-100,-500,-800,1100,700,400,0,-100,-500,-800,-1200];
let noteArr2sub = [700,600,400,0,-100,-500,-500,-500,700,600,400,0,-100,-500,-500,-500];
noteArr2 = noteArr2.concat(noteArr2sub);

let harmonySynth = [7,10,14,22,7,10,14,22,28,22,14,10,28,22,14,10, 7,10,14,22,7,10,14,22,28,22,14,10,28,22,14,10];

let _noteBeat1 = 0;
let _noteBeat2 = 0;
let _noteBeat2hp = 0;
let _transportSet = 0;
let noteResult;


// arps with Tone.Transport - like setInterval()
Tone.Transport.scheduleRepeat(() => {


	// code for detune control arp
	synth1.set({ detune: noteArr1[_noteBeat1], });
	filter1.set({ frequency: 8000, });
	filter1.frequency.rampTo(200, "10n");
	_noteBeat1++;
	if (_noteBeat1 == 31) { _noteBeat1=0; }

	if (_noteBeat2hp == 0) {
		_noteBeat2hp=1;
	} else if (_noteBeat2hp == 1) {
		synth2.set({
			detune: noteArr2[_noteBeat2],
			oscillator: {
				harmonicity: harmonySynth[_noteBeat2],
			}
		});
		filter2.set({ frequency: 9000, });
		filter2.frequency.rampTo(400, "5n");
		_noteBeat2++;
		_noteBeat2hp=0;
	}
	if (_noteBeat2 == 31) { _noteBeat2=0; }

}, "8n");


function startArp(noteName) {
	noteResult = noteName;
	Tone.Transport.start();
}

function stopArp(noteName) {
	Tone.Transport.stop();
	_noteBeat1 = 0;
	_noteBeat2 = 0;
	_noteBeat2hp = 0;
	synth1.triggerRelease(noteName);
	synth2.triggerRelease(noteName);
}


// panic!!! debug
function killAll(){
	synth1.releaseAll();
	synth2.releaseAll();
}
// arp notes
let noteArr1 = [0,400,700,1100,0,400,700,1100,1200,1100,700,400,1200,1100,700,400];
let noteArr1sub = [0,400,700,1100,0,400,700,1100,1600,1100,700,400,1800,1100,700,400];
noteArr1 = noteArr1.concat(noteArr1sub);

let noteArr2 = [1200,1100,700,400,0,-100,-500,-800,1100,700,400,0,-100,-500,-800,-1200];
let noteArr2sub = [700,600,400,0,-100,-500,-500,-500,700,600,400,0,-100,-500,-500,-500];
noteArr2 = noteArr2.concat(noteArr2sub);

let _noteBeat1 = 0;
let _noteBeat2 = 0;
let _noteBeat2hp = 0;
let _transportSet = 0;
let noteResult;


// arps with Tone.Transport - like setInterval
Tone.Transport.scheduleRepeat(() => {

	// code for detune control arp
	if (_noteBeat1 < 32) {
		console.log(noteArr1[_noteBeat1]);
		synth1.set({ detune: noteArr1[_noteBeat1], });
		_noteBeat1++;
	} else {
		_noteBeat1=0;
	}
	// if (_noteBeat1 == 32) { _noteBeat1=0; }

	if (_noteBeat2hp == 0) {
		_noteBeat2hp=1;
	} else if (_noteBeat2 < 32 && _noteBeat2hp == 1) {
		console.log(noteArr2[_noteBeat2]);
		synth2.set({ detune: noteArr2[_noteBeat2], });
		_noteBeat2++;
		_noteBeat2hp=0;
	} else {
		_noteBeat2=0;
	}
	// if (_noteBeat2 == 32) { _noteBeat2=0; }

}, "8n");


function startArp(noteName) {
	noteResult = noteName;
	Tone.Transport.start();
	lfo.start();
	lfo2.start();
}

function stopArp(noteName) {
	lfo.stop();
	lfo2.stop();
	Tone.Transport.stop();
	_noteBeat1 = 0;
	_noteBeat2 = 0;
	_noteBeat2hp = 0;
	synth1.triggerRelease(noteName);
	synth2.triggerRelease(noteName);
}


// panic!!! debug
function killAll(){
	lfo.stop();
	lfo2.stop();
	synth1.releaseAll();
	synth2.releaseAll();
}
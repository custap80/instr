// Example whitespace song

let queued = 0;
let playLoop = 0;
let beat1 = 1;
let ref1 = 0;

function playWhitespace() {
	let ws = document.getElementById('wsbtn');
	let messages = document.getElementById('message');
	ws.setAttribute('onclick','stopWhitespace()');
	ws.innerHTML = "Stop song";
	if (playLoop==0) {
		messages.innerHTML = "Playing whitespace...";
	} else if (playLoop==1) {
		messages.innerHTML = "Repeating whitespace";
	}

	document.getElementById('wsbtnloop').style.display = "none";

	// just prevent playWhitespace() played multiple times
	if (queued == 1) { return; }
	queued=1;

	let longNote=0;
	function playBeat1(note1, note2, note3, note01, note02, note03, noteLong, longTime) {
		// make arrangement notes, would be better with midi files
		// give async cause delayed setTimeout violation, idk
		async function playBeatFun() {
			playNote(note1, 220);
			await setTimeout(async function(){
				playNote(note2, 220);
				await setTimeout(function(){
					playNote(note3, 220);
				}, 580);
			}, 580);

			if (longNote==1) {
				playNote(noteLong, longTime);
				longNote=0;
			} else {
				playNote(note01, 300);
				await setTimeout(async function(){
					playNote(note02, 300);
					await setTimeout(function(){
						playNote(note03, 300);
					}, 580);
				}, 580);
				longNote++;
			}


			// loop
			if (beat1 <= 5) {
				// if ref1 is finished, play another ref, and repeat beat
				if (beat1==4 && ref1==0) {
					// why beat=2 not beat=1? because playBeat1() already executed below
					beat1=2;
					ref1=1;
					playRef2();
				} else if (beat1 <= 4) {
					beat1++;
					playBeat1(note1, note2, note3, note01, note02, note03, noteLong, longTime);
				} else if (beat1==5 && ref1==1 && playLoop==1) {
					beat1=1;
					ref1=0;
					playRef1();
				}
			}
		}
		setTimeout(playBeatFun, 1740);
	}
	playRef1();

	function playRef1() {
		playBeat1('Digit9', 'Digit8', 'KeyU', 'KeyS', 'KeyF', 'KeyH', 'KeyL', 1700);
	}
	function playRef2() {
		playBeat1('Digit8', 'KeyE', 'Digit5', 'KeyZ', 'KeyD', 'KeyH', 'Comma', 470);
	}
	



	// sounds
	async function playNote(keyName, long) {
		attackSmp(keyboardMap[keyName]);
		document.getElementById(keyName).classList.add("keypress");
		setTimeout(function() {
			releaseSmp(keyboardMap[keyName]);
			document.getElementById(keyName).classList.remove("keypress");
		}, long);
	}

	if (playLoop==0) {
		setTimeout(function(){
			queued=0;
			stopWhitespace();
		}, 17000);
	}
}

function stopWhitespace() {
	// reset all
	playLoop=0;
	queued=0;
	beat1=1;
	ref1=0;
	document.getElementById('wsbtnloop').style.display = "inline-block";
	let ws = document.getElementById('wsbtn');
	let messages = document.getElementById('message');
	ws.setAttribute('onclick','playWhitespace()');
	ws.innerHTML = "Play Whitespace!";
	messages.innerHTML = "";


	clearKeypress();

	// kill all voices
	synth.releaseAll();


	// create dummy setTimeout, to get last id
	var ids = window.setTimeout(function() {}, 0);

	// and clear from last 'id', decreases until id = -1;
	while (ids--) {
		window.clearTimeout(ids);
	}
}


function loopWhitespace() {
	playLoop=1;
	document.getElementById('wsbtnloop').style.display = "none";
	playWhitespace();
}
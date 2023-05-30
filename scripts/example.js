// Example whitespace song

let queued = 0;
let playLoop = 0;
let beat1 = 0;
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

	// prevent playWhitespace() played multiple times
	if (queued == 1) { return; }
	queued=1;

	let longNote=0;
	async function playBeat1(note1, note2, note3, note01, note02, note03, noteLong, longTime) {
		// make arrangement notes, would be better with midi files
		// give async cause delayed setTimeout violation
		async function playBeatFun() {
			if (longNote == 0) {
				playNote2(note1, 200, note01, 280);
			} else {
				playNote1(note1, 200);
			}

			await setTimeout(async function() {
				if (longNote == 0) {
					playNote2(note2, 200, note02, 280);
				} else {
					playNote1(note2, 200);
				}

				await setTimeout(async function() {
					if (longNote == 0) {
						playNote2(note3, 200, note03, 280);
					} else {
						playNote1(note3, 200);
					}

					if (longNote==1) {
						longNote=0;
					} else {
						longNote=1;
					}
				}, 570);
			}, 570);

			if (longNote==1) { playNote1(noteLong, longTime) }
			


			// loop
			if (beat1 <= 4) {
				// if ref1 is finished, play another ref, and repeat beat
				if (beat1==3 && ref1==0) {
					// why beat=2 not beat=1? because playBeat1() already executed below
					beat1=1;
					ref1=1;
					playRef2();
				} else if (beat1 <= 3) {
					beat1++;
					playBeat1(note1, note2, note3, note01, note02, note03, noteLong, longTime);
				// if playLoop=1 so reset all ref and repeat again
				} else if (beat1==4 && ref1==1 && playLoop==1) {
					beat1=0;
					ref1=0;
					playRef1();
				}
			}
		}
		await setTimeout(playBeatFun, 1740);
	}
	playRef1();


	function playRef1() {
		playBeat1('Digit9', 'Digit8', 'KeyU', 'KeyS', 'KeyF', 'KeyH', 'KeyL', 1600);
	}
	function playRef2() {
		playBeat1('Digit8', 'KeyE', 'Digit5', 'KeyZ', 'KeyD', 'KeyH', 'Comma', 470);
	}
	



	// sounds
	async function playNote1(keyName, long) {
		attackSmp(keyboardMap[keyName]);
		document.getElementById(keyName).classList.add("keypress");
		// console.log("key : "+noteName1+" - in : "+Math.round(Date.now()));
		await setTimeout(function() {
			releaseSmp(keyboardMap[keyName]);
			document.getElementById(keyName).classList.remove("keypress");
		}, long);
	}
	async function playNote2(keyName, long, keyName2, long2) {
		attackSmp2(keyboardMap[keyName], keyboardMap[keyName2]);
		document.getElementById(keyName).classList.add("keypress");
		document.getElementById(keyName2).classList.add("keypress");
		// console.log("key : "+noteName1+" - in : "+Math.round(Date.now()));
		await setTimeout(function() {
			releaseSmp(keyboardMap[keyName]);
			document.getElementById(keyName).classList.remove("keypress");
		}, long);
		await setTimeout(function() {
			releaseSmp(keyboardMap[keyName2]);
			document.getElementById(keyName2).classList.remove("keypress");
		}, long2);
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
	beat1=0;
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


// try to leave page, stop whitespace
window.addEventListener('beforeunload', () => {
	stopWhitespace();
});
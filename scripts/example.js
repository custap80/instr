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

	// timing each notes
	let time1 = 200;
	let time2 = 280;
	let eachBeat = 580;

	async function playBeat1(note1, note2, note3, note01, note02, note03, noteLong, longTime) {
		// make arrangement notes, would be better with midi files
		// give async cause delayed setTimeout violation
		let _eachBeat=0;

		function playBeatFun() {

			function beatTime() {
				_eachBeat += eachBeat;
				return _eachBeat;
			}

			playNote2(note1, time1, note01, time2);
			setTimeout(playNote2, beatTime(), note2, time1, note02, time2);
			setTimeout(playNote2, beatTime(), note3, time1, note03, time2);
			setTimeout(playNote2, beatTime(), note1, time1, noteLong, longTime);
			setTimeout(playNote1, beatTime(), note2, time1);
			setTimeout(playNote1, beatTime(), note3, time1);
			


			// loop
			if (beat1 <= 2) {
				// if ref1 is finished, play another ref, and repeat beat
				if (beat1==1 && ref1==0) {
					// why beat=1 not beat=0? because playRef2() already executed below
					beat1=1;
					ref1=1;
					requestAnimationFrame(playRef2);
				} else if (beat1 <= 1) {
					beat1++;
					requestAnimationFrame( () => {
						playBeat1(note1, note2, note3, note01, note02, note03, noteLong, longTime);
					})
				// if playLoop=1 so reset all ref and repeat again
				} else if (beat1==2 && ref1==1 && playLoop==1) {
					beat1=0;
					ref1=0;
					requestAnimationFrame(playRef1);
				}
			}
		}
		await setTimeout(playBeatFun, (eachBeat*6));
	}
	playRef1();


	function playRef1() {
		playBeat1('Digit9', 'Digit8', 'KeyU', 'KeyS', 'KeyF', 'KeyH', 'KeyL', 1600);
	}
	function playRef2() {
		playBeat1('Digit8', 'KeyE', 'Digit5', 'KeyZ', 'KeyD', 'KeyH', 'Comma', 470);
	}
	



	// sounds
	function playNote1(keyName, long) {
		attackSmp(keyboardMap[keyName]);
		document.getElementById(keyName).classList.add("keypress");
		setTimeout(function() {
			releaseSmp(keyboardMap[keyName]);
			document.getElementById(keyName).classList.remove("keypress");
		}, long);
	}
	function playNote2(keyName, long, keyName2, long2) {
		attackSmp2(keyboardMap[keyName], keyboardMap[keyName2]);
		document.getElementById(keyName).classList.add("keypress");
		document.getElementById(keyName2).classList.add("keypress");
		setTimeout(function() {
			releaseSmp(keyboardMap[keyName]);
			document.getElementById(keyName).classList.remove("keypress");
		}, long);
		setTimeout(function() {
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
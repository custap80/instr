# Web piano
A piano player that runs using Tone.js with just keyboard. See [keyboard layout](keyboard-layout.png) for mapping guides.

[Try it](https://custap80.github.io/instr) out


## Instruments
- `Piano`: Steinway D dark, `~3MB` Total size
- `Piano Basic`: Decent light piano, `~4MB` total size
- `Square tone`: Plain square wave
- `Flute`: Filtered square wave
- `Flute wave`: Same as Flute, with detune effect
- `Pads`: Pads synth


## Development
To use this locally. I recommend to run your own server. Though you can open HTML directly (see issues).
- Clone this repo
- On windows, simply run `serve.exe` and visit `localhost:8080` on the browser.


## Issues
- If html opened directly and it makes no sound (e.g piano). That could be caused by CORS.
- Sound delay may still be a problem. So try using [chromium portable](https://github.com/custap80/cef-builds/releases), or another browser e.g firefox ESR
- Firefox still works very well. Unfortunately both `shift` key (right and left) doesn't get captured by firefox. Test keyboard from [this site](https://www.toptal.com/developers/keycode) if it works


## References
- [Tone.js](https://github.com/Tonejs/Tone.js)
- [Simple Server](https://github.com/syntaqx/serve)

# Web piano
A piano player that runs using Tone.js with just keyboard. See [keyboard layout](keyboard-layout.png) for mapping guides.

[Try it](https://custap80.github.io/instr) out


## Instruments
- `Soft piano`: Steinway D dark, `3MB` size
- `Autograph piano`: Yamaha C6 grand, `4MB` size
- `Basic piano`: Decent light piano, `4MB` size
- `Square tone`: Plain square wave

### Discontinued
- `Flute`: Filtered square wave
- `Flute wave`: Same as Flute, with detune effect
- `Pads`: Pads synth
- `Arps`: Song sequencer from vital preset


## Development
To use this locally. I recommend to run your own server. Though you can open HTML directly (see issues).
- Clone this repo
- On windows, simply run `serve.exe` and visit `localhost:8080` on the browser.
- If you have python, just use one of these python HTTP server command :
> `python -m http.server 8080`
> `python3 -m http.server 8080`

and visit `localhost:8080`


## Issues
- If html is opened directly and there is no sound (e.g piano). That could be caused by CORS.
- If sound is delayed, try using [chromium portable](https://github.com/custap80/cef-builds/releases), or another light browser e.g firefox ESR
- Tried on firefox works very well. Unfortunately both `shift` key (right and left) doesn't get captured by firefox. Test keyboard from [toptal sites](https://www.toptal.com/developers/keycode) if it works


## References
- [Tone.js](https://github.com/Tonejs/Tone.js)
- [Simple Server](https://github.com/syntaqx/serve)

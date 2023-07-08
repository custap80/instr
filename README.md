# Web piano
Just a piano player that you can play with just pc keyboard. It runs using Tone.js library. See [keyboard layout](keyboard-layout.png) for mapping guides.

[Try it](https://custap80.github.io/instr) out


## Instruments
- `Soft piano`: Steinway D dark, `3MB` size
- `Autograph piano`: Yamaha C6 grand, `4MB` size
- `Basic piano`: Decent light piano, `4MB` size
- `Maris piano`: Piano used in mari's theme
- `Square tone`: Plain square wave

### Discontinued
- `Flute`: Filtered square wave
- `Flute wave`: Same as Flute, with detune effect
- `Pads`: Pads synth
- `Arps`: Song sequencer from vital preset


## Development
To use this locally. I recommend to run your own server. Though you can open HTML directly (see issues).

### Windows
- Clone this repo
- Run `serve.exe` and visit `localhost:8080` on browser

### Linux (or any platform)
- Clone this repo
- Install python
- Run `python -m http.server 8080`
- Or if you have python3 `python3 -m http.server 8080`
- visit `localhost:8080`


## Issues
- If html is opened directly and there is no sound (e.g piano). It could be caused by CORS.
- If sound is delayed, try using [chromium portable](https://github.com/custap80/cef-builds/releases), or another light browser e.g firefox ESR
- Tried on firefox works very well. Unfortunately both `shift` key (right and left) doesn't get captured by firefox. Test keyboard from [toptal sites](https://www.toptal.com/developers/keycode) if it works


### Plans
- [ ] Migrate to JQuery
- [x] Live-display 88 piano keys (thanks to Alang for the idea)
- [x] MIDI Support


## References
- See SOURCES file for instrument sources
- [Tone.js](https://github.com/Tonejs/Tone.js)
- [Simple Server](https://github.com/syntaqx/serve)

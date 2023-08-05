# Web piano
Virtual piano that you can play with just PC keyboard.

[Just Play](https://custap80.github.io/instr)

### Features
- Live note keypress
- MIDI Support
- Volume and reverb adjustment


## Instruments

|Name|Instrument|Samples amount|
|--|--|--|
|Soft piano|Steinway D dark|~ 3mb|
|Autograph piano|Yamaha C6 grand|~ 4mb|
|Decent piano|Light piano|~ 4mb|
|Mari's piano|Piano used in mari's theme|_(oneshot)_|
|Octaved bell|Music box and bells|_(oneshot)_|
|Square tone|Plain square wave|_(synth)_|

### Deprecated
> Will not receive new features

|Name|Instrument|
|--|--|
|Flute|Filtered square wave|
|Flute wave|Same as Flute, with detune|
|Pads|Pads synth|
|Arps|Sequencer from vital preset|


## Development
Since this is just static HTML, I recommend to run on a server (see issues)

### Windows
- Run `git clone https://github.com/custap80/instr`
- Open `serve.exe` then visit `localhost:8080` on browser

### Linux (or any platform)
- Run `git clone https://github.com/custap80/instr`
- `cd instr`
- Install python `sudo apt install python3`
- Start local server `python3 -m http.server 8080`
- Finally visit `localhost:8080`


## Issues
- Samplers (not synths) may cause CORS, if HTML opened directly.
- This may use heavy resources, especially on reverb.
- Shift key doesn't work on Firefox. Test keyboard from [toptal keycode](https://www.toptal.com/developers/keycode) if it works


### Plans
- [ ] Migrate to JQuery
- [x] Live note display (thanks to `Alang` for the idea)
- [x] MIDI Support
- [x] Touch support (not advised, piano on the bottom)
- [ ] Full screen piano on mobile devices (seems to be changed)


### Notes
- No live notes display for MIDI keyboard. It would cause lags, if its enabled.
- MIDI velocity is not yet implemented, it needs to capture MIDI events


## References
- See `SOURCES` file for instrument sources
- [Tone.js](https://github.com/Tonejs/Tone.js)
- [Simple Server](https://github.com/syntaqx/serve)

# Web piano
Virtual piano that you can play with just PC keyboard. It runs on browser, also cross-platform.

[Try it](https://custap80.github.io/instr) out live. See [keyboard layout](keyboard-layout.png) for mapping guides.


# Features
- Live piano keys display
- MIDI Support
- Touch support (on live piano display)
- Volume and reverb adjustment
- PC Keyboard mode (Combined and separated)


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
> Will not receive new features, only bug fixes
|Name|Instrument|
|--|--|
|Flute|Filtered square wave|
|Flute wave|Same as Flute, with detune effect|
|Pads|Pads synth|
|Arps|Sequencer from vital preset|


## Development
To use this locally. I recommend to run your own server. Though you can open HTML directly (see issues).

### Windows
- Easily clone repo `git clone https://github.com/custap80/instr.git`
- And run `serve.exe` then visit `localhost:8080` on browser

### Linux (or any other platform)
- Clone repo `git clone https://github.com/custap80/instr.git`
- `cd instr`
- Install python `sudo apt install python3`
- Run `python3 -m http.server 8080`
- Or if you have python on windows `python -m http.server 8080`
- Finally visit `localhost:8080`


## Issues
- Samplers (not synths) may cause CORS, if HTML opened directly.
- This may use heavy graphics resources, especially on reverb. Advised to use [chromium portable](https://github.com/custap80/cef-builds/releases), Firefox ESR or SeaMonkey
- Shift key doesn't work on Firefox. Test keyboard from [toptal keycode](https://www.toptal.com/developers/keycode) if it works


### Plans
- [ ] Migrate to JQuery
- [x] Live-display 88 piano keys (thanks to `Alang` for the idea)
- [x] MIDI Support
- [x] Touch support (not advised)


## References
- See `SOURCES` file for instrument sources
- [Tone.js](https://github.com/Tonejs/Tone.js)
- [Simple Server](https://github.com/syntaqx/serve)

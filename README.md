# Web piano
Virtual piano that you can play with just PC keyboard. It runs on browser, also cross-platform.

[Try it](https://custap80.github.io/instr) out live. See [keyboard layout](keyboard-layout.png) for mapping guides.


## Instruments
- `Soft piano`: Steinway D dark, `3MB` size
- `Autograph piano`: Yamaha C6 grand, `4MB` size
- `Decent piano`: Light piano, `4MB` size
- `Maris piano`: Piano used in mari's theme
- `Octaved bell`: Music box and bells
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
- Samplers may causing CORS, if HTML opened directly.
- This uses heavy graphics resources, hence why it runs on browser engine. Advised to use [chromium portable](https://github.com/custap80/cef-builds/releases), Firefox ESR or SeaMonkey
- Shift key doesn't work on Firefox. Test keyboard from [Toptal website](https://www.toptal.com/developers/keycode) if it works


### Plans
- [ ] Migrate to JQuery
- [x] Live-display 88 piano keys (thanks to `Alang` for the idea)
- [x] MIDI Support
- [x] Touch support (not advised)


## References
- See `SOURCES` file for instrument sources
- [Tone.js](https://github.com/Tonejs/Tone.js)
- [Simple Server](https://github.com/syntaqx/serve)

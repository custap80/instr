# Web piano
A piano player that runs using Tone.js with just keyboard. See [keyboard layout](keyboard-layout.png) for mapping guides.

[Try it out](https://custap80.github.io/instr)


## Instruments
- `Piano`: Steinway D soft, `~3MB` Total size
- `Square tone`: Plain square wave
- `Flute`: Filtered square wave
- `Flute wave`: Same as Flute, with detune effect

> Instruments are referenced


## Development
To use this locally. I recommend to run your own server.
- Clone this repo
- On windows, simply run `simple-server.bat` and visit `localhost:8000` on the browser.


## Issues
- Sound delay may still be a problem. Try using [chromium portable](https://github.com/custap80/cef-builds/releases)
- Keyboard `right-shift` and `left-shift` are not captured in firefox. Test your keyboard from [this site](https://www.toptal.com/developers/keycode) if it works


## References
- [Tone.js](https://github.com/Tonejs/Tone.js)
- [Simple Server](https://github.com/TheWaWaR/simple-http-server)

# Web piano
A piano player that runs using Tone.js with just keyboard. See keyboard [layout](keyboard-layout.png)
![layout](keyboard-layout.png)

[Try it out](https://custap80.github.io/instr)

## Instruments
- `Piano`: Steinway D soft, `~3MB` Total size
- `Square tone`: Plain square wave
- `Flute`: Filtered square wave
- `Flute2`: Same as Flute, with detune

## Development
To use this locally. It needs to run your own server, not to open HTML directly. Otherwise it would cause CORS issue.
- Clone this repo
- Run `simple-server.bat`
- Open URL `localhost:8000` on the browser.

## References
- [Tone.js](https://github.com/Tonejs/Tone.js)
- [Simple Server](https://github.com/TheWaWaR/simple-http-server)

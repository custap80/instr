# Web piano
Instruments that you can play on browser with a PC keyboard.

[Play it online](https://custap80.github.io/instr)

### Features
- Live note keypress
- MIDI Support (note-event only)
- Volume and reverb adjustment
- Octave and Pitch control
- Mobile mode (limited view, experimental)


## Instruments

|Name|Instrument|Samples amount|
|--|--|--|
|Piano C|Yamaha Grand|~ 3MB|
|Piano D|Steinway Grand|~ 2MB|
|Flutes|7s Flute|~ 2MB|
|Decent piano|Light piano|~ 4MB|
|Mari's piano|Piano used in mari's theme|_(oneshot)_|
|Fog piano|Muted soft piano|~ 1MB|
|Octaved bell|Music box and bells|_(oneshot)_|
|Memories|Guitaret|~ 1MB|
|Synth tone|Oscillator Waveforms|_(synth)_|

> Deleted instrument still can be downloaded from previous releases.


## Development
This code only contains static HTML, recommended to deploy it on a localhost server (see issues #1)

- For windows, download this repository, open `serve.exe` then visit `localhost:8080` on browser
- For linux, use python3 built-in `http.server`


## Issues
1. Never try to open HTML directly (sampler-only), it will blocked by CORS.
2. Requires considerable resources. For low-end devices, try a browser with an older version.
3. Shift key doesn't work on Firefox windows. Test keyboard from [Toptal keycode](https://www.toptal.com/developers/keycode) to see if it works
4. Pitching down keyboard to C0, causing the keyboard lower keys makes no sound (midi doesn't affected)

### Chromium binaries (optional)
> This chromium desktop has no installation, very useful if you want an older version of chrome without replacing the existing installation. Not intended for daily use
- chromium windows x86 : [v85.0.4183.121](https://github.com/macchrome/winchrome/releases/download/v85.0.4183.121-r782793-Win64/Ungoogled-Chromium-85.0.4183.121-1_Win32.7z)
- chromium windows x86 : [v80.0.3987.163](https://github.com/macchrome/winchrome/releases/download/v80.0.3987.163-r722274-Win64/Ungoogled-Chromium-80.0.3987.163-Win32.7z)
- chromium linux x64 : [v85.0.4183.121](https://github.com/macchrome/linchrome/releases/download/v85.0.4183.121-r782793-portable-ungoogled-Lin64/ungoogled-chromium_85.0.4183.121_1.vaapi_linux.tar.xz)


## References
- `SOURCES` file for instrument sources list (paused for awhile)
- [Tone.js](https://github.com/Tonejs/Tone.js)
- [Simple Server](https://github.com/syntaqx/serve)
- [Chromium windows](https://github.com/macchrome/winchrome)
- [Chromium linux](https://github.com/macchrome/linchrome)

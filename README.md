# Web piano
Virtual piano that you can play on browser with a PC keyboard.

[Just Play](https://custap80.github.io/instr)

### Features
- Live note keypress
- MIDI Support
- Volume and reverb adjustment


## Instruments

|Name|Instrument|Samples amount|
|--|--|--|
|Piano C|Yamaha Grand|~ 3MB|
|Piano D|Steinway Grand|~ 2MB|
|Flutes|Long Flute 7s|~ 2MB|
|Decent piano|Light piano|~ 4MB|
|Mari's piano|Piano used in mari's theme|_(oneshot)_|
|Fog piano|Muted soft piano (bass)|~ 1MB|
|Octaved bell|Music box and bells|_(oneshot)_|
|Memories|Guitaret|~ 1MB|
|Synth tone|Oscillator Waveforms|_(synth)_|

> Deleted instrument still can be downloaded from previous releases.


## Development
Since this is just static HTML, I recommend to deploy it on a server (see issues #1)

- For windows, just download this repository, open `serve.exe` and then visit `localhost:8080` on browser
- For linux, use python3 built-in `http.server` or whatever http-server app you prefer


## Issues
1. Never try to open HTML file directly (for samplers-only) or it will be blocked by CORS.
2. Instr will use heavy resources, especially on reverb.
3. Shift key doesn't work on Firefox sometimes. Test keyboard from [toptal keycode](https://www.toptal.com/developers/keycode) if it works
4. Most major browsers starting from around v110 above, they consume more resources than it's predecessor, especially on low-end devices. If you have such device, try at least chromium v85 or v80. They should still have decent features, also lightweight.

### Chromium binaries (optional)
> This chromium has no installation. They will create a new profile. But if you have deleted chromium, the profile/history/logins still remains on chromium data folder. You need to manually remove them
- chromium windows x86 : [v85.0.4183.121](https://github.com/macchrome/winchrome/releases/download/v85.0.4183.121-r782793-Win64/Ungoogled-Chromium-85.0.4183.121-1_Win32.7z)
- chromium windows x86 : [v80.0.3987.163](https://github.com/macchrome/winchrome/releases/download/v80.0.3987.163-r722274-Win64/Ungoogled-Chromium-80.0.3987.163-Win32.7z)
- chromium linux x64 : [v85.0.4183.121](https://github.com/macchrome/linchrome/releases/download/v85.0.4183.121-r782793-portable-ungoogled-Lin64/ungoogled-chromium_85.0.4183.121_1.vaapi_linux.tar.xz)


## References
- See `SOURCES` file for list instrument sources
- [Tone.js](https://github.com/Tonejs/Tone.js)
- [Simple Server](https://github.com/syntaqx/serve)
- [Chromium windows](https://github.com/macchrome/winchrome)
- [Chromium linux](https://github.com/macchrome/linchrome)

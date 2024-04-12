### v1.40.1a
- Added : MonoSynth, with portamento

### v1.40a
- Changed : Refactor CSS mouse mapping to JS
- Added : Keyboard animations (heavy resources, demo stage)
- Added : Barline indicator accessibility (keyboard map indicator)

### v1.36b
- Added : Keyboard pitch bend feature
- Added : Experimental MOBILE mode (focused piano)
- Changed : Refactor layouts

### v1.32b
- Changed : Square tone to multiple tones (+ sine, sawtooth, triangle)

### v1.29b
- Added : Flutes
- Added : Piano D
- Added : You can set custom keyboard mapping by concat `keyboardMap` with json format
- Added : Hide/show piano toggle
- Changed : Rename real piano to Piano C
- Changed : Volume rebalance
- Changed : Remove unused keymapping

### v1.23b
- Added : Real piano
- Changed : Removing all deprecated instruments : Autograph, Soft piano, and most synth (except Square wave)

### v1.20b
- Added : Memories
- Changed : Set `lookAhead` back to `0` to reduce latencies, see README issues for more info

### v1.16
- Added : Fog piano

### v1.13
- Changed : sample volume balance
- Changed : revert back short delay by 0.1s (because of performance issues, seems to be changed)

### v1.12
- Removing reverb predelays
- Use local repo Tone.js, if there is no internet connection
- By default Tone.js adds short delay by 0.1s , so disabling `Tone.context.lookAhead = 0` will remove short delay. Use `Test buttons` for comparison
### v1.23b
- Added : Real piano
- Changed : Removing all deprecated instruments : Autograph, Soft piano, and most synth (except Square wave)

### v1.20b
- Added : Memories
- Changed : Set `lookAhead` back to `0` to reduce latencies, see README issue #4 for more info

### v1.16
- Added : Fog piano

### v1.13
- Changed : sample volume balance
- Changed : revert back short delay by 0.1s (because of performance issues, seems to be changed)

### v1.12
- Removing reverb predelays
- Use local repo Tone.js, if there is no internet connection
- By default Tone.js adds short delay by 0.1s , so disabling `Tone.context.lookAhead = 0` will remove short delay. Use `Test buttons` for comparison
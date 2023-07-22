### v1.12

- Removing reverb predelays
- Use local repo Tone.js, if there is no internet connection
- By default Tone.js adds short delay by 0.1s , so disabling `Tone.context.lookAhead = 0` will remove short delay. Use `Test buttons` for comparison
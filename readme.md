# Fin-Slang
Transforms common internet slangs into a more formal words.

```
gr8 -> great
plz -> please
imo -> in my opinion
..etc
```


## Installation

```
npm i --save fin-slang
```

## Usage

```javascript
const fin = require('finnlp');
fin.extend(require('fin-slang'));

// now when you instantiate a new input, slangs will be transformed
```


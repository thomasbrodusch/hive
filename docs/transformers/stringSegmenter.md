## `piupiu.stringSegmenter(input, granularity, lang)`
> Return a snake-cased input.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/transformers/stringSegmenter.ts)

### Since
`0.1.0`

### Arguments
`input (string)`
`granularity (SegmentGranularity = "grapheme" | "word" | "sentence")`
`lang (BCP47LangTag)`

### Returns
`(Array<string>)`: Returns an array of strings.


### Example
```javascript
piupiu.stringSegmenter('Bonjour !', 'grapheme', 'fr');
//  ["B", "o", "n", "j", "o", "u", "r", " ", "!"]
```
```javascript
piupiu.stringSegmenter('Bonjour Monsieur Martin !', 'word', 'fr');
//  ["Bonjour", "Monsieur", "Martin"]
```
```javascript
piupiu.stringSegmenter('Bonjour Madame Ambre !', 'sentence', 'fr');
//  ["Bonjour Madame Ambre !"],
```



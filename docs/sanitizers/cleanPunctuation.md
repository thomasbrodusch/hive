## `piupiu.cleanPunctuation(input)`
> Clean punctuation marks from a string.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/sanitizers/cleanPunctuation.ts)

### Since
`0.1.0`

### Arguments
`input (string)`

### Returns
`(string)`: Returns the input string without accents.


### Example
```javascript
piupiu.cleanAccent('hello, mister!'); 
// 'hello mister'
```
```javascript
piupiu.cleanAccent('hello mister');
// 'hello mister'
```



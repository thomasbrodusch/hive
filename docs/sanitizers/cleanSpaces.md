## `piupiu.cleanSpaces(input)`
> Clean spaces from a string.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/sanitizers/cleanSpaces.ts)

### Since
`0.1.0`

### Arguments
`input (string)`

### Returns
`(string)`: Returns the input string without spaces.


### Example
```javascript
piupiu.cleanAccent('n o m  o re   sp a c   e s'); 
// 'nomorespaces'
```
```javascript
piupiu.cleanAccent('space');
// 'space'
```



## `piupiu.cleanAccents(input)`
> Clean accents from a string.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/sanitizers/cleanAccents.ts)

### Since 
`0.1.0`

### Arguments
`input (string)`

### Returns
`(string)`: Returns the input string without accents.


### Example
```javascript
piupiu.cleanAccent('héëllôö'); 
// 'heelloo'
```
```javascript
piupiu.cleanAccent('heelloo');
// 'heelloo'
```



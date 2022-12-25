## `piupiu.snakeCase(input)`
> Return a snake-cased input.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/transformers/snakeCase.ts)

### Since
`0.1.0`

### Arguments
`input (string)`

### Returns
`(string)`: Returns snake-cased input.


### Example
```javascript
piupiu.snakeCase('Toto'); 
// 'toto'
```
```javascript
piupiu.camelCase('ToTo'); 
// 'to_to'
```
```javascript
piupiu.camelCase('to To'); 
// 'to_to'
```
```javascript
piupiu.camelCase(0); 
// undefined'
```
```javascript
piupiu.camelCase(null); 
// undefined'
```



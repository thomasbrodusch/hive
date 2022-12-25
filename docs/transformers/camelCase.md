## `piupiu.camelCase(input)`
> Return a camelCased input.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/transformers/camelCase.ts)

### Since
`0.1.0`

### Arguments
`input (string)`

### Returns
`(string)`: Returns camelCased input.


### Example
```javascript
piupiu.camelCase('im a string'); 
// 'imAString'
```
```javascript
piupiu.camelCase('imastring'); 
// 'imastring'
```
```javascript
piupiu.camelCase('Im a String'); 
// 'imAString'
```
```javascript
piupiu.camelCase(0); 
// undefined'
```
```javascript
piupiu.camelCase(null); 
// undefined'
```



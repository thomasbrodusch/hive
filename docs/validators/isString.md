## `piupiu.isString(input)`
> Return true if input is a String. 
> If not, return false.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/validators/isString.ts)

### Since
`0.1.0`

### Arguments
`input (any)`

### Returns
`(boolean)`: Returns `true` if the input is a `String`.


### Example
```javascript
piupiu.isString('im a string'); 
// true
```
```javascript
piupiu.isString(0);
// false
```
```javascript
piupiu.isString(undefined);
// false
```
```javascript
piupiu.isString({});
// false
```
```javascript
piupiu.isString([]);
// false
```
```javascript
piupiu.isString(NaN);
// false
```



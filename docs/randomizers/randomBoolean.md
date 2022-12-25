## `piupiu.RandomBoolean: MockFactory<Boolean>`
> Return a random number / array of numbers.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/randomizers/randomBoolean.ts)

### Since
`0.1.0`

### Description
`piupiu.RandomBoolean: MockFactory<Boolean>`

### Arguments
#### `.getOne({ options?: {truthyThreshold?: number = 0.5})`
> `(boolean)`: Returns a random boolean.
#### `.getArray({ length?: number, options?: {truthyThreshold?: number = 0.5})`
>`(boolean[])`: Returns an `Array` of random booleans.



### Example
```javascript
piupiu.RandomBoolean.getOne(); 
// true | false
```
```javascript
piupiu.RandomBoolean.getOne({
    options: {
        truthyThreshold: 1
    }
}); 
// true
```
```javascript
piupiu.RandomBoolean.getOne({
    options: {
        truthyThreshold: 0
    }
}); 
// false
```
```javascript
piupiu.RandomBoolean.getOne({
    options: {
        truthyThreshold: 0.5
    }
}); 
// true | false
```

```javascript
piupiu.RandomBoolean.getOne({
    options: {
        max: 5
    }
}); 
// [false]
```
```javascript
piupiu.RandomBoolean.getOne({
    options: {
        min:2,
        max: 5
    }
}); 
// [false, true]
```
```javascript
piupiu.RandomBoolean.getArray(); 
// [false, true]
```
```javascript
piupiu.RandomBoolean.getArray({
    length: 3
}); 
// [false, false, true]
```

```javascript
piupiu.RandomBoolean.getArray({
    length: 2,
    options: {
        truthyThreshold: 1
    }
}); 
// [true, true]
```
```javascript
piupiu.RandomBoolean.getArray({
    length: 4,
    options: {
        truthyThreshold: 0
    }
}); 
// [false, false, false, false]
```


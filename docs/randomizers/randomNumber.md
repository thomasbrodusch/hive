## `piupiu.RandomNumber: MockFactory<String>`
> Return a random number / array of numbers.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/randomizers/randomNumber.ts)

### Since
`0.1.0`

### Description
`piupiu.RandomNumber: MockFactory<Number>`

### Arguments
#### `.getOne({ options: {min: number, max: number})`
> `(number)`: Returns a random number.
#### `.getArray({ length?: number, options?: {min?: number, max?: number})`
>`(number[])`: Returns an `Array` of random number.



### Example
```javascript
piupiu.RandomNumber.getOne(); 
// 12
```
```javascript
piupiu.RandomNumber.getOne({
    options: {
        min: 10
    }
}); 
// 42
```
```javascript
piupiu.RandomNumber.getOne({
    options: {
        max: 5
    }
}); 
// 3
```
```javascript
piupiu.RandomNumber.getOne({
    options: {
        min:2,
        max: 5
    }
}); 
// 4
```

```javascript
piupiu.RandomNumber.getArray(); 
// [244, 10]
```
```javascript
piupiu.RandomNumber.getArray({
    length: 3
}); 
// [23, 100, 76]
```

```javascript
piupiu.RandomNumber.getArray({
    length: 2,
    options: {
        min: 10
    }
}); 
// [23, 11]
```


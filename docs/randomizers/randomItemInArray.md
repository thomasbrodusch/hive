## `piupiu.RandomItemInArray: MockFactory<any>`
> Return a random item / array of items from an input array.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/randomizers/randomItemInArray.ts)

### Since
`0.1.0`

### Description
`piupiu.RandomItemInArray: MockFactory<any>`

### Arguments
#### `.getOne({ options?: {array?: any[]})`
> `(boolean)`: Returns a random item from input array.
#### `.getArray({ length?: number, options?: {array?: any[]})`
>`(boolean[])`: Returns an `Array` of random items from input array.



### Example
```javascript
piupiu.RandomItemInArray.getOne(); 
// undefined
```
```javascript
piupiu.RandomItemInArray.getOne({
    options: {
        array: [1, 2, 3, 4]
    }
});
// 3
```
```javascript
piupiu.RandomItemInArray.getArray({
    length: 2,
    options: {
        array: [1, 2, 3, 4]
    }
}); 
// [1, 3]
```

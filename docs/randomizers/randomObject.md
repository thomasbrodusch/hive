## `piupiu.RandomObject: MockFactory<Object>`
> Return a random Object / array of Object.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/randomizers/randomObject.ts)

### Since
`0.1.0`

### Description
`piupiu.RandomObject: MockFactory<Object>`

### Arguments
#### `.getOne({ options?: {propCount?: number = 5})`
> `(boolean)`: Returns a random Object.
#### `.getArray({ length?: number, options?: {propCount?: number = 5})`
>`(boolean[])`: Returns an `Array` of random Objects.



### Example
```javascript
piupiu.RandomObject.getOne(); 
// {
//      field0_true: 'toefwf34',
//      field1_false: 134,
//      field2_true: false,
//      field3_true: true',
//      field4_true: 'edd'
// }
```
```javascript
piupiu.RandomObject.getOne({
    options: {
        propCount: 1
    }
});
// {
//      field0_true: 'toefwf34',
// }
```

```javascript
piupiu.RandomObject.getArray({
    length: 2,
    options: {
        propCount: 1
    }
}); 
// [
//      {
//          field0_true: 'toefwf34',
//      },
//      {
//          field0_false: 123',
//      }
//]
```

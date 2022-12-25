## `piupiu.RandomString: MockFactory<String>`
> Return a random string / array of strings.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/randomizers/randomString.ts)

### Since
`0.1.0`

### Description
`piupiu.RandomString: MockFactory<String>`

### Arguments
#### `.getOne({ options: {min: number, max: number})`
> `(string)`: Returns a random string.
#### `.getArray({ length?: number, options?: {min?: number, max?: number})`
>`(string[])`: Returns an `Array` of random string.



### Example
```javascript
piupiu.RandomString.getOne(); 
// 'e23sDwe'
```
```javascript
piupiu.RandomString.getOne({
    options: {
        min: 10
    }
}); 
// 'Df3dunWQ343E'
```
```javascript
piupiu.RandomString.getOne({
    options: {
        max: 5
    }
}); 
// 'oke'
```
```javascript
piupiu.RandomString.getOne({
    options: {
        min:2,
        max: 5
    }
}); 
// 'dE4d'
```

```javascript
piupiu.RandomString.getArray(); 
// ['e23sDwe', 'eineE3']
```
```javascript
piupiu.RandomString.getArray({
    length: 3
}); 
// ['e23sDwe', 'eineE3', 'ei']
```

```javascript
piupiu.RandomString.getArray({
    length: 2,
    options: {
        min: 10
    }
}); 
// ['Df3dunWQ343E', 'eDer3dgE2e']
```


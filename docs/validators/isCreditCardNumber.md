## `piupiu.isCreditCardNumber(input)`
> Return true if input is a valid credit card number.
> If not, return false.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/validators/isCreditCardNumber.ts)


### Description
We perform some basic checks, input string :
- must contains only **numeric value** ;
- is of **between 13 and 19 digits** ;
- And finally perform a [luhn check](https://en.wikipedia.org/wiki/Luhn_algorithm) to ensure that the credit card number is a valid one.

### Since
`0.1.0`

### Arguments
`input (string)`

### Returns
`(boolean)`: Returns `true` if the input is a valid credit card number.


### Example
```javascript
piupiu.isCreditCardNumber('4816089253950827'); 
// true
```
```javascript
piupiu.isCreditCardNumber('4816 0892 5395 0827'); 
// false
```
```javascript
piupiu.isCreditCardNumber('qededq');
// false
```
```javascript
piupiu.isCreditCardNumber(0);
// false
```
```javascript
piupiu.isCreditCardNumber(undefined);
// false
```
```javascript
piupiu.isCreditCardNumber({});
// false
```
```javascript
piupiu.isCreditCardNumber([]);
// false
```
```javascript
piupiu.isCreditCardNumber(NaN);
// false
```



## `piupiu.isValidCreditCard(input)`
> Return true if input is a valid credit card number.
> If not, return false.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/checkers/isValidCreditCard.ts)


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
piupiu.isValidCreditCard('4816089253950827'); 
// true
```
```javascript
piupiu.isValidCreditCard('4816 0892 5395 0827'); 
// false
```
```javascript
piupiu.isValidCreditCard('qededq');
// false
```
```javascript
piupiu.isValidCreditCard(0);
// false
```
```javascript
piupiu.isValidCreditCard(undefined);
// false
```
```javascript
piupiu.isValidCreditCard({});
// false
```
```javascript
piupiu.isValidCreditCard([]);
// false
```
```javascript
piupiu.isValidCreditCard(NaN);
// false
```



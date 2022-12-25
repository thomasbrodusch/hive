## `piupiu.isValidEmail(input)`
> Return true if input is a valid email.
> If not, return false.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/checkers/isValidEmail.ts)

### Description
- We use a regex advertised as "practical" and covering 99.99% of cases - [See More](https://www.regular-expressions.info/email.html)
- We don't use the same regex as `async-validator`, because it allows accents: [GitHub Source](https://github.com/yiminghe/async-validator/blob/e5ca7cfd912837d1dd1910fb584b8c7c7ed5b3e9/src/rule/type.ts)
- `RFC 822`, `2821`, `2822`, `5322` only accept ASCII letters.

### Since
`0.1.0`

### Arguments
`input (string)`

### Returns
`(boolean)`: Returns `true` if the input is a valid email.


### Example
```javascript
piupiu.isValidEmail('toto@toto.com'); 
// true
```
```javascript
piupiu.isValidEmail('toto@toto');
// false
```
```javascript
piupiu.isValidEmail('_=0-34-;3@toto.com');
// false
```
```javascript
piupiu.isValidEmail(0);
// false
```
```javascript
piupiu.isValidEmail(undefined);
// false
```
```javascript
piupiu.isValidEmail({});
// false
```
```javascript
piupiu.isValidEmail([]);
// false
```
```javascript
piupiu.isValidEmail(NaN);
// false
```



## `piupiu.formatJapaneseUnicode(input)`
> Return a snake-cased input.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/transformers/formatJapaneseUnicode.ts)


### Description
Japanese unicode can introduce some error, especially if you work with string and parsing.

For instance, string-numbers can appear exactly similar but aren't: this are totally different unicode codes:
```javascript
//Japanese number Unicode
"０１２３４５６７８９"

//Universal number Unicode:
"0123456789"
````

> You can see that `０` != `0` and also that any characters have some "left and right spaces".
> 
> The main goal of this function is to transform any Japanese unicode `０１２３４５６７８９` to `0123456789` 

### Since
`0.1.0`

### Arguments
`input (string)`

### Returns
`(string)`: Returns classic unicode number


### Example
```javascript
piupiu.formatJapaneseUnicode('０'); 
// '0'
```

```javascript
piupiu.formatJapaneseUnicode("１９９２年１０月２６日"); 
// '1992年10月26日'
```
```javascript
piupiu.formatJapaneseUnicode('ToTo'); 
// 'ToTo'
```
```javascript
piupiu.formatJapaneseUnicode(null); 
// undefined
```




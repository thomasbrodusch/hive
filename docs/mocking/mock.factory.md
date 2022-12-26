## `piupiu.MockFactory`
> Return a random item / array of items from an input array.

[Source](https://github.com/thomasbrodusch/piupiu/blob/develop/src/mocking/mock.factory.ts)

### Since
`0.1.0`

### Description
Generate some mock of any data type on the fly.

### Arguments
#### `.getOne({ options?: Object; override?: Object;})`
> `(boolean)`: Returns a call from generatorFn.
#### `.getArray({ length?: number, options?: Object; overrides?: Object[]})`
>`(boolean[])`: Returns an `Array` of N times `generatorFn` calls.

### Usage
1. Define some types and an `User` class definition:
```javascript
interface UserMockInterface {
    id: string;
    fullName: string;
    isActive: boolean;
}
```
```javascript
type UserMockType = {
    id: string;
    fullName: string;
    email: string;
    isActive: boolean;
    sayMyName: () => string;
};
```
```javascript
class User implements UserMockType {
    id: string;
    fullName: string;
    email: string;
    isActive: boolean;

    constructor(model: UserMockInterface) {
        this.id = model.id;
        this.fullName = model.fullName;
        this.email = `${this.fullName}@hello.com`;
    }

    sayMyName(): string {
        return `Say my name, say my naaaame... ${this.fullName}`;
    }
}
```

2. Implements `MockFactory` coupled with some randomizers like [piupiu.RandomString](randomizers/randomString.md) & [piupiu.RandomBoolean](randomizers/randomBoolean.md) to generate some fake users
```javascript
const userMockGenerator = new MockFactory<UserMockType>(({ options = {}, override = {} }) => {
    return new User({
      id: RandomString.getOne(),
      fullName: RandomString.getOne(),
      isActive: RandomBoolean.getOne(),
      ...override,
    });
  });
```

### Example 
#### Get one faked `User`
```javascript
    const user = new userMockGenerator.getOne()
    console.log(user.sayMyName()) // "Say my name, say my naaaame... Erdf"
```

#### Get one faked `User` and override it
```javascript
    const user = new userMockGenerator.getOne({
    override: {
        fullName: "Aaron Swartz"
    }
})
    console.log(user.sayMyName()) // "Say my name, say my naaaame... Aaron Swartz"
```

#### Get multiple faked `User`
```javascript
    const users = new userMockGenerator.getArray({ length: 2})
    console.log(users) 
// [
//  {
//      id: 'wef3', 
//      fullName: 'wdWE',
//      isActive: true,
//  },
//  {
//     id: 'dub243ub',
//     fullName: 'qedqe',
//     isActive: true,
//  }
```

#### Get multiple faked `User` and override one
```javascript
    const users = new userMockGenerator.getArray({ 
        length: 2,
        overrides: [
            {}, // no override on the first user
            { fullName: 'Aaron Swartz' } //override second user
            
        ]
    })
    console.log(users) 
// [
//  {
//      id: 'wef3', 
//      fullName: 'wdWE',
//      isActive: true,
//  },
//  {
//     id: 'dub243ub',
//     fullName: 'Aaron Swartz',
//     isActive: true,
//  }
```


# spreading

A spread module

## Install

```
yarn add spreading
```

## Description

This module will perform spread operations.

You can:
- Combine objects
- Get the key value from the combined objects
- ...and more...in the future!

A work-in-progress module.

Built by: [Mario Lo](https://github.com/mariolo1985)


## Example

```javascript
import {
    spreading,
    getKey
} from 'spreading';


(() => {
    const combine1 = {
        a: 1,
        b: 2,
        c: 3
    };

    const combine2 = {
        c: 4,
        d: 5
    };

    const combine3 = {
        d: 6,
        e: 7,
        f: 8
    };

    const spreadinged = spreading(combine1, combine2, combine3);
    console.log(spreadinged);
    // Object { a: 1, b: 2, c: 4, d: 6, e: 7, f: 8 }

    const getKeyed = getKey('d', combine1, combine2, combine3);
    console.log(getKeyed);
    // 6
})();
```

## Functions

### spreading

Combines multiple objects

> Returns an object

### getKey

Combines multiple objects and returns the value of the key

> Returns the key value if found
> Returns null if not found

## Parameters
```javascript
spreading(target[, source, source, ...etc]);
getKey(key, target[, source, source, ...etc])
```

| Parameter Name   | Type   | Required   | Default Value   | Description   |
| --- | --- | --- | --- | --- |
| target | object | true | null | Main object that will perform operations on |
| source | object | true | null | An object that will combine with the target |
| key | string | true | null | A key to locate in the source object(s) |

## Contributing

Please open a new issue and mention me to get the ball rolling. Thanks!

## Future Features

- Ability to handle multiple elements

## Feature Request

Please message hello@websitesbymario.com for feature requests.

## Bug Report

Please message hello@websitesbymario.com to report bugs.

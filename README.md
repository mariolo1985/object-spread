# spreading

A spread operation module

## Install

```
yarn add spreading
```

## Description

This module will perform spread operations

You can:
- Combine objects
- ...more!

A work-in-progress module.

Built by: [Mario Lo](https://github.com/mariolo1985)


## Example

```javascript
import {
    spreader,
    spreading
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

    const spreadered = spreader(combine1, combine2);
    // Object { a: 1, b: 2, c: 4, d: 5 }

    const spreadinged = spreading(combine1, combine2, combine3);
    // Object { a: 1, b: 2, c: 4, d: 6, e: 7, f: 8 }
})();

```

## Functions

### spreader

Combine two objects

> Returns an object

### spreading

Combines Multiple Objects

> Returns an object


## Parameters
```javascript
spreader(target, source);
spreading(target[, source, source,...etc]);
```

| Parameter Name   | Type   | Required   | Default Value   | Description   |
| --- | --- | --- | --- | --- |
| target | object | true | null | An object that the source object will combine to |
| source | object | true | null | An object that will combine with the target |

## Contributing

Please open a new issue and mention me to get the ball rolling. Thanks!

## Future Features

- Ability to handle multiple elements

## Feature Request

Please message hello@websitesbymario.com for feature requests.

## Bug Report

Please message hello@websitesbymario.com to report bugs.

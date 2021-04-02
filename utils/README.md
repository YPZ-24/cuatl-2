# What's in here?

This directory contains utility functions used across different components and pages of this application.

Use it in your page, component, or function like this:

```javascript
//: Import an especific function:
import { name_of_the_utility_function } from '@/utils';
```

or like this:

```javascript
//: Import all the utility functions:
import * from '@/utils';
```

The `@/utils' path works because of the _"path"_ configuration in the `jsconfig.json`.


## References

If you are not sure about what is a utility function, I recommend that you read this paper: [Utility Functions](https://www.csee.umbc.edu/courses/331/resources/lisp/onLisp/04utilityFunctions.pdf).

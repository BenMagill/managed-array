# Managed array

> **Note**: Records retrieved can not be expected to be in the same order they were added.

## Installation

`npm install @benmagill/managed-array`

## Usage
### Initialise
```typescript
import { ManagedArray } from '@benmagill/managed-array';

// Create an array with any data type
const array = new ManagedArray();

// Create an array for a certain data type
const numArray = new ManagedArray<number>();

// Create an array with data
const myArray = new ManagedArray([1, 2, 3]);
```

### Add
```typescript
// Add a single item
array.add(1);

// Add multiple items
array.add([1, 2, 3]);
```

### Remove 
```typescript
// remove the item at index 1
array.remove(1);
```

### Iterate
```typescript
array.forEach((item, id) => {

})

// OR
const newArray = array.map((item, id) => {

})

```
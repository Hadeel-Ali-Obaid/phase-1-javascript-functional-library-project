function myEach(collection, callback) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  for (const value of values) {
    callback(value);
  }
  return collection;
}

// function myEach(collection, callback) {
//   if (Array.isArray(collection)) {
//     for (let i = 0; i < collection.length; i++) {
//       callback(collection[i]);
//     }
//   } else {
//     for (const key in collection) {
//       callback(collection[key]);
//     }
//   }
//   return collection;
// }

function myMap(collection, callback) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  const mappedArray = [];

  for (let i = 0; i < values.length; i++) {
    mappedArray.push(callback(values[i]));
  }

  return mappedArray;
}

// function myMap(collection, callback) {
//   const values = Array.isArray(collection)
//     ? collection
//     : Object.values(collection);
//   return values.map(callback);
// }

// function myMap(collection, callback) {
//   if (Array.isArray(collection)) {
//     return collection.map(callback);
//   } else if (typeof collection === "object") {
//     return Object.values(collection).map(callback);
//   } else {
//     throw new Error("Unsupported collection type");
//   }
// }

function myReduce(collection, callback, initialValue) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  let accumulator = initialValue !== undefined ? initialValue : values[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  if (values.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }
  for (let i = startIndex; i < values.length; i++) {
    accumulator = callback(accumulator, values[i], i, values);
  }
  return accumulator;
}

// function myReduce(collection, callback, initialValue) {
//   const values = Array.isArray(collection)
//     ? collection
//     : Object.values(collection);
//   if (initialValue !== undefined) {
//     return values.reduce(callback, initialValue);
//   } else if (values.length > 0) {
//     return values.reduce(callback);
//   }
// }

// function myReduce(collection, callback, initialValue) {
//   if (Array.isArray(collection)) {
//     if (initialValue !== undefined) {
//       return collection.reduce(callback, initialValue);
//     } else if (collection.length > 0) {
//       return collection.reduce(callback);
//     } else {
//       throw new Error("Cannot reduce an empty array without an initial value");
//     }
//   } else if (typeof collection === "object") {
//     const values = Object.values(collection);
//     if (initialValue !== undefined) {
//       return values.reduce(callback, initialValue);
//     } else if (values.length > 0) {
//       return values.reduce(callback);
//     } else {
//       throw new Error("Cannot reduce an empty object without an initial value");
//     }
//   } else {
//     throw new Error("Unsupported collection type");
//   }
// }

function myFind(collection, predicate) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      return values[i];
    }
  }
  return undefined;
}

// function myFind(collection, value) {
//   const values = Array.isArray(collection)
//     ? collection
//     : Object.values(collection);
//   return values.find(value);
// }

// function myFind(collection, value) {
//   if (Array.isArray(collection)) {
//     return collection.find(value);
//   } else if (typeof collection === "object") {
//     return Object.values(collection).find(value);
//   } else {
//     throw new Error("Unsupported collection type");
//   }
// }

function myFilter(collection, callback) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  const filteredArray = [];
  for (let i = 0; i < values.length; i++) {
    if (callback(values[i])) {
      filteredArray.push(values[i]);
    }
  }
  return filteredArray;
}

// function myFilter(collection, callback) {
//   const values = Array.isArray(collection)
//     ? collection
//     : Object.values(collection);
//   return values.filter(callback);
// }

// function myFilter(collection, callback) {
//   if (Array.isArray(collection)) {
//     return collection.filter(callback);
//   } else if (typeof collection === "object") {
//     return Object.values(collection).filter(callback);
//   } else {
//     throw new Error("Unsupported collection type");
//   }
// }

function mySize(collection) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  return values.length;
}

// function mySize(collection) {
//   if (Array.isArray(collection)) {
//     return collection.length;
//   } else if (typeof collection === "object") {
//     return Object.values(collection).length;
//   } else {
//     throw new Error("Unsupported collection type");
//   }
// }

function myFirst(collection, n) {
  if (n !== undefined) {
    return collection.slice(0, n);
  } else if (collection.length > 0) {
    return collection[0];
  } else {
    return undefined;
  }
}

function myLast(collection, n) {
  if (n !== undefined) {
    return collection.slice(-n);
  } else if (collection.length > 0) {
    const last = collection[collection.length - 1];
    return last;
  } else {
    return undefined;
  }
}

function mySortBy(arr, sortFunction) {
  const sortedArr = arr.slice();
  sortedArr.sort((a, b) => {
    const aValue = sortFunction(a);
    const bValue = sortFunction(b);
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });
  return sortedArr;
}

function myKeys(collection) {
  return Object.keys(collection);
}

function myValues(collection) {
  return Object.values(collection);
}

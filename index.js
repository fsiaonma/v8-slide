const LIMIT = 100000000;

const arr1 = [];
for (let i = 0; i < LIMIT; ++i) {
 arr1.push(1);
}

console.time('a');
for (let i = 0; i < LIMIT; ++i) {
 const a = arr1[i];
}
console.timeEnd('a');

const arr2 = [];
arr2[LIMIT - 1] = 1;

console.time('b');
for (let i = 0; i < LIMIT; ++i) {
 const a = arr2[i];
}
console.timeEnd('b');
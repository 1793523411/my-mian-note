const array = [0, 1, 2];

Object.defineProperty(array, '0', {
 get() { console.log('get 0'); return 0; },
 set(v) { console.log('set 0'); }
});

Object.defineProperty(array, '1', {
 get() { console.log('get 1'); return 1; },
 set(v) { console.log('set 1'); }
});

array.sort();
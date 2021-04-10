const toBinary = Math.max.apply(null, n.toString(2).split('0').map(x => x.length));
console.log(toBinary);
let data = [1, 2, 3];
Array.prototype.hoge = function () {
};
for ( let d of data ) {
  console.log( d );
}

for ( let d in data ) {
  console.log( d );
}
function trapezoid( { upper = 1, lower = 1, height = 1 } ) {
  return (upper + lower) * height / 2;
}

console.log(
    trapezoid( {
      upper:5, lower:10, height:2
    } )
);

let book = {
  isbn:'123-4-5678-9012-3',
  title:'TITLE',
  price:1000
};

let getInfo = function ( { isbn } ) {
  console.log( isbn );
}

getInfo( book );
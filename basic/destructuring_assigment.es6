let [hoge,foo]=[15, 21];
console.log( hoge );
console.log( foo );
console.log( "" );

let [ab,cd,...other] =[10, 20, 30, 40, 50, 60];
console.log( ab );
console.log( cd );
console.log( other );
console.log( "" );

function destructure() {
  let result1 = 10;
  let result2 = 20;

  return [result1, result2];
}

let [xxx,yyy] = destructure();
console.log( xxx );
console.log( yyy );
console.log( "" );


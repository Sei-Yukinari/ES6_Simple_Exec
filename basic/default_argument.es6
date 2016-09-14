function show( name = 'sei' ) {
  console.log( name );
}

show();
show( 'taro' );

function required() {
  throw new Error( 'Argument is missing' );
}

function hoge( value = required() ) {
  return value;
}

hoge(); //エラー
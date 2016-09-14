function hoge( value ) {
  return new Promise( ( resolve, reject )=> {
    setTimeout( () => {
      if ( value ){
        resolve( `値は${value}` );
      } else {
        reject( `入力値が空です` );
      }
    }, 2000 )
  } )
}

hoge( 'sei' ).then(
    response => {
      console.log( response );
    },
    error=> {
      console.log( error );
    }
);

hoge( 'sei' )
    .then(
        response => {
          console.log( `1.${response}` );
          return hoge( 'ies' )
        }
    )
    .then(
        response=> {
          console.log( `2.${response}` );
        }
    ),
    error => {
      console.log( `Error.${error}` );
    };

Promise.all( [
  hoge( '1' ),
  hoge( '2' ),
  hoge( '3' )
] ).then(
    response=> {
      console.log( response );
    },
    error => {
      console.log( `Error.${error}` );
    }
);

Promise.race( [
  hoge( '1' ),
  hoge( '2' ),
  hoge( '3' )
] ).then(
    response=> {
      console.log( response );
    },
    error => {
      console.log( `Error.${error}` );
    }
);
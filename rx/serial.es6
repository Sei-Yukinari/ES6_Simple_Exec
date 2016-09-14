import Rx from 'rx'

var dummyHttpRequestA = () => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve( "success A" );
    }, 2000 );
  } );
};

var dummyHttpRequestB = () => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve( "success B" );
    }, 3000 );
  } );
};

Rx.Observable.fromPromise( dummyHttpRequestA() )
    .flatMap( ( message ) => {
      console.log( message ); // => ２秒後に return message A が出力される
      return Rx.Observable.fromPromise( dummyHttpRequestB() );
    } )
    .subscribe( ( message ) => {
      console.log( message ); // => ３秒後に return message B が出力される
    } );
import { Observable } from 'rx';

Observable
    .just(1)
    .subscribe(
        value => console.log(`onNext: ${value}`),
        error => console.log(`onError: ${error}`),
        () => console.log(`onCompleted`)
    );
console.log('created');
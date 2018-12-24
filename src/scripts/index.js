import '../styles/index.scss';

console.log('webpack starterkit');

let url = "http://demo5282476.mockable.io";

let promise = window.fetch(url);

promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);
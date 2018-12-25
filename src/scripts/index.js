import '../styles/index.scss';

console.log('webpack starterkit');

let url = "http://demo5282476.mockable.io";

let headers = new Headers();
headers.append('pragma', 'no-cache');
headers.append('cache-control', 'no-cache');

let init = {
  method: 'GET',
  headers: headers,
};

let promise = window.fetch(url, init);

promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);
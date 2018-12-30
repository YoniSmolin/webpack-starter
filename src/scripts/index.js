import '../styles/index.scss';

console.log('webpack starterkit');

let url = "http://demo5282476.mockable.io";

let headers = new Headers();
headers.append('Authorization', 'Authorization Key');

let init = {
  method: 'GET',
  headers: headers,
};

setTimeout(function()
    {
        let promise = window.fetch(url, init);
        promise.then(
            data => console.log('success: ', data),
            error => console.log('error: ', error)
        );
    },
    1000
);
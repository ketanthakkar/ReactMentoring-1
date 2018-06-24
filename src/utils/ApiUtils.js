import fetch from 'node-fetch';

export const callApi = (url, options) =>
    fetch(url, options)
        .then(
            response => (response.ok
                    ? response.json()
                    : Promise.reject(response.text())
            ),
            error => Promise.reject(error))
        .then(
            data => ({data}),
            error => ({error}))
        .catch(error => ({error}));

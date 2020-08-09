export default class HttpClient {
    get(url) {
        return fetch(url).then(response => response.json()).then(data => data)
    }
}
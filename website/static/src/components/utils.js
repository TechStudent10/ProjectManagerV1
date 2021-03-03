function RequestOptions(method, headers, body) {
    const requestOptions = {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    }
    return requestOptions
}

export {
    RequestOptions
}

export const useHttp=() => {
    const request = async (url, method = 'GET', options = {}) => {
        try {
            let data;
            if (method === 'GET' || method === 'DELETE') {
                data = await fetch(url, {method: method})
            }
            if (method === 'POST' || method === 'PUT') {
                const requestOptions = {
                    method: method,
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(options),
                };
                data = await fetch(url, requestOptions);
            }
            return data.json()
        } catch (e) {
            console.log(e)
        }
    }
    return {request}
}
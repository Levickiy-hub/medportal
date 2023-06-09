import {BASE_URL} from "./config";
import toast from 'react-hot-toast';

export const useHttp=() => {
    const request = async (url, method = 'GET', options = {},toastMessageSuccess ='',toastMessageError) => {
        try {
            let data;
            if (method === 'GET' || method === 'DELETE') {
                data = await fetch(BASE_URL + url, {method: method})
            }
            if (method === 'POST' || method === 'PUT') {
                const requestOptions = {
                    method: method,
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(options),
                };
                data = await fetch(BASE_URL + url, requestOptions);
            }
            if (!data.ok) {
                throw new Error(data.message || 'ERROR')
            }
            if(toastMessageSuccess!==''){
                toast.success(toastMessageSuccess)
            }
            return data.json()
        } catch (e) {
            console.log(e)
            toast.error(toastMessageError)
        }
    }
    const requestFile = async (url, files) => {
        try {
            const formData = new FormData();
            formData.append('file', files);
            let data = await fetch(BASE_URL + url, {
                method: 'POST',
                body: formData
            })
            if (!data.ok) {
                throw new Error(data.message || 'ERROR')
            }
            return data.json()
        } catch (e) {
            console.log(e)
        }

    }
    return {request, requestFile}
}
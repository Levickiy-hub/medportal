import {BASE_URL} from "./config";
import toast from 'react-hot-toast';
import {useState,useCallback} from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';

export const useHttp=() => {
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const request = useCallback(async (url, method = 'GET', options = {},toastMessageSuccess ='',toastMessageError) => {
        try {
            let data;
            if (method === 'GET' || method === 'DELETE') {
                data = await fetch(BASE_URL + url, {
                    method: method,
                    credentials: 'include',
                })
            }
            if (method === 'POST' || method === 'PUT') {
                const requestOptions = {
                    method: method,
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(options),
                    credentials: 'include',
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
    },[]);

    const requestFile = useCallback(async (url, files) => {
        try {
            setLoading(true)
            const formData = new FormData();
            formData.append('file', files);
            let data = await fetch(BASE_URL + url, {
                method: 'POST',
                body: formData,
                credentials: 'include',
            })
            if (!data.ok) {
                throw new Error(data.message || 'ERROR')
            }
            setLoading(false);
            return data.json()
        } catch (e) {
            console.log(e)
            setError(e.message)
            setLoading(false);
            toast.error('Ошибка загрузка файла')
            throw e;
        }

    },[]);

    const loginRequest = useCallback(async ( options = {}) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(options),
                credentials: 'include',
            };
            let data = await fetch(BASE_URL+'/auth', requestOptions);

            if (!data.ok) {
               const message = await data.json()
                throw new Error(message.message || 'ERROR')
            }
            const user = await data.json()
            dispatch({ type: 'LOGIN', payload: { user } }); // Отправляем действие с данными пользователя

            navigate('/profile')
            return user
        } catch (e) {
            console.log(e.message)
            toast.error('Не удалось выполнить вход!')
        }
    },[dispatch])
    return {request, requestFile,loginRequest,loading, error}
}
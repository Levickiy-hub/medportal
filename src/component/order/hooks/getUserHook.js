import {useHttp} from "../../../API";
import {useState} from "react";

export function useGetUser() {
    const {request} = useHttp()
    const [status, setStatus] = useState()
    const requestUser = async (personNumber) => {
        if (personNumber.length === 6 || personNumber.length === 8) {
            try {
                const data = await request('/users?number=' + personNumber, 'GET');
                if (data) {
                    setStatus('success')
                } else {
                    setStatus('fail')
                }
                return data;
            } catch (e) {
                console.log(e)
                setStatus('error')
            }
        }
        else{
            setStatus('waite')
            return null
        }
    }
    const requestOrganization = async (organizationId) => {
        try {
            const data = await request('/organizations/' + organizationId, 'GET');
            if (data) {
                setStatus('success')
            } else {
                setStatus('fail')
            }
            return data;
        } catch (e) {
            console.log(e)
            setStatus('error')
        }
    }
    return {requestUser, requestOrganization, status}
}
export default useGetUser;
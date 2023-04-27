import {useHttp} from "../../../API";

export function useGetUser() {
    const {request} = useHttp()
    const requestUser = async (personNumber)=>{
        try{
            return await request('/users?number='+personNumber,'GET');
        }catch (e) {
            console.log(e)
        }
    }
    const requestOrganization = async (organizationId)=>{
        try{
            return await request('/organizations/'+organizationId,'GET');
        }catch (e) {
            console.log(e)
        }
    }
    return{requestUser,requestOrganization}
}
export default useGetUser;
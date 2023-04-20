
export const useHttp=() =>{
    const request= async (url,method='GET')=>{
        const data = await fetch(url,{method: method})

        return data.json()
    }
       return {request}
}

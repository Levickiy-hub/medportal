import {useEffect, useState} from "react";


export function useOrder() {
    const [clinic,setClinic] = useState(null)
    const [personNumber,setPersonNumber] = useState('')
    const [fornamn,setFornamn] = useState('')
    const [efternamn,setEfternamn] = useState('')
    const [gatuadress,setGatuadress] = useState('')
    const [address2,setAddress2] = useState('')
    const [postnummer,setPostnummer] =useState('')
    const [postOrt,setPostOrt] =useState('')
    const [ePostAddress,setEPostAddress] = useState('')
    const [telefon,setTelefon]=useState('')
    const [whose,setWhose]=useState(null);
    const [type,setType]=useState(null) //Записи в журнале, рентген,Другие документы Напишите в сообщении или прикрепите pdf
    const [message,setMessage]= useState('')
    const [messageFile,setMessageFile] = useState(null)
    const [proxy,setProxy] = useState(null)
    const [alertType,setAlertType] =useState(null)
    const [creator,setCreator] =useState(null)
    const [mailingAddress,setMailingAddress]=useState(null)
    const [isActive,setIsActive]=useState([false,false,true]) // кнопка далее активна или нет

    function changePersonNumber(value){
        setPersonNumber(value);
    }
    function changeFornamn(value){
        setFornamn(value)
    }
    function changeEfternamn(value){
        setEfternamn(value)
    }
    function changeGatuadress(value){
        setGatuadress(value)
    }
    function changeAddress2(value){
        setAddress2(value)
    }
    function changePostnummer(value){
        setPostnummer(value)
    }
    function changeEPostAddress(value){
        setEPostAddress(value)
    }
    function changeTelefon(value){
        setTelefon(value)
    }
    function changeWhose(value){
        console.log(value)
        setWhose(value)
    }
    function changeType(value){
        setType(value)
    }
    function changeMessage(value){
        setMessage(value)
    }
    function changeMessageFile(value){
        setMessageFile(value)
    }
    function changeProxy(value){
        setProxy(value)
    }
    function changeAlertType(value){
        setAlertType(value)
    }
    function changePostOrt(value){
        setPostOrt(value)
    }
    function changeCreator(obj){
        setCreator(obj)
    }
    function changeMallingAddress(obj){
        setMailingAddress(obj)
    }
    function createObject(){
        const data={
            patient:{
                personNumber:personNumber,
                fornamn:fornamn,
                efternamn:efternamn,
                gatuadress:gatuadress,
                address2:address2,
                postnummer:postnummer,
                postOrt:postOrt,
                ePostAddress:ePostAddress,
                telefon:telefon,
            },
            whose:whose,
            type:type,
            message:message,
            messageFile:messageFile,
            proxy:proxy,
            alertType:alertType,
            creator:creator,
            mailingAddress:mailingAddress
        }
        return data
    }
    function validate(data){
        return true
    }
    function send(){
        const data = createObject();
        if(validate(data)){
            console.log(data);
        }
    }
    useEffect(()=>{
        let newIsActive = [...isActive];// создаем новый массив isActive
        if(personNumber.length>0){
            newIsActive[0]=true;
        }
        else{
            newIsActive[0]=false;
        }
        setIsActive(newIsActive)// устанавливаем новый массив как состояние
    },[personNumber])

    useEffect(() => {
        const newIsActive = [...isActive]; // создаем новый массив isActive
        if(whose !== null) {
            newIsActive[1] = true;
        } else {
            newIsActive[1] = false;
        }
        setIsActive(newIsActive); // устанавливаем новый массив как состояние
    }, [whose]);
    return {
        changeMessage,
        changePersonNumber,
        changeAlertType,
        changeProxy,
        changeWhose,
        changeEfternamn,
        changeMessageFile,
        changeType,
        changeTelefon,
        changeEPostAddress,
        changeGatuadress,
        changeFornamn,
        changePostnummer,
        changeCreator,
        changePostOrt,
        changeMallingAddress,
        changeAddress2,
        send,
        whose,
        isActive,
    }
};

export default useOrder;
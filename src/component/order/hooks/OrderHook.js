import {useEffect, useState} from "react";
import {useHttp} from "../../../API";

export function useOrder() {
    const [clinic, setClinic] = useState(null)
    const [personNumber, setPersonNumber] = useState('')
    const [fornamn, setFornamn] = useState('')
    const [efternamn, setEfternamn] = useState('')
    const [gatuadress, setGatuadress] = useState('')
    const [address2, setAddress2] = useState('')
    const [postnummer, setPostnummer] = useState('')
    const [postOrt, setPostOrt] = useState('')
    const [ePostAddress, setEPostAddress] = useState('')
    const [telefon, setTelefon] = useState('')
    const [whose, setWhose] = useState(null);
    const [type, setType] = useState(null) //Записи в журнале, рентген,Другие документы Напишите в сообщении или прикрепите pdf
    const [message, setMessage] = useState('')
    const [messageFile, setMessageFile] = useState([])
    const [proxy, setProxy] = useState([])
    const [alertType, setAlertType] = useState(null)
    const [creator, setCreator] = useState(null)
    const [mailingAddress, setMailingAddress] = useState(null)
    const [isActive, setIsActive] = useState([false, false, true]) // кнопка далее активна или нет

    const {request} = useHttp()

    function changePersonNumber(value) {
        setPersonNumber(value);
    }

    function changeFornamn(value) {
        setFornamn(value)
    }

    function changeEfternamn(value) {
        setEfternamn(value)
    }

    function changeGatuadress(value) {
        setGatuadress(value)
    }

    function changeAddress2(value) {
        setAddress2(value)
    }

    function changePostnummer(value) {
        setPostnummer(value)
    }

    function changeEPostAddress(value) {
        setEPostAddress(value)
    }

    function changeTelefon(value) {
        setTelefon(value)
    }

    function changeWhose(value) {
        setWhose(value)
    }

    function changeType(value) {
        setType(value)
    }

    function changeMessage(value) {
        setMessage(value)
    }

    function changeMessageFile(value) {
        setMessageFile([...messageFile, ...value])
    }

    function changeProxy(value) {
        setProxy([...proxy, ...value])
    }

    function changeAlertType(value) {
        setAlertType(value)
    }

    function changePostOrt(value) {
        setPostOrt(value)
    }

    function changeCreator(obj) {
        setCreator(obj)
    }

    function changeMallingAddress(obj) {
        setMailingAddress(obj)
    }

    function createObject() {
        const data = {
            patient: {
                PersonNumber: personNumber,
                First_name: fornamn,
                Last_name: efternamn,
                Address1: gatuadress,
                Address2: address2,
                Postcode: postnummer,
                Post_town: postOrt,
                Email: ePostAddress,
                Phone: telefon,
            },
            whose: whose,
            type: type,
            message: message,
            messageFile: messageFile,
            proxy: proxy,
            alertType: alertType,
            creator: creator,
            mailingAddress: mailingAddress
        }
        return data
    }

    function validate(data) {
        return true
    }

    function send() {
        const data = createObject();
        if (validate(data)) {
            console.log(data);
            request('/orders/', 'POST', data).then(data => console.log(data)).then(err => console.log(err))
        }
    }

    useEffect(() => {
        let newIsActive = [...isActive];// создаем новый массив isActive
        if (personNumber.length > 0) {
            newIsActive[0] = true;
        } else {
            newIsActive[0] = false;
        }
        setIsActive(newIsActive)// устанавливаем новый массив как состояние
    }, [personNumber])

    useEffect(() => {
        const newIsActive = [...isActive]; // создаем новый массив isActive
        if (whose !== null) {
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
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
    const [type, setType] = useState([]) //Записи в журнале, рентген,Другие документы Напишите в сообщении или прикрепите pdf
    const [message, setMessage] = useState('')
    const [messageFile, setMessageFile] = useState([])
    const [proxy, setProxy] = useState([])
    const [alertType, setAlertType] = useState(null)
    const [creator, setCreator] = useState(null)
    const [mailingAddress, setMailingAddress] = useState(null)
    const [isActive, setIsActive] = useState([false, false, false]) // кнопка далее активна или нет

    const {request} = useHttp()

    function changeClinic(value) {
        setClinic(value);
    }
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
            clinic:clinic,
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


    function send() {
        const data = createObject();
        console.log(data);
        request('/orders/', 'POST', data,'Успешно отправлено','Произошла Ошибка').then(data => console.log(data)).catch(err => console.log(err))
    }

    // Проверка заполнения всех обязательных полей
    useEffect(() => {
        const updatedIsActive = [...isActive];

        // Проверяем, является ли personNumber длинной 6 или 8 символов
        const isPersonNumberValid = personNumber.length === 6 || personNumber.length === 8;

        // Проверяем, заполнены ли все обязательные поля
        const isRequiredFieldsFilled =
            fornamn.length > 0 &&
            efternamn.length > 0 &&
            gatuadress.length > 0 &&
            postnummer.length > 0 &&
            postOrt.length > 0 &&
            ePostAddress.length > 0 &&
            telefon.length > 0;

        // Если personNumber длинной 6 или 8 символов и все обязательные поля заполнены,
        // то устанавливаем updatedIsActive[0] в true, иначе в false
        updatedIsActive[0] = isPersonNumberValid && isRequiredFieldsFilled;

        // Устанавливаем новый массив updatedIsActive в качестве состояния
        setIsActive(updatedIsActive);
    }, [
        personNumber,
        fornamn,
        efternamn,
        gatuadress,
        postnummer,
        postOrt,
        ePostAddress,
        telefon,
    ]);

    // Проверка заполнения обязательных полей при создании нового пользователя или организации
    useEffect(() => {
        // Создаем копию массива isActive
        const updatedIsActive = [...isActive];

        // Проверяем, выбран ли тип пользователя
        if (whose !== null) {
            if (whose === 1) {
                // Если выбран тип "физическое лицо", устанавливаем updatedIsActive[1] в true
                updatedIsActive[1] = true;
            } else if (whose === 2 && creator) {
                // Если выбран тип "юридическое лицо" и есть данные об организации,
                // проверяем заполнение обязательных полей
                const isPersonalNumberValid =
                    creator.person.Personal_number.length === 6 ||
                    creator.person.Personal_number.length === 8;
                const isRequiredFieldsFilled =
                    creator.person.First_name.length > 0 &&
                    creator.person.Last_name.length > 0 &&
                    creator.person.Email.length > 0 &&
                    creator.person.Mob_number.length > 0 &&
                    creator.person.Position.length > 0 &&
                    creator.Billing.Address1.length > 0 &&
                    creator.Billing.Postcode.length > 0 &&
                    creator.Billing.Post_town.length > 0 &&
                    creator.Billing.Email.length > 0 &&
                    creator.Billing.Phone.length > 0 &&
                    creator.org.Address1.length > 0 &&
                    creator.org.Postcode.length > 0 &&
                    creator.org.Post_town.length > 0 &&
                    creator.org.Email.length > 0 &&
                    creator.org.Phone.length > 0;

                // Если все обязательные поля заполнены, устанавливаем updatedIsActive[1] в true, иначе в false
                updatedIsActive[1] = isPersonalNumberValid && isRequiredFieldsFilled;
            } else {
                // Если нет данных об организации, устанавливаем updatedIsActive[1] в false
                updatedIsActive[1] = false;
            }
        } else {
            // Если не выбран тип пользователя, устанавливаем updatedIsActive[1] в false
            updatedIsActive[1] = false;
        }

        // Устанавливаем новый массив updatedIsActive в качестве состояния
        setIsActive(updatedIsActive);
    }, [whose,creator])
    // useEffect(() => {
    //     const updatedIsActive = [...isActive];
    //     const isTypeValid = type.length !== 0;
    //     const isWhose1Valid = whose === 1;
    //     const isWhose2Valid = whose === 2 && proxy.length !== 0;
    //     updatedIsActive[2] = isTypeValid && (isWhose1Valid || isWhose2Valid);
    //     setIsActive(updatedIsActive);
    // }, [type, proxy]);
    useEffect(() => {
        const updatedIsActive = [...isActive];
        updatedIsActive[2] = type.length!==0;
        setIsActive(updatedIsActive);
    }, [type]);
    return {
        changeClinic,
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
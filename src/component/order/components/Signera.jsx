import React, {useEffect, useState} from 'react';
import style from './signera.module.css'
const Signera = ({changeAlertType,changeMallingAddress}) => {
    const [alertType, setAlertType] = useState([])
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [ev, setEv] = useState('')
    const [postnummer, setPostnummer] = useState('')
    const [ort, setOrt] = useState('')
    const onClickCheckBox = (value) => {
        if (alertType.includes(value)) {
            setAlertType(alertType.filter(item => item !== value))
        } else {
            setAlertType([...alertType, value])
        }
    }
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }
    const onChangeEv = (e) => {
        setEv(e.target.value)
    }
    const onChangePostnummer = (e) => {
        setPostnummer(e.target.value)
    }
    const onChangeOrt = (e) => {
        setOrt(e.target.value)
    }
    useEffect(() => {
        changeAlertType(alertType)
    }, [alertType])
    useEffect(() => {
        changeMallingAddress({
            name: name,
            address: address,
            ev: ev,
            postnummer: postnummer,
            ort: ort
        })
    }, [
        name,
        address,
        ev,
        postnummer,
        ort])
    return (
        <div>
            <div className={style.checkboxBox}>
                <h1>Hur vill du få tillgång till beställda dokument?</h1>
                <div onClick={() => onClickCheckBox(1)}><input type={'checkbox'} checked={alertType.includes(1)} readOnly/><label>via SMS</label></div>
                <div onClick={() => onClickCheckBox(2)}><input type={'checkbox'} checked={alertType.includes(2)} readOnly/><label>via E-mail</label></div>
                <div onClick={() => onClickCheckBox(3)}><input type={'checkbox'} checked={alertType.includes(3)} readOnly/><label>Beställer kopior på papper och
                    USB (kostar 400 kr)</label></div>
            </div>
            <div className={style.address}>
                <div className={style.container}>
                    <label> Namn:</label>
                    <input type={'text'} onChange={e => onChangeName(e)} value={name}/>
                </div>
                <div className={style.container}>
                    <label> Gatuadress:</label>
                    <input type={'text'} onChange={e => onChangeAddress(e)} value={address}/>
                </div>
                <div className={style.container}>
                    <label> Ev. c/o:</label>
                    <input type={'text'} onChange={e => onChangeEv(e)} value={ev}/>
                </div>
                <div className={`${style.container} ${style.addressContainer}`}>
                    <label> Postnummer:</label>
                    <input type={'text'} onChange={e => onChangePostnummer(e)} value={postnummer}/>
                    <label> Ort:</label>
                    <input type={'text'} onChange={e => onChangeOrt(e)} value={ort}/>
                </div>

            </div>
        </div>
    );
}

export default Signera;
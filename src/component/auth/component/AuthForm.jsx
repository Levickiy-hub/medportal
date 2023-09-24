import React, {useState} from 'react';
import style from './authForm.module.css'
import {useHttp} from "../../../API";
const AuthForm = () => {
    const [selectValue,setSelectValue]=useState(1)
    const [personalNumber,setPersonalNumber]=useState('')

    const {loginRequest}=useHttp()

    const changePersonNumber=(e)=>{
        setPersonalNumber(e.target.value)
    }
    const changeSelect = (e)=>{
        setSelectValue(e.target.value)
    }
    const onClickLogin=async ()=>{
        const options = {
            type:selectValue,
            personalNumber:personalNumber
        }
        await loginRequest(options)
    }
    return (
        <div className={style.mainForm}>
            <h1>Logga in</h1>
               <h2>Är du inte registrerad? Registrera här.</h2>
            <select className={style.selectAuth} value={selectValue} onChange={e=>changeSelect(e)}>
                <option value={1}>BankID</option>
                <option value={2}>Google Autentifikator</option>
            </select>
            <input type={'text'} className={style.personalNumber} placeholder={'Personnummer'} onChange={e=>changePersonNumber(e)} value={personalNumber}/>
            <button className={style.buttonSubmit} onClick={async ()=>{await onClickLogin()}}>Logga in</button>
        </div>
    );
};

export default AuthForm;
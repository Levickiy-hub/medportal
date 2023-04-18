import React, {useEffect, useState} from 'react';
import style from './signera.module.css'
const Signera = ({changeAlertType}) => {
    const [alertType,setAlertType]=useState([])
    const onClickCheckBox = (value)=>{
        if(alertType.includes(value)){
            setAlertType(alertType.filter(item=>item!==value))
        }
        else {
            setAlertType([...alertType,value])
        }
    }
    useEffect(()=>{
        changeAlertType(alertType)
    },[alertType])
    return (
        <div className={style.checkboxBox}>
            <h1>Hur vill du få tillgång till beställda dokument?</h1>
            <div onClick={()=>onClickCheckBox(1)}><input type={'checkbox'}/><label>via SMS</label></div>
            <div onClick={()=>onClickCheckBox(2)}><input type={'checkbox'}/><label>via E-mail</label></div>
            <div onClick={()=>onClickCheckBox(3)}><input type={'checkbox'}/><label>Beställer kopior på papper och USB (kostar 400 kr)</label></div>
        </div>
    );
};

export default Signera;
import React, {useEffect, useState} from 'react';
import style from './document.module.css'
const Dokument = ({changeMessage,changeMessageFile,changeType,changeProxy,whose}) => {
    const [type,setType] =useState([])
    const [message,setMessage]=useState('')
    const onChangeMessage = (e)=>{
        setMessage(e.target.value)
        changeMessage(e.target.value)
    }
    const onClickCheckBox = (value)=>{
        if(type.includes(value)){
            setType(type.filter(item=>item!==value))
        }
        else {
            setType([...type,value])
        }
    }
    useEffect(()=>{
        changeType(type)
    },[type])
    return (
        <div>
            <h1>Jag vill du beställa:</h1>
            <div className={style.checkboxBox}>
                <div onClick={()=>onClickCheckBox(1)}>
                    <input type={'checkbox'} checked={type.includes(1)} readOnly/>
                    <label>Journalateckningar</label>
                </div>
                <div onClick={()=>onClickCheckBox(2)}>
                    <input type={'checkbox'}  checked={type.includes(2)} readOnly/>
                    <label>Rontgenbilder</label>
                </div>
                <div onClick={()=>onClickCheckBox(3)}>
                    <input type={'checkbox'} checked={type.includes(3)} readOnly/>
                    <label>Andra document Skriv i meddelande eller bifoga pdf</label>
                </div>
            </div>
            <div>
                <h1>Meddelande</h1>
                <textarea value={message} onChange={e=>onChangeMessage(e)}/>
                <input type={'file'}/>
            </div>
            {whose ===2 &&<div>
                <h2>Fullmakt</h2>
                <h4>
                    Du beställer någon annans journal.
                    Ladda upp patientens fullmakt eller få fullmakten via BankID
                </h4>
                <input type={"file"}/>
                <button>BankID</button>
            </div>}
        </div>
    );
};

export default Dokument;
import React, {useState} from 'react';
import style from './patient.module.css'
const Patient = () => {
    const [personNumber,setPersonNumber] =useState('')
    const onChangePersonNumber =(e)=>{
        setPersonNumber(e.target.value)
    }

    return (
        <div className={style.mainContainer}>
            <div>
                <h1>Välj klinik</h1>
                <select className={style.mainContainerSelect}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div>
                <h1>Patient</h1>
                <div className={style.lineContainer}>
                    <label>Patientes personnumber</label>
                    <input type={'text'} onChange={e=>onChangePersonNumber(e)} required/>
                </div>
                {personNumber.length > 0 &&
                <div className={style.box}>
                    <div className={style.lineTableContainer}>
                        <div className={style.lineContainer}><label>Fornamn</label><input type={'text'}/></div>
                        <div className={style.lineContainer}><label>Efternamn</label><input type={'text'}/></div>
                    </div>
                    <div className={style.lineContainer}><label>Gatuadress</label><input type={'text'}/></div>
                    <div className={style.lineContainer}><label>Postnummer</label><input type={'text'}/></div>
                    <div className={style.lineContainer}><label>E-postadress</label><input type={'text'}/></div>
                    <div className={style.lineContainer}><label>Telefon</label><input type={'text'}/></div>
                </div>
                }

            </div>
        </div>
    );
};

export default Patient;
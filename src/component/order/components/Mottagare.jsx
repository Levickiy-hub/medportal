import React, {useState} from 'react';
import style from './mottagare.module.css'
const Mottagare = () => {
    const [checkedValue,setCheckedValue]=useState(0)
    const onClick = (value)=>{
        if(value===checkedValue){
            setCheckedValue(0);
        }
        else{
            setCheckedValue(value);
        }
    }
    return (
        <div className={style.mainContainer}>
            <h1>Du som beställer journal</h1>
            <div className={style.mainContainer}>
                <div className={style.line}>
                    <input type={'checkbox'} onClick={()=>onClick(1)} checked={checkedValue===1} readOnly/>
                    <label>ag är patient och beställer min journal</label>
                </div>
                <div className={style.line}>
                    <input type={'checkbox'} onClick={()=>onClick(2)} checked={checkedValue===2} readOnly/>
                    <label>Jag beställer någon annans journal</label>
                </div>
            </div>
            {checkedValue === 2 &&
            <div className={style.box}>
                <h2>Beställare</h2>
                <div className={style.inline}>
                    <label>Personnummer</label>
                    <input type={'text'}/>
                </div>
                <div className={style.inBox}>
                    <div  className={style.inline}>
                        <label>Förnamn </label>
                        <input type={'text'}/>
                    </div>
                    <div className={style.inline}>
                        <label>Efternamn </label>
                        <input type={'text'}/>
                    </div>
                    <div className={style.inline}>
                        <label>E-mail </label>
                        <input type={'text'}/>
                    </div>
                    <div className={style.inline}>
                        <label>Tel.nr. </label>
                        <input type={'text'}/>
                    </div>
                    <div className={style.inline}>
                        <label>Befattning </label>
                        <input type={'text'}/>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default Mottagare;
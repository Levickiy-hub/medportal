import React from 'react';
import style from './css/thirdBlock.module.css'
const ThirdBlock = () => {
    return (
        <div className={style.mainBlock}>
                <div className={style.fromContainer}>
                    <h1>Tipsa Medportal till en klinik eller organisation</h1>
                    <div className={style.form}>
                        <label>Organisationsnamn</label>
                        <input className={style.fromContainerInput}/>
                        <label>Telefon</label>
                        <input className={style.fromContainerInput}/>
                        <label>E-mail</label>
                        <input className={style.fromContainerInput}/>
                        <button>Skicka</button>
                    </div>
                </div>
        </div>
    );
};
export default ThirdBlock;
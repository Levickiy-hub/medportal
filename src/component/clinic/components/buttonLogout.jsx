import React from 'react';
import style from './buttonLogout.module.css'
const ButtonLogout = () => {
    return (
        <div className={style.box}>
           <button className={style.buttonLogout}>Logga ut</button>
        </div>
    );
};

export default ButtonLogout;
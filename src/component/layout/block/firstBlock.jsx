import React from 'react';
import style from './css/firstBlock.module.css'
const FirstBlock = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.infoBlock}>
                <div>
                    <h1>Beställ journalinformation</h1>
                    <h2>Få tillgång till journalanteckningar, röntgenbilder och andra medicinska dokument</h2>
                </div>
                <div className={style.selectBlock}>
                    <select className={style.selectInput}>
                        <option>Sök klinik</option>
                        <option>Muntra</option>
                        <option>Älvsjö Tandvård</option>
                        <option>Aqua dental</option>
                    </select>
                    <button className={style.selectButton}>Beställ</button>
                </div>
            </div>
            <div className={style.loginBlock}>
                <h1>Har fått tillgång?</h1>
                <button className={style.loginButton}>Logga in</button>
            </div>
        </div>
    );
};

export default FirstBlock;
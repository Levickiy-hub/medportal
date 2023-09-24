import React from 'react';
import style from './css/secondBlock.module.css'
const SecondBlock = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.card}>
                <img alt={'image'}/>
                <div className={style.cardText}>
                    <h1>Steg 1</h1>
                    <h2>Beställ journalanteckningar, röntgenbilder eller andra dokument från en klinik</h2>
                </div>
            </div>
            <div className={style.card}>
                <img alt={'image'}/>
                <div className={style.cardText}>
                    <h1>Steg 2</h1>
                    <h2>När kliniken har laddat upp beställda filer får du inloggningsuppgifter via e-post och SMS</h2>
                </div>
            </div>
            <div className={style.card}>
                <img alt={'image'}/>
                <div className={style.cardText}>
                    <h1>Steg 3</h1>
                    <h2>Logga in för att få journal, röntgenbilder och andra dokument digitalt, ladda ner dem eller
                        skicka vidare</h2>
                </div>
            </div>

        </div>
    );
};

export default SecondBlock;
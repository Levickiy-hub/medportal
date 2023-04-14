import React from 'react';
import style from './document.module.css'
const Dokument = () => {
    return (
        <div>
            <h1>Jag vill du beställa:</h1>
            <div className={style.checkboxBox}>
                <div>
                    <input type={'checkbox'}/>
                    <label>Journalateckningar</label>
                </div>
                <div>
                    <input type={'checkbox'}/>
                    <label>Rontgenbilder</label>
                </div>
                <div>
                    <input type={'checkbox'}/>
                    <label>Andra document Skriv i meddelande eller bifoga pdf</label>
                </div>
            </div>
            <div>
                <h1>Meddelande</h1>
                <textarea/>
                <input type={'file'}/>
            </div>
            <div>
                <h2>Fullmakt</h2>
                <h4>
                    Du beställer någon annans journal.
                    Ladda upp patientens fullmakt eller få fullmakten via BankID
                </h4>
                <input type={"file"}/>
                <button>BankID</button>
            </div>
        </div>
    );
};

export default Dokument;
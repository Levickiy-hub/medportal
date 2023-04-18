import React, {useEffect, useRef, useState} from 'react';
import style from './document.module.css'
const Dokument = ({changeMessage,changeMessageFile,changeType,changeProxy,whose}) => {
    const filePicker = useRef(null)
    const filePickerFullMark = useRef(null)

    const [type, setType] = useState([])
    const [message, setMessage] = useState('')
    const [messageFile, setMessageFile] = useState([])
    const onChangeMessage = (e) => {
        setMessage(e.target.value)
        changeMessage(e.target.value)
    }
    const onClickCheckBox = (value) => {
        if (type.includes(value)) {
            setType(type.filter(item => item !== value))
        } else {
            setType([...type, value])
        }
    }
    useEffect(() => {
        changeType(type)
    }, [type])

    async function handleUpload(selectedFiles) {
        console.log(selectedFiles)
        if (selectedFiles) {
            const arrFile = []
            for (let i = 0; i < selectedFiles.length; i++) {
                arrFile.push(selectedFiles[i])
            }
            setMessageFile([...messageFile, ...arrFile])
        }
    }

    function handlerPick() {
        filePicker.current.click();
    }

    function handlerPickFullMark() {
        filePickerFullMark.current.click();
    }

    return (
        <div>
            <h1>Jag vill du beställa:</h1>
            <div className={style.checkboxBox}>
                <div onClick={() => onClickCheckBox(1)}>
                    <input type={'checkbox'} checked={type.includes(1)} readOnly/>
                    <label>Journalateckningar</label>
                </div>
                <div onClick={() => onClickCheckBox(2)}>
                    <input type={'checkbox'} checked={type.includes(2)} readOnly/>
                    <label>Rontgenbilder</label>
                </div>
                <div onClick={() => onClickCheckBox(3)}>
                    <input type={'checkbox'} checked={type.includes(3)} readOnly/>
                    <label>Andra document Skriv i meddelande eller bifoga pdf</label>
                </div>
            </div>
            <div>
                <h1>Meddelande</h1>
                <textarea value={message} onChange={e => onChangeMessage(e)}/>
                <button className={style.addFileButton} onClick={() => handlerPick()}/>
                <input type={'file'} hidden={true} ref={filePicker} onChange={e => handleUpload(e.target.files)}
                       multiple/>
                {messageFile.map((item, i) => (
                    <div key={i}>
                        {item.name}
                    </div>
                ))}
            </div>
            {whose === 2 && <div>
                <h2>Fullmakt</h2>
                <h4>
                    Du beställer någon annans journal.
                    Ladda upp patientens fullmakt eller få fullmakten via BankID
                </h4>
                <button className={style.addFileButton} onClick={() => handlerPickFullMark()}/>
                <input type={"file"} hidden={true} ref={filePickerFullMark} onChange={e => handleUpload(e.target.files)}
                       multiple/>
                <button>BankID</button>
            </div>}
        </div>
    );
};

export default Dokument;
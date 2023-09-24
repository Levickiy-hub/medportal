import React, {useState} from 'react';
import style from './answer.module.css'
import Templates from "./templates";
import DropZone from "./dropZone";
import {useHttp} from "../../../API";
const Answer = ({order}) => {
    const {request} = useHttp()
    const [templates,setTemplates] = useState(<></>)
    const [message,setMessage] = useState('')
    const [filePdf,setFilePdf]=useState([])
    const [fileAnother,setFileAnother]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const send = ()=>{
        const options={
            OrderId:order.id,
            filesPdf:filePdf,
            fileXray:fileAnother,
            casesMessage:message,
            userId:order.PatientID
        }
        request('/cases','POST',options,'Отправлено','При отправлении произошла ошибка').then(data=>console.log(data))
    }
    const openTemplates =(e)=>{
        setTemplates(<Templates event ={e}
                                close={closeTemplate}
                                changeText={onChangeMessage}
        />)
    }

    const closeTemplate=()=>{
        setTemplates(<></>)
    }
    const onChangeMessage=(text)=>{
        setMessage(text)
    }

    return (
        <div className={style.container}>
            <div>
                <div>
                    <h1>
                        PDF-filer för journal och andra dokument
                    </h1>
                    <DropZone setData={setFilePdf} setIsLoading={setIsLoading}/>
                </div>
                <div>
                    <h1>Röntgenbiler och andra photo</h1>
                    <DropZone setData={setFileAnother} setIsLoading={setIsLoading}/>
                </div>
            </div>
            <div className={style.secondBlock}>
                <h1>Meddelande</h1>
                <button className={style.templateButton} onClick={e=>openTemplates(e)}>Mallar</button>
                {templates}
                <textarea className={style.message} value={message} onChange={e=>onChangeMessage(e.target.value)}/>
                <div className={style.buttonContainer}>
                    <button>Ångra</button>
                    <button className={style.buttonBlack} onClick={()=>send()} disabled={isLoading}>Skicka</button>
                </div>
            </div>
        </div>
    );
};

export default Answer;
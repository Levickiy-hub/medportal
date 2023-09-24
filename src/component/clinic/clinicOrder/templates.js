import React, {useEffect, useState} from 'react';
import {useHttp} from "../../../API";
import style from './templates.module.css'
const Templates = ({event,close ,changeText}) => {
    const [templates,setTemplates] = useState([])
    const [text,setText]=useState('')
    const {request} = useHttp()

    useEffect(()=>{
        request('/users/1/templates').then(data=>setTemplates(data))
    },[])

    const onChangeText=(text)=>{
        setText(text)
    }
    const sendTemplate=()=>{
        request('/users/1/templates','POST',{templates:text},'Шаблон сохранен')
            .then(data=>setTemplates(prev=>[...prev,data]))
    }
    const onClickText = (text)=>{
        changeText(text)
        close()
    }
    return (
        <div className={style.mainContainer} style={{positionX:event.clientX,positionY:event.clientY}}>
            <button onClick={()=>close()}>close</button>
            <div>
                {templates.map(data=><div key={data.id} className={style.textContainer}
                onClick={()=>onClickText(data.Templates)}>{data.Templates}</div>)}
            </div>
            <div>
                <textarea value={text} onChange={e=>onChangeText(e.target.value)} className={style.textArea}/>
                <button onClick={()=>sendTemplate()} className={style.addButton}>Add Templates</button>
            </div>
        </div>
    );
};

export default Templates;
import React, {useEffect, useState} from 'react';
import style from './file.module.css'
import { ReactComponent as DocumentIcon } from '../../icon/iconDocument.svg';
import { ReactComponent as PDFDocumentIcon } from '../../icon/pdfDocumentIcon.svg';
import { ReactComponent as WordDocumentIcon } from '../../icon/wordIcon.svg';
import { ReactComponent as PictureIcon } from '../../icon/pictureIcon.svg';
import {BASE_URL} from "../../config";


const File = ({name='',path='',extension=''}) => {
    const [icon,setIcon] = useState(null)

    const onClickHandler =()=>{
       window.open(`${BASE_URL}/files/${name}`)
    }

    useEffect(()=>{
        if(!extension){
            const fileName = name.split('.')
            extension = fileName[fileName.length-1]
        }
        if(extension==='doc' || extension==='docx'){
            setIcon(<WordDocumentIcon className = {style.icon}/>)
        }
        else if(extension==='pdf'){
            setIcon(<PDFDocumentIcon  className = {style.icon}/>)
        }
        else if(extension==='jpg' || extension==='png'){
            setIcon(<PictureIcon  className = {style.icon}/>)
        }
        else{
            setIcon(<DocumentIcon  className = {style.icon}/>)
        }
    },[extension])

    return (
        <div onClick={()=>onClickHandler()}>
            <div className={style.card}>
                    {icon}
                    <h1>{name}</h1>
            </div>
        </div>

    );
};

export default File;
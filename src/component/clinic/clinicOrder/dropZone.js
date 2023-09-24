import React, {useEffect, useRef, useState} from 'react';
import style from './answer.module.css'
import {useHttp} from "../../../API";
import File from "../../common/file";

const DropZone = ({setData,setIsLoading }) => {
    const filePicker = useRef(null)
    const [filesVisible,setFilesVisible] = useState([])
    const {requestFile,loading} = useHttp()

    function handlerPick() {
        filePicker.current.click();
    }
    useEffect(()=>{
        setIsLoading(loading)
    },[loading])
    async function handleUpload(files) {
        const filesArray = Array.from(files);
        filesArray.forEach(file=>
            requestFile('/files',file).then(data=> {
                    setData(prev => [...prev, data])
                    setFilesVisible(prev=>[...prev, data])
                }
            )
        )
    }

    function muteEvent(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function onChangeDrag(e) {
        e.stopPropagation();
        e.preventDefault();
        handleUpload(e.dataTransfer.files)
    }

    return (
             <div className={style.dropZone}
                  onDragOver={e => muteEvent(e)}
                  onDragEnter={e => muteEvent(e)}
                  onDragLeave={e => muteEvent(e)}
                  onDrop={e => onChangeDrag(e)}>
                <h2>
                    <span onClick={() => handlerPick()}>Dra hit eller ladda upp</span>
                    <input type="file" hidden={true} ref={filePicker} onChange={e => handleUpload(e.target.files)}/>
                </h2>
                <div className={style.fileContainer}>
                    {filesVisible.map(file=> {
                         const filePath =  file.path.split('\\');
                         const fileName =  filePath[filePath.length-1];
                         return <File name={fileName} path={file.path} key={fileName}/>
                    })}
                </div>
            </div>
    );
};

export default DropZone;
import React from 'react';
import style from './order.module.css'
import File from "../../common/file";
const Order = ({order}) => {
    const orderList=order && order.Order_docs_list?.split(',').map(data=>{
        if(data==='1'){
            return <h2 key={1}>Journalateckningar</h2>
        }
        else if(data==='2'){
            return <h2 key={2}>Rontgenbilder</h2>
        }
        else if(data === '3'){
            return <h2 key={3}>Andra document Skriv i meddelande eller bifoga pdf</h2>
        }
    })
    const fileList = order && order.Order_Message_File?.split(',').map(data=>{
        const filePath = data.split('\\')
        return <File key = {filePath} path={data} name={filePath[filePath.length - 1]}/>
    })

    return (
        <div>
            <div className={style.mainContainer}>
                <div className={style.mainCell}>
                    <h1>Beställs</h1>
                    {orderList}
                </div>
                <div className={style.mainCell}>
                    <h1>Meddelande</h1>
                    <div className={style.messageContainer}>
                        <h2>{order?.Order_Message}</h2>
                    </div>
                </div>
                <div className={style.mainCell}>
                    <h1>
                        Bifogade filer:
                        {fileList}
                    </h1>
                </div>
            </div>
            <div className={style.container}>
                <h1>Fullmakt</h1>
                <div className={style.buttonContainer}>
                    <h1>Granska Fullmakt!</h1>
                    <button className={style.buttonAccept}>Godta</button>
                    <button className={style.buttonDismiss}>Avvisa</button>
                </div>
            </div>
        </div>
    );
};

export default Order;
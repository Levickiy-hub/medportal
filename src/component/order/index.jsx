import React from 'react';
import StepProvider from "./stepProvider";
import style from './order.module.css'
import Patient from "./components/Patient";
import Mottagare from "./components/Mottagare";
import Dokument from "./components/Dokument";
import Signera from "./components/Signera";
import useOrder from "./hooks/OrderHook";
const Index = () => {
    const {changeClinic,changePersonNumber,send,changeType,changeTelefon,changeEPostAddress,changeGatuadress,changeFornamn,changePostnummer,changeMessageFile,changeEfternamn,changeWhose,changeProxy,
    changeAlertType,changeMessage,whose,isActive,changeCreator,changePostOrt,changeMallingAddress,changeAddress2}=useOrder()
    const data = [
        {title:"Patient",component:<Patient changePersonNumber={changePersonNumber} changeEPostAddress={changeEPostAddress} changeGatuadress={changeGatuadress}
                                            changePostnummer={changePostnummer} changeTelefone={changeTelefon} changeFornamn={changeFornamn} changeEfternamn={changeEfternamn}
            changePostOrt={changePostOrt} changeAddress2={changeAddress2} changeClinic={changeClinic}/>},
        {title:"Beställare",component:<Mottagare changeWhose={changeWhose} changeCreator={changeCreator}/>},
        {title:"Dokument",component:<Dokument changeType={changeType} changeMessage={changeMessage} changeMessageFile={changeMessageFile} changeProxy={changeProxy} whose={whose}/>},
        {title:"Signera",component:<Signera changeAlertType={changeAlertType} changeMallingAddress={changeMallingAddress}/>}
    ];

    return (
        <div className={style.mainContainer}>
            <div className={style.stepContainer}>
           <StepProvider data={data} send={send} isActive={isActive}/>
            </div>
        </div>
    );
};

export default Index;
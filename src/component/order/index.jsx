import React from 'react';
import StepProvider from "./stepProvider";
import style from './order.module.css'
import Patient from "./components/Patient";
import Mottagare from "./components/Mottagare";
import Dokument from "./components/Dokument";
import Signera from "./components/Signera";
const Index = () => {
    const data = [
        <Patient/>,
        <Mottagare/>,
        <Dokument/>,
        <Signera/>
    ];

    return (
        <div className={style.mainContainer}>
            <div className={style.stepContainer}>
           <StepProvider data={data}/>
            </div>
        </div>
    );
};

export default Index;
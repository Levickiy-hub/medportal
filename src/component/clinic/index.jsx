import React from 'react';
import InfoBlock from "./components/infoBlock";
import Table from "./components/table";
import style from './clinic.module.css'
import ButtonLogout from "./components/buttonLogout";
import {useParams} from "react-router-dom";
import ClinicOrder from './clinicOrder'
const Index = () => {
    const {ordersId}=  useParams();

    return (
        <div className={style.mainBlock}>
            <InfoBlock/>
            <div className={style.secondBlock}>
                <ButtonLogout/>
                {!ordersId && <Table/>}
                {ordersId && <ClinicOrder/>}
            </div>
        </div>
    );
};

export default Index;
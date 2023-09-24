import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useHttp} from "../../../API";
import Table from "./table";
import Order from "./order";
import style from './index.module.css'
import Answer from "./answer";
import Sender from "./sender";
const Index = () => {
    const {request} = useHttp()
    const {clinicId,ordersId}=  useParams();
    const [order,setOrder]=useState(null)
    const [patient,setPatient]=useState(null)
    const [creator,setCreator]=useState(null)
    const [step,setStep]=useState(1)

    useEffect(()=>{
        request('/orders/'+ordersId).then(data=> {
            setOrder(data.order)
            setPatient(data.patient)
            setCreator(data.creator)
        })
    },[clinicId,ordersId])
    useEffect(()=>{
    console.log(order)
    },[order])

    const stepHandler=(number=1)=>{
        setStep(number)
    }

    return (
        <div>
            <h1>{patient?.First_name} {patient?.Last_name}</h1>
            <h1>{patient?.Personal_number}</h1>
            <Table clinicId={order?.OrganizationID} patientId={order?.PatientID}/>
            <div>
                <div className={style.buttonContainer}>
                    <button onClick={()=>{stepHandler(1)}}>Beställning</button>
                    <button onClick={()=>{stepHandler(2)}}>Avsändare</button>
                    <button onClick={()=>{stepHandler(3)}}>Svar</button>
                </div>
                <div className={style.container}>
                    <div style={{display:step!==1?'none':''}}> <Order order={order}/></div>
                    <div  style={{display:step!==2?'none':''}}> <Sender sender={creator||patient}/></div>
                    <div  style={{display:step!==3?'none':''}}> <Answer order={order}/></div>
                </div>
            </div>
        </div>
    );
};

export default Index;
import React, {useEffect, useState} from 'react';
import style from "./patient.module.css";
import {useHttp} from "../../../API";

const SelectClinic = ({changeClinic=()=>{}}) => {

    const {request} = useHttp()

    const [clinic, setClinic] = useState([])
    const [fields, setFields] = useState([])
    useEffect(() => {
        request('/organizations?type=clinic').then(data => {
            setClinic(data)
        })
    }, [])
    useEffect(() => {
        setFields(clinic?.map((data, i) => (<option key={i} value={data.id}>{data.Clinic_name}</option>)))
    }, [clinic])
    const change = (e) => {
        changeClinic(e.target.value)
    }

    return (
        <div>
            <h1>Välj klinik</h1>
            <select className={style.mainContainerSelect} onChange={e => {change(e)}}>
                {fields}
            </select>
        </div>
    );
}

export default SelectClinic;
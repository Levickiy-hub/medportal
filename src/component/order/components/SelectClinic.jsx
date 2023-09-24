import React, {useEffect, useState} from 'react';
import style from "./patient.module.css";
import {useHttp} from "../../../API";

const SelectClinic = ({changeClinic=()=>{}}) => {

    const {request} = useHttp()

    const [clinic, setClinic] = useState([])
    const [fields, setFields] = useState([])
    const [value,setValue] = useState(0)
    useEffect(() => {
        request('/organizations?type=clinic').then(data => {
            setClinic(data)
        })
    }, [])
    useEffect(() => {
        setFields(clinic?.map((data, i) => (<option key={i} value={data.id}>{data.Clinic_name}</option>)))
    }, [clinic])
    const change = (e) => {
        setValue(e.target.value)
    }
    useEffect(()=>{
        changeClinic(value)
    },[value])
    return (
        <div>
            <h1>Välj klinik</h1>
            <select className={style.mainContainerSelect} onChange={e => {change(e)}}>
                {value === 0 && <option> Выберите клинику</option>}
                {fields}
            </select>
        </div>
    );
}

export default SelectClinic;
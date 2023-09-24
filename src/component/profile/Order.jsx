import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useHttp} from "../../API";
import style from './order.module.css'
import OrderItem from "./OrderItem";
import Calendar from "./Calendar";

const Order = () => {
    const user=useSelector(state => state.user)
    const [patientOrder,setPatientOrder]=useState([])
    const [creatorOrder,setCreatorOrder]=useState([])
    const [dataReady, setDataReady] = useState(false);

    const {request}=useHttp()

    useEffect(()=>{
        request(`/users/${user.id}/orders`).then(data=>{
            setCreatorOrder(data.creatorOrder)
            setPatientOrder(data.patientOrder)
            setDataReady(true); // Устанавливаем флаг, что данные готовы
        })
    },[])
    const patientCard=patientOrder.length>0?patientOrder.map((item,i)=><OrderItem item={item} key={i}/>):<div className={style.zeroOrderContainer}>Нет заказов</div>
    const creatorCard=creatorOrder.length>0?creatorOrder.map((item,i)=><OrderItem item={item} key={i}/>):<div className={style.zeroOrderContainer}>Нет заказов</div>
    return (
        <div>
            <div>
                <input/>
                <select><option>Дата</option></select>
                <input type={'date'}/>
            </div>
            <div>
                <h1 className = {style.сategoryName}>Заказы для себя:</h1>
                <div className={style.wrapper}>{patientCard}</div>
            </div>
            <div>
                <h1 className = {style.сategoryName}>Заказы для клиента:</h1>
                <div className={style.wrapper}>{creatorCard}</div>
            </div>
            {dataReady && <Calendar data={[...patientOrder,...creatorOrder]}/>}
        </div>
    );
};

export default Order;
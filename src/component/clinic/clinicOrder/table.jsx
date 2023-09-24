import React, {useEffect, useState} from 'react';
import {useHttp} from "../../../API";
import style from '../table.module.css'
const Table = ({patientId,clinicId}) => {
    const [orders,setOrder] = useState([])
    const [isOpen,setIsOpen] = useState(false)

    const {request} = useHttp()

    const OnClickOpen=()=>{
        setIsOpen(prev=>!prev)
    }

    const TableBodyScreen = orders && (
        orders.length <= 2 ?
            orders.map((data,i) => (
                <tr key={data.id} className={i % 2 !== 0 ? style.grayTr:''}>
                    <td>{data.id}</td>
                    <td>{data.Status}</td>
                    <td>{data.createdAt}</td>
                    <td>

                    </td>
                </tr>
            ))
            :
            orders.slice(0, 2).map((data,i) => (
                <tr key={data.id} className={i % 2 !== 0 ? style.grayTr:''}>
                    <td>{data.id}</td>
                    <td>{data.Status}</td>
                    <td>{data.createdAt}</td>
                    <td>

                    </td>
                </tr>
            ))
    );
    const TableBodyFull = orders && orders.map((data,i)=>
        <tr key={data.id} className={i % 2 !== 0 ? style.grayTr:''}>
            <td>
                {data.id}
            </td>
            <td>
                {data.Status}
            </td>
            <td>
                {data.createdAt}
            </td>
            <td>

            </td>
        </tr>)
    useEffect(()=>{
        if(clinicId && patientId){
            request('/orders/?clinicId='+clinicId+'&patientId='+patientId).then(data=>{setOrder(data)})
        }
    },[patientId,clinicId])
    return (
        <>
        <table className={style.tableBox}>
            <thead className={style.tableHead}>
            <tr>
                <td>
                    Best.nr
                </td>
                <td>
                    Status
                </td>
                <td>
                    Skapad
                </td>
                <td>
                    Beställare
                </td>
            </tr>
            </thead>
            <tbody className={style.tableBody}>
                {isOpen?TableBodyFull:TableBodyScreen}
            </tbody>
            {/*<tfoot>*/}

            {/*</tfoot>*/}

        </table>
            <h1  className={style.tableFoot} onClick={()=>OnClickOpen()}>
    {orders && orders.length>2 &&
    (isOpen? `Visa mindre` : `Visa mer (${orders.length})`)
    }
    </h1>
            </>
    );
};

export default Table;
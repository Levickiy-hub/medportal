import React, {useEffect, useState} from 'react';
import Search from "./search";
import style from '../table.module.css'
import {useHttp} from "../../../API";
import {useParams} from 'react-router-dom'
import Cards from "./cards";
const Table = () => {
    const {request} = useHttp()
    const {id}=  useParams();

    const [orders,setOrders]=useState([]);
    const [status,setStatus] = useState('all')
    const [visibleOrders,setVisibleOrders] = useState([])
    const [search,setSearch]=useState('')
    const [sorted,setSorted]=useState('id');

    //style by status
    const getStyleStatus =(status)=>{
        switch(status){
            case 'wait':
                return {color: 'red'}
            case 'accepted':
                return  {color: 'yellow'}
            case 'done':
                return {color: 'black'}
            default:
                return {color: 'black'}
        }
    }

    useEffect(()=>{
        request(`/organizations/${id}/orders`).then(data=>setOrders(data))
    },[id])

    // поиск и статусы
    useEffect(() => {
        const filteredOrders = orders.filter((item) => {
            const isMatchedStatus = status === 'all' || item.Status === status;
            const isMatchedSearch = search.length === 0 ||
                item.First_name.includes(search) ||
                item.Last_name.includes(search) ||
                item.id.toString().includes(search)||
                item.Personal_number.includes(search)||
               (item.Organization_name && item.Organization_name.includes(search));
            return isMatchedStatus && isMatchedSearch;
        });
        setVisibleOrders(filteredOrders);
    }, [orders, status, search]);
    //sort
    useEffect(()=>{
        visibleOrders.sort((a,b)=>a[sorted]>b[sorted])
    },[visibleOrders,sorted])

    const changeSearch=(value)=>{
        setSearch(value)
    }
    const changeStatus =(value) =>{
        setStatus(value)
    }
    const changeSort=(value)=>{
        setSorted(value)
    }
    const onClickHandler =(id)=>{
        window.location.href=window.location.href+'/orders/'+id
    }
    const tableFields = visibleOrders && visibleOrders.map((data,i)=>
        <tr key={data.id} className={i % 2 !== 0? style.grayTr: ''} onClick={()=>onClickHandler(data.id)}>
            <td style={getStyleStatus(data.Status)}>{data.id}</td>
            <td>{`${data.Last_name} ${data.First_name}`}</td>
            <td>{data.Personal_number}</td>
            <td>{`${data.createdAt} av ${data.Organization_name||'Patient'}`}</td>
        </tr>
    )
    return (
        <div className={style.mainBlock}>
            <Cards orders={orders||[]}/>
            <Search changeSearch={changeSearch}/>
            <div>
                <div className={style.panel}>
                    <div className={style.panelButton}>
                    <h2 onClick={()=>changeStatus('all')}>Alla</h2>
                    <h2 onClick={()=>changeStatus('wait')}>Inkomna</h2>
                    <h2 onClick={()=>changeStatus('accepted')}>Godtagna</h2>
                    <h2 onClick={()=>changeStatus('done')}>Klara</h2>
                    </div>
                    <select className={style.panelSelect} onChange={e=>changeSort(e.target.value)}>
                        <option value={'id'}>Sortera: Beställningsnummer</option>
                        <option value={'createdAt'}>Sortera: Beställningsdatum</option>
                        <option value={'updatedAt'}>Sortera: Klarade datum</option>
                        <option value={'Personal_number'}>Sortera: Patientens pers.nr</option>
                        <option value={'Last_name'}>Sortera: Patientens namn</option>
                    </select>
                </div>
                <table className={style.tableBox}>
                    <thead className={style.tableHead}>
                    <tr>
                        <td>Best.nr</td>
                        <td>Patient</td>
                        <td>Personnummer</td>
                        <td>Skapad</td></tr>
                    </thead>
                    <tbody className={style.tableBody}>
                    {tableFields}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
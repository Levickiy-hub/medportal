import React, {useEffect, useState} from 'react';
import style from './cards.module.css'
const Cards = ({orders=[]}) => {
    const [received,setReceived]=useState(0)
    const [accepted,setAccepted]=useState(0)
    const [done,setDone]=useState(0)
    useEffect(()=>{
        let r=0;
        let a=0;
        let d=0;
        orders.forEach(item=>{
            if(item.Status==='wait'){
                r++;
            }
            else if(item.Status==='accepted'){
                a++;
            }
            else if(item.Status==='done'){
                d++;
            }
        })
        setReceived(r);
        setAccepted(a);
        setDone(d);
    },[orders])
    return (
        <div className={style.mainBox}>
            <div className={style.cardsBox}>
                <h1>Inkomna</h1>
                <h2 style={{color:'red'}}>{received} st</h2>
            </div>
            <div className={style.cardsBox}>
                <h1>Godtagna</h1>
                <h2 style={{color:'yellow'}}>{accepted} st</h2>
            </div>
            <div className={style.cardsBox}>
                <h1>Klara</h1>
                <h2 style={{color:'black'}}>{done} st</h2>
            </div>
        </div>
    );
};

export default Cards;
import React, {useState} from 'react';
import style from './stepProvider.module.css'
const StepProvider = ({data=[],send,isActive}) => {
    const [step,setStep]=useState(0)

    function next(){
        setStep(step+1)
    }
    function prev(){
        setStep(step-1)
    }
    function onClickPagination(i){
        setStep(i)
    }
    const pagination = data.length>0?data.map((item,i)=>{
        return <div  key={'pag'+i}>
            <div className={`${style.paginationElement} ${step===i&&style.paginationActiveElement}`} onClick={()=>onClickPagination(i)}>{i + 1}</div>
            <h2 className={style.pagText}>{data[i]?.title}</h2>
        </div>
    }):<></>

    return (
        <div className={style.stepContainer}>
            <div className={style.paginationContainer}>{pagination}</div>
            <div>
                {data && data?.map((item,i)=>{
                    return(
                        <div style={{display:step!==i?"none":""}} key={'step'+i}>{item.component}</div>
                    )
                })}
            </div>
            <div className={style.buttonControlContainer}>
                <button className={style.buttonControl} onClick={()=>prev()} disabled={step===0}>Tillbaka</button>
                { data.length-1!==step ?
                    <button className={`${style.buttonControl} ${style.buttonControlNext}`} onClick={()=>next()}disabled={!isActive[step]} >Ga vidare</button>:
                    <button className={`${style.buttonControl} ${style.buttonControlNext}`} onClick={()=>send()} >Beställ</button>
                }
            </div>
        </div>
    );
};

export default StepProvider;
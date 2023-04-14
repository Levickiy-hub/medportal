import React, {useState} from 'react';
import style from './stepProvider.module.css'
const StepProvider = ({data=[]}) => {
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
        return <div className={`${style.paginationElement} ${step===i&&style.paginationActiveElement}`} onClick={()=>onClickPagination(i)} key={'pag'+i}>{i + 1}</div>
    }):<></>

    return (
        <div className={style.stepContainer}>
            <div className={style.paginationContainer}>{pagination}</div>
            <div>
                {data[step]}
            </div>
            <div className={style.buttonControlContainer}>
                <button className={style.buttonControl} onClick={()=>prev()} disabled={step===0}>Tillbaka</button>
                <button className={`${style.buttonControl} ${style.buttonControlNext}`} onClick={()=>next()} disabled={step===data.length-1}>Ga vidare</button>
            </div>
        </div>
    );
};

export default StepProvider;
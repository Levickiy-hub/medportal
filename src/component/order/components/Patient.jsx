import React, {useEffect, useState} from 'react'
import {useHttp} from "../../../API";
import style from './patient.module.css'
const Patient = ({changePersonNumber,changeEfternamn,changeFornamn,changePostnummer,changeEPostAddress,changeGatuadress,
                     changeTelefone,changePostOrt,changeAddress2}) => {
    const [personNumber,setPersonNumber] =useState('')
    const [efternamn,setEfternamn] =useState('')
    const [fornamn,setFornamn] =useState('')
    const [postnummer,setPostnummer] =useState('')
    const [ePostAddress,setEPostAddress] =useState('')
    const [gatuadress,setGatuadress] =useState('')
    const [telefone,setTelefone] =useState('')
    const [postOrt,setPostOrt] =useState('')
    const [addField,setAddField]=useState(false)
    const [address2,setAddress2]=useState('')
    const {request} =useHttp()
    const onClickAddField =()=>{
        setAddField(!addField)
    }
    const onChangePersonNumber =(e)=>{
        setPersonNumber(e.target.value)
        changePersonNumber(e.target.value)
    }
    const onChangeEfternamn =(e)=>{
        setEfternamn(e.target.value)
        changeEfternamn(e.target.value)
    }
    const onChangeFornamn =(e)=>{
        setFornamn(e.target.value)
        changeFornamn(e.target.value)
    }
    const onChangePostnummer =(e)=>{
        setPostnummer(e.target.value)
        changePostnummer(e.target.value)
    }
    const onChangeEPostAddress =(e)=>{
        setEPostAddress(e.target.value)
        changeEPostAddress(e.target.value)
    }
    const onChangeGatuadress =(e)=>{
        setGatuadress(e.target.value)
        changeGatuadress(e.target.value)
    }
    const onChangeAddress2 =(e)=>{
        setAddress2(e.target.value)
        // changeGatuadress(e.target.value)
    }
    const onChangeTelefone =(e)=>{
        setTelefone(e.target.value)
        changeTelefone(e.target.value)
    }
    const onChangePostOrt =(e)=>{
        setPostOrt(e.target.value)
        changePostOrt(e.target.value)
    }
    // useEffect(()=>{
    //     changePersonNumber(personNumber)
    // },[personNumber])
    useEffect(()=>{
        request('http://localhost:3000/1','GET').then(data=>console.log(data))
    },[])
    return (
        <div className={style.mainContainer}>
            <div>
                <h1>Välj klinik</h1>
                <select className={style.mainContainerSelect}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div>
                <h1>Patient</h1>
                <div className={style.lineContainer}>
                    <label>Patientes personnumber</label>
                    <input type={'text'} onChange={e=>onChangePersonNumber(e)} required/>
                </div>
                {personNumber.length > 0 &&
                <div>
                    <div className={style.lineTableContainer}>
                        <div className={style.lineContainer}><label>Fornamn</label><input type={'text'} onChange={e=>onChangeFornamn(e)} value={fornamn}/></div>
                        <div className={style.lineContainer}><label>Efternamn</label><input type={'text'} onChange={e=>onChangeEfternamn(e)} value={efternamn}/></div>
                    </div>
                    <div className={style.lineContainer}>
                        <div className={style.lineContainerLabel}>
                        <label>Gatuadress</label><label className={style.textButton} onClick={()=>onClickAddField()}> Lägg till c/o </label>
                        </div>
                        <input type={'text'} onChange={e=>onChangeGatuadress(e)} value={gatuadress}/>
                    </div>
                    {addField &&
                    <div className={style.lineContainer}>
                        <input type={'text'} onChange={e=>onChangeAddress2(e)} value={address2}/>
                    </div>
                    }
                    <div className={style.lineTableContainer}>
                        <div className={style.lineContainer}><label>Postnummer</label><input type={'text'} onChange={e=>onChangePostnummer(e)} value={postnummer}/></div>
                        <div className={style.lineContainer}><label>Postort</label><input type={'text'} onChange={e=>onChangePostOrt(e)} value={postOrt}/></div>
                    </div>

                    <div className={style.lineContainer}><label>E-postadress</label><input type={'text'} onChange={e=>onChangeEPostAddress(e)} value={ePostAddress}/></div>
                    <div className={style.lineContainer}><label>Telefon</label><input type={'text'} onChange={e=>onChangeTelefone(e)} value={telefone}/></div>
                </div>
                }
            </div>
        </div>
    );
};

export default Patient;
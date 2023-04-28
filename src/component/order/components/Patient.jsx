import React, {useEffect, useState} from 'react'
import {useHttp} from "../../../API";
import style from './patient.module.css'
import useGetUser from "../hooks/getUserHook";
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
    const [patient,setPatient]=useState(null)

    const {request} =useHttp()
    const {requestUser,status}=useGetUser();

    const styleBorderRed ={backgroundColor:'rgb(252,218,221)'}

    const onClickAddField =()=>{
        setAddField(!addField)
    }
    const onChangePersonNumber = async (value)=>{
        setPersonNumber(value)
        changePersonNumber(value)
        requestUser(value).then(data=>{
               setPatient(data)
        })
    }
    const onChangeEfternamn =(value)=>{
        setEfternamn(value)
        changeEfternamn(value)
    }
    const onChangeFornamn =(value)=>{
        setFornamn(value)
        changeFornamn(value)
    }
    const onChangePostnummer =(value)=>{
        setPostnummer(value)
        changePostnummer(value)
    }
    const onChangeEPostAddress =(value)=>{
        setEPostAddress(value)
        changeEPostAddress(value)
    }
    const onChangeGatuadress =(value)=>{
        setGatuadress(value)
        changeGatuadress(value)
    }
    const onChangeAddress2 =(value)=>{
        setAddress2(value)
        changeAddress2(value)
    }
    const onChangeTelefone =(value)=>{
        setTelefone(value)
        changeTelefone(value)
    }
    const onChangePostOrt =(value)=>{
        setPostOrt(value)
        changePostOrt(value)
    }
    useEffect(()=>{
       if(patient) {
           onChangeFornamn(patient.First_name||'')
           onChangeEfternamn(patient.Last_name||'')
           onChangeGatuadress(patient.Address1||'')
           onChangeAddress2(patient.Address2||'')
           onChangePostnummer(patient.Postcode||'')
           onChangePostOrt(patient.Post_town||'')
           onChangeEPostAddress(patient.Email||'')
           onChangeTelefone(patient.Mob_number||'')
       }
    },[patient])
    useEffect(()=>{
        if(personNumber.length!==6 ||personNumber.length!==8) {
            onChangeFornamn('')
            onChangeEfternamn('')
            onChangeGatuadress('')
            onChangeAddress2('')
            onChangePostnummer('')
            onChangePostOrt('')
            onChangeEPostAddress('')
            onChangeTelefone('')
        }
    },[personNumber])
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
                    <input type={'text'} onChange={e=>onChangePersonNumber(e.target.value)} required style={status==='success'?{}:styleBorderRed}/>
                </div>
                {personNumber.length > 0 &&
                <div>
                    <div className={style.lineTableContainer}>
                        <div className={style.lineContainer}><label>Fornamn</label><input type={'text'} onChange={e=>onChangeFornamn(e.target.value)} value={fornamn}
                                                                                          style={fornamn.length!==0?{}:styleBorderRed}/></div>
                        <div className={style.lineContainer}><label>Efternamn</label><input type={'text'} onChange={e=>onChangeEfternamn(e.target.value)} value={efternamn}
                                                                                            style={efternamn.length!==0?{}:styleBorderRed}/></div>
                    </div>
                    <div className={style.lineContainer}>
                        <div className={style.lineContainerLabel}>
                        <label>Gatuadress</label><label className={style.textButton} onClick={()=>onClickAddField()}> Lägg till c/o </label>
                        </div>
                        <input type={'text'} onChange={e=>onChangeGatuadress(e.target.value)} value={gatuadress}
                               style={gatuadress.length!==0?{}:styleBorderRed}/>
                    </div>
                    {addField &&
                    <div className={style.lineContainer}>
                        <input type={'text'} onChange={e=>onChangeAddress2(e.target.value)} value={address2}/>
                    </div>
                    }
                    <div className={style.lineTableContainer}>
                        <div className={style.lineContainer}><label>Postnummer</label><input type={'text'} onChange={e=>onChangePostnummer(e.target.value)} value={postnummer}
                                                                                             style={postnummer.length!==0?{}:styleBorderRed}/></div>
                        <div className={style.lineContainer}><label>Postort</label><input type={'text'} onChange={e=>onChangePostOrt(e.target.value)} value={postOrt}
                                                                                          style={postOrt.length!==0?{}:styleBorderRed}/></div>
                    </div>

                    <div className={style.lineContainer}><label>E-postadress</label><input type={'text'} onChange={e=>onChangeEPostAddress(e.target.value)} value={ePostAddress}
                                                                                           style={ePostAddress.length!==0?{}:styleBorderRed}/></div>
                    <div className={style.lineContainer}><label>Telefon</label><input type={'text'} onChange={e=>onChangeTelefone(e.target.value)} value={telefone}
                                                                                      style={telefone.length!==0?{}:styleBorderRed}/></div>
                </div>
                }
            </div>
        </div>
    );
};

export default Patient;
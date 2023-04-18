import React, {useEffect, useState} from 'react';
import style from './mottagare.module.css'
const Mottagare = ({changeWhose,changeCreator}) => {
    const [checkedValue, setCheckedValue] = useState(null)
    const [personnummer, setPersonnummer] = useState('')
    const [fornamn, setFornamn] = useState('')
    const [efternamn, setEfternamn] = useState('')
    const [email, setEmail] = useState('')
    const [telNr, setTelNr] = useState('')
    const [befattning, setBefattning] = useState('')
    const [organisation, setOrganisation] = useState('')
    const [orgNr, setOrgNr] = useState('')
    const [orgEv, setOrgEv] = useState('')
    const [orgPostnummer, setOrgPostnummer] = useState('')
    const [orgOrt, setOrgOrt] = useState('')
    const [orgEmail, setOrgEmail] = useState('')
    const [orgTel, setOrgTel] = useState('')
    const [orgAdress1, setOrgAdress1] = useState('')
    const [fakturEv, setFakturEv] = useState('')
    const [fakturPostnummer, setFakturPostnummer] = useState('')
    const [fakturgOrt, setFakturOrt] = useState('')
    const [fakturEmail, setFakturEmail] = useState('')
    const [fakturTel, setFakturTel] = useState('')
    const [fakturAdress1, setFakturAdress1] = useState('')
    const [referens, setReferens] = useState('')

    const onClick = (value) => {
        if (value === checkedValue) {
            setCheckedValue(null);
        } else {
            setCheckedValue(value);
        }
    }
    useEffect(() => {
        setPersonnummer('')
        changeWhose(checkedValue)
    }, [checkedValue])

    useEffect(() => {
        const fact ={orgNr:orgNr,fakturAdress1:fakturAdress1,fakturEv:fakturEv,fakturPostnummer:fakturPostnummer,fakturOrt:fakturgOrt,fakturEmail:fakturEmail,fakturTel:orgTel}
        const org ={organisation:organisation,orgAdress1:orgAdress1,orgEv:orgEv,orgPostnummer:orgPostnummer,orgOrt:orgOrt,orgEmail:orgEmail,orgTel:orgTel}
        const person = {personnummer:personnummer,fornamn:fornamn,efternamn:efternamn,email:email,telNr:telNr,befattning:befattning,referens:referens}
        changeCreator({Faktureringsadress:fact,org:org,person:person})
    }, [
        fakturAdress1,
        fakturEv,
        fakturPostnummer,
        fakturgOrt,
        fakturEmail,
        orgTel,
        organisation,
        orgAdress1,
        orgEv,
        orgPostnummer,
        orgOrt,
        orgEmail,
        orgTel,
        personnummer,
        fornamn,
        efternamn,
        email,
        telNr,
        befattning,
        referens])

    const changePersonalNumber = (e) => {
        setPersonnummer(e.target.value)
    }
    const changeFornamn = (e) => {
        setFornamn(e.target.value)
    }
    const changeEfternamn = (e) => {
        setEfternamn(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeTel = (e) => {
        setTelNr(e.target.value)
    }
    const changeBefattning = (e) => {
        setBefattning(e.target.value)
    }
    const changeOrganisation = (e) => {
        if(organisation===orgNr){
            setOrgNr(e.target.value)
        }
         setOrganisation(e.target.value)
    }
    const changeOrgNr = (e) => {
          setOrgNr(e.target.value)
    }
    const changeOrgAddress = (e) => {
        if(orgAdress1===fakturAdress1){
            setFakturAdress1(e.target.value)
        }
        setOrgAdress1(e.target.value)
    }
    const changeFaktAddress = (e) => {
        setFakturAdress1(e.target.value)
    }
    const changeOrgPostnummer = (e) => {
        if(orgPostnummer===fakturPostnummer){
            setFakturPostnummer(e.target.value)
        }
        setOrgPostnummer(e.target.value)
    }
    const changeFaktPostnummer = (e) => {
        setFakturPostnummer(e.target.value)
    }
    const changeOrgEV = (e) => {
        if(orgEv===fakturEv){
            setFakturEv(e.target.value)
        }
        setOrgEv(e.target.value)
    }
    const changeFaktEV = (e) => {
        setFakturEv(e.target.value)
    }
    const changeOrgOrt = (e) => {
        if(orgOrt===fakturgOrt){
            setFakturOrt(e.target.value)
        }
        setOrgOrt(e.target.value)
    }
    const changeFaktOrt = (e) => {
        setFakturOrt(e.target.value)
    }
    const changeOrgEmail = (e) => {
        if(orgEmail===fakturEmail){
            setFakturEmail(e.target.value)
        }
        setOrgEmail(e.target.value)
    }
    const changeFaktEmail = (e) => {
        setFakturEmail(e.target.value)
    }
    const changeOrgTel = (e) => {
        if(orgTel===fakturTel){
            setFakturTel(e.target.value)
        }
        setOrgTel(e.target.value)
    }
    const changeFaktTel = (e) => {
        setFakturTel(e.target.value)
    }
    const changeReference = (e) => {
        setReferens(e.target.value)
    }
    return (
        <div className={style.mainContainer}>
            <h1>Du som beställer journal</h1>
            <div className={style.mainContainer}>
                <div className={style.line}>
                    <input type={'checkbox'} onClick={() => onClick(1)} checked={checkedValue === 1} readOnly/>
                    <label>ag är patient och beställer min journal</label>
                </div>
                <div className={style.line}>
                    <input type={'checkbox'} onClick={() => onClick(2)} checked={checkedValue === 2} readOnly/>
                    <label>Jag beställer någon annans journal</label>
                </div>
            </div>
            {checkedValue === 2 &&
            <div className={style.box}>
                <h2>Beställare</h2>
                <div className={style.inline}>
                    <label>Personnummer</label>
                    <input type={'text'} onChange={e => changePersonalNumber(e)}/>
                </div>
                {personnummer.length > 0 && <div className={style.inBox}>
                    <div >
                        <div className={style.inline}>
                            <label>Förnamn </label>
                            <input type={'text'} value={fornamn} onChange={e=>changeFornamn(e)}/>
                        </div>
                        <div className={style.inline}>
                            <label>Efternamn </label>
                            <input type={'text'} value={efternamn} onChange={e=>changeEfternamn(e)}/>
                        </div>
                        <div className={style.inline}>
                            <label>E-mail </label>
                            <input type={'text'} value={email} onChange={e=>changeEmail(e)}/>
                        </div>
                        <div className={style.inline}>
                            <label>Tel.nr. </label>
                            <input type={'text'} value={telNr} onChange={e=>changeTel(e)}/>
                        </div>
                        <div className={style.inline}>
                            <label>Befattning </label>
                            <input type={'text'} value={befattning} onChange={e=>changeBefattning(e)}/>
                        </div>
                    </div>
                    <div className={style.inBoxOrganization}>
                    <div className={style.inHalfBox}>
                        <div className={style.inline}>
                            <label>Organisation </label>
                            <input type={'text'} value={organisation} onChange={e=>changeOrganisation(e)}/>
                        </div>
                        <label>Org. adress: </label>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Adress1'} value={orgAdress1} onChange={e=>changeOrgAddress(e)}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'ev. c/o'} value={orgEv} onChange={e=>changeOrgEV(e)}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Postnummer'} value={orgPostnummer} onChange={e=>changeOrgPostnummer(e)}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Ort'}value={orgOrt} onChange={e=>changeOrgOrt(e)}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'E-mail'} value={orgEmail} onChange={e=>changeOrgEmail(e)}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Tel nr'} value={orgTel} onChange={e=>changeOrgTel(e)}/>
                        </div>
                    </div>
                    <div className={style.inHalfBox}>
                        <div className={style.inline}>
                            <label>Org.nr. </label>
                            <input type={'text'} value={orgNr} onChange={e=>changeOrgNr(e)}/>
                        </div>
                        <label>Faktureringsadress: </label>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Adress1'} value={fakturAdress1} onChange={e=>changeFaktAddress(e)}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'ev. c/o'} value={fakturEv} onChange={e=>changeFaktEV(e)}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Postnummer'} value={fakturPostnummer} onChange={e=>changeFaktPostnummer(e)}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Ort'} value={fakturgOrt} onChange={e=>changeFaktOrt(e)}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'E-mail'} value={fakturEmail} onChange={e=>changeFaktEmail(e)}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Tel nr'} value={fakturTel} onChange={e=>changeFaktTel(e)}/>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div className={style.inline}>
                            <label>Ev.referens: </label>
                            <input type={'text'} value={referens} onChange={e=>changeReference(e)}/>
                        </div>
                    </div>
                </div>
                }
            </div>
            }
        </div>
    );
};

export default Mottagare;
import React, {useEffect, useState} from 'react';
import style from './mottagare.module.css'
const Mottagare = ({changeWhose}) => {
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
    const [fakturEmail, seFakturEmail] = useState('')
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
        changeWhose(checkedValue)
    }, [checkedValue])

    const changePersonalNumber = (e) => {
        setPersonnummer(e.target.value)
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
                            <input type={'text'}/>
                        </div>
                        <div className={style.inline}>
                            <label>Efternamn </label>
                            <input type={'text'}/>
                        </div>
                        <div className={style.inline}>
                            <label>E-mail </label>
                            <input type={'text'}/>
                        </div>
                        <div className={style.inline}>
                            <label>Tel.nr. </label>
                            <input type={'text'}/>
                        </div>
                        <div className={style.inline}>
                            <label>Befattning </label>
                            <input type={'text'}/>
                        </div>
                    </div>
                    <div className={style.inBoxOrganization}>
                    <div className={style.inHalfBox}>
                        <div className={style.inline}>
                            <label>Organisation </label>
                            <input type={'text'}/>
                        </div>
                        <label>Org. adress: </label>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Adress1'}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'ev. c/o'}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Postnummer'}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Ort'}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'E-mail'}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Tel nr'}/>
                        </div>
                    </div>
                    <div className={style.inHalfBox}>
                        <div className={style.inline}>
                            <label>Org.nr. </label>
                            <input type={'text'}/>
                        </div>
                        <label>Faktureringsadress: </label>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Adress1'}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'ev. c/o'}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Postnummer'}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Ort'}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'E-mail'}/>
                        </div>
                        <div className={style.inline}>
                            <input type={'text'} placeholder={'Tel nr'}/>
                        </div>
                    </div>
                    </div>
                    <div>
                        <div className={style.inline}>
                            <label>Ev.referens: </label>
                            <input type={'text'}/>
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
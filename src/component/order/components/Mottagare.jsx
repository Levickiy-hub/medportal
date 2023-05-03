import React, {useEffect, useState} from 'react';
import style from './mottagare.module.css'
import useGetUser from "../hooks/getUserHook";
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
    const [creator,setCreator]=useState(null)
    const [organization,setOrganization]=useState(null)

    const {requestUser,requestOrganization,status}=useGetUser();

    const styleBorderRed ={backgroundColor:'rgb(252,218,221)'}

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
        const Billing = {
            Address1: fakturAdress1,
            Ev: fakturEv,
            Postcode: fakturPostnummer,
            Post_town: fakturgOrt,
            Email: fakturEmail,
            Phone: orgTel,
            reference: referens
        }
        const org = {
            Address1: orgAdress1,
            Ev: orgEv,
            Postcode: orgPostnummer,
            Post_town: orgOrt,
            Email: orgEmail,
            Phone: orgTel
        }
        const person = {
            Personal_number: personnummer,
            First_name: fornamn,
            Last_name: efternamn,
            Email: email,
            Mob_number: telNr,
            Position: befattning,
        }
        changeCreator({
            Billing: Billing,
            org: org,
            person: person,
            Organization_number: orgNr,
            Organization_name: organisation
        })
    }, [ fakturAdress1, fakturEv,fakturPostnummer,fakturgOrt,fakturEmail,orgTel,organisation,orgAdress1,orgEv,orgPostnummer,
        orgOrt,orgEmail, orgTel,personnummer, fornamn,efternamn,email,telNr,befattning,referens,orgNr])
    useEffect(()=>{
        if(creator) {
            changeFornamn(creator.First_name||'')
            changeEfternamn(creator.Last_name||'')
            changeEmail(creator.Email||'')
            changeTel(creator.Mob_number||'')
            changeBefattning(creator.Position||'')
        }
    },[creator])
    useEffect(()=>{
        if(organization) {
            changeOrganisation(organization.Organization_name || '')
            changeOrgNr(organization.Organization_number || '')
            changeOrgAddress(organization.Address1 || '')
            changeFaktAddress(organization.Billing_address1 || '')
            changeOrgEV(organization.Address2 || '')
            changeFaktEV(organization.Billing_address2 || '')
            changeOrgPostnummer(organization.Postcode || '')
            changeFaktPostnummer(organization.Billing_postcode || '')
            changeOrgOrt(organization.Post_town || '')
            changeFaktOrt(organization.Billing_post_town || '')
            changeOrgEmail(organization.Email || '')
            changeFaktEmail(organization.Billing_email || '')
            changeOrgTel(organization.Phone || '')
            changeFaktTel(organization.Billing_Phone || '')
        }
    },[organization])
    useEffect(()=>{
        if(personnummer.length!==6 ||personnummer.length!==8) {
            changeFornamn( '')
            changeEfternamn( '')
            changeEmail( '')
            changeTel( '')
            changeBefattning( '')
            changeOrganisation( '')
            changeOrgNr( '')
            changeOrgAddress( '')
            changeFaktAddress( '')
            changeOrgEV( '')
            changeFaktEV( '')
            changeOrgPostnummer( '')
            changeFaktPostnummer( '')
            changeOrgOrt( '')
            changeFaktOrt( '')
            changeOrgEmail( '')
            changeFaktEmail('')
            changeOrgTel( '')
            changeFaktTel( '')
        }
    },[personnummer])
    const changePersonalNumber = async (value) => {
        try {
            setPersonnummer(value);
            const data = await requestUser(value);
            setCreator(data);
            if (data?.OrganizationID) {
                const organizationItem = await requestOrganization(data.OrganizationID);
                setOrganization(organizationItem);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const changeFornamn = (value) => {
        setFornamn(value)
    }
    const changeEfternamn = (value) => {
        setEfternamn(value)
    }
    const changeEmail = (value) => {
        setEmail(value)
    }
    const changeTel = (value) => {
        setTelNr(value)
    }
    const changeBefattning = (value) => {
        setBefattning(value)
    }
    const changeOrganisation = (value) => {
        if (organisation === orgNr) {
            setOrgNr(value)
        }
        setOrganisation(value)
    }
    const changeOrgNr = (value) => {
        setOrgNr(value)
    }
    const changeOrgAddress = (value) => {
        if (orgAdress1 === fakturAdress1) {
            setFakturAdress1(value)
        }
        setOrgAdress1(value)
    }
    const changeFaktAddress = (value) => {
        setFakturAdress1(value)
    }
    const changeOrgPostnummer = (value) => {
        if (orgPostnummer === fakturPostnummer) {
            setFakturPostnummer(value)
        }
        setOrgPostnummer(value)
    }
    const changeFaktPostnummer = (value) => {
        setFakturPostnummer(value)
    }
    const changeOrgEV = (value) => {
        if (orgEv === fakturEv) {
            setFakturEv(value)
        }
        setOrgEv(value)
    }
    const changeFaktEV = (value) => {
        setFakturEv(value)
    }
    const changeOrgOrt = (value) => {
        if (orgOrt === fakturgOrt) {
            setFakturOrt(value)
        }
        setOrgOrt(value)
    }
    const changeFaktOrt = (value) => {
        setFakturOrt(value)
    }
    const changeOrgEmail = (value) => {
        if (orgEmail === fakturEmail) {
            setFakturEmail(value)
        }
        setOrgEmail(value)
    }
    const changeFaktEmail = (value) => {
        setFakturEmail(value)
    }
    const changeOrgTel = (value) => {
        if (orgTel === fakturTel) {
            setFakturTel(value)
        }
        setOrgTel(value)
    }
    const changeFaktTel = (value) => {
        setFakturTel(value)
    }
    const changeReference = (value) => {
        setReferens(value)
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
            <div className={style.container}>
                <h2>Beställare</h2>
                <div>
                    <label>Personnummer</label>
                    <input type={'text'} onChange={e => changePersonalNumber(e.target.value)} style={status==='success'?{}:styleBorderRed}/>
                </div>
                {personnummer.length > 0 && <div>
                    <div>
                        <div className={style.nameContainer}>
                            <div>
                                <label>Förnamn </label>
                                <input type={'text'} value={fornamn} onChange={e => changeFornamn(e.target.value)} style={fornamn.length===0?styleBorderRed:{}}/>
                            </div>
                            <div>
                                <label>Efternamn </label>
                                <input type={'text'} value={efternamn} onChange={e => changeEfternamn(e.target.value)} style={efternamn.length===0?styleBorderRed:{}}/>
                            </div>
                        </div>
                        <div>
                            <label>E-mail </label>
                            <input type={'text'} value={email} onChange={e => changeEmail(e.target.value)} style={email.length===0?styleBorderRed:{}}/>
                        </div>
                        <div>
                            <label>Tel.nr. </label>
                            <input type={'text'} value={telNr} onChange={e => changeTel(e.target.value)} style={telNr.length===0?styleBorderRed:{}}/>
                        </div>
                        <div>
                            <label>Befattning </label>
                            <input type={'text'} value={befattning} onChange={e => changeBefattning(e.target.value)} style={befattning.length===0?styleBorderRed:{}}/>
                        </div>
                    </div>
                    <div className={style.organizationContainer}>
                        <div>
                            <div>
                                <label>Organisation </label>
                                <input type={'text'} value={organisation} onChange={e => changeOrganisation(e.target.value)} style={fornamn.length===0?styleBorderRed:{}}/>
                            </div>
                            <label>Org. adress: </label>
                            <div className={style.organizationContainerItem}>
                                <input type={'text'} placeholder={'Adress1'} value={orgAdress1}
                                       onChange={e => changeOrgAddress(e.target.value)} style={orgAdress1.length===0?styleBorderRed:{}}/>

                                <input type={'text'} placeholder={'ev. c/o'} value={orgEv}
                                       onChange={e => changeOrgEV(e.target.value)}/>
                                <div className={style.address}>
                                    <input type={'text'} placeholder={'Postnummer'} value={orgPostnummer}
                                           onChange={e => changeOrgPostnummer(e.target.value)} style={orgPostnummer.length===0?styleBorderRed:{}}/>
                                    <input type={'text'} placeholder={'Ort'} value={orgOrt}
                                           onChange={e => changeOrgOrt(e.target.value)} style={orgOrt.length===0?styleBorderRed:{}}/>
                                </div>
                                <input type={'text'} placeholder={'E-mail'} value={orgEmail}
                                       onChange={e => changeOrgEmail(e.target.value)} style={orgEmail.length===0?styleBorderRed:{}}/>

                                <input type={'text'} placeholder={'Tel nr'} value={orgTel}
                                       onChange={e => changeOrgTel(e.target.value)} style={orgTel.length===0?styleBorderRed:{}}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>Org.nr. </label>
                                <input type={'text'} value={orgNr} onChange={e => changeOrgNr(e.target.value)} style={orgTel.length===0?styleBorderRed:{}}/>
                            </div>
                            <label>Faktureringsadress: </label>
                            <div className={style.organizationContainerItem}>
                                <input type={'text'} placeholder={'Adress1'} value={fakturAdress1}
                                       onChange={e => changeFaktAddress(e.target.value)} style={fakturAdress1.length===0?styleBorderRed:{}}/>

                                <input type={'text'} placeholder={'ev. c/o'} value={fakturEv}
                                       onChange={e => changeFaktEV(e.target.value)}/>
                                <div className={style.address}>
                                    <input type={'text'} placeholder={'Postnummer'} value={fakturPostnummer}
                                           onChange={e => changeFaktPostnummer(e.target.value)} style={fakturPostnummer.length===0?styleBorderRed:{}}/>
                                    <input type={'text'} placeholder={'Ort'} value={fakturgOrt}
                                           onChange={e => changeFaktOrt(e.target.value)} style={orgTel.length===0?styleBorderRed:{}}/>
                                </div>
                                <input type={'text'} placeholder={'E-mail'} value={fakturEmail}
                                       onChange={e => changeFaktEmail(e.target.value)} style={fakturEmail.length===0?styleBorderRed:{}}/>

                                <input type={'text'} placeholder={'Tel nr'} value={fakturTel}
                                       onChange={e => changeFaktTel(e.target.value)} style={fakturTel.length===0?styleBorderRed:{}}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Ev.referens: </label>
                            <input type={'text'} value={referens} onChange={e => changeReference(e.target.value)}/>
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
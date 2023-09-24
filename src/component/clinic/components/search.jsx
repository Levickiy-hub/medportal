import React, {useState} from 'react';
import style from './search.module.css'
const Search = ({changeSearch}) => {
    const [value,setValue] = useState('')
    const onChange=(e)=>{
        setValue(e.target.value)
        changeSearch(e.target.value)
    }
    return (
        <>
           <input type={'text'} value ={value} onChange={e=>onChange(e)} className={style.searchInput} placeholder={'Sök på patientens personnummer, beställningsnummer eller organisationsnummer'}/>
        </>
    );
};

export default Search;
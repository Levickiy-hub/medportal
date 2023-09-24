import React from 'react';
import AuthForm from "./component/AuthForm";
import style from './auth.module.css'
const Index = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.block}>
            <div className={style.divText}>
                <h1 className={style.text}>Välkommen till Medportal</h1>
            </div>
        <AuthForm/>
            </div>
        </div>
    )
};

export default Index;
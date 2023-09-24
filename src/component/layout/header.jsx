import React from 'react';
import style from './header.module.css'
const Header = () => {
    return (
        <div className={style.mainBlock}>
            <h1>Medportal</h1>
            <div className={style.buttonBlock}>
                <h3>För kliniken</h3>
                <h3>Kundtjänst</h3>
                <h3>Om portalen</h3>
            </div>
        </div>
    );
};

export default Header;
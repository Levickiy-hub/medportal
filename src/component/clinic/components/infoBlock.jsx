import React from 'react';
import style from './info.module.css'
const InfoBlock = () => {
    return (
        <div className={style.mainBlock}>
            <div>
            <h1>medportal</h1>

            <div>
                <h2>
                    Hem
                </h2>
                <h2>
                    Skapa beställning
                </h2>
            </div>
            </div>
            <div>
            <div>
                <h2>
                    Kundtjänst
                </h2>
            </div>
            <div>
                <h2>Älvsjö Tandvård</h2>
               <h2>Martin Kavaliou, ekonomiassistent</h2>
            </div>
            </div>
        </div>
    );
};

export default InfoBlock;
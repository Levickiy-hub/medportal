import React from 'react';

const Signera = () => {
    return (
        <div>
            <h1>Hur vill du få tillgång till beställda dokument?</h1>
            <input type={'checkbox'}/><label>via SMS</label>
            <input type={'checkbox'}/><label>via E-mail</label>
            <input type={'checkbox'}/><label>3</label>
        </div>
    );
};

export default Signera;
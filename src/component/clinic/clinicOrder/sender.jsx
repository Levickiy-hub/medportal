import React from 'react';
import style from './sender.module.css'
const Sender = ({sender}) => {
    console.log(sender)
    return (
        <div className={style.container}>
            <div>
                <h1>{sender?.First_name} {sender?.Last_name}</h1>
                <h1>{sender?.Position}</h1>
                <h1>{sender?.Mob_number}</h1>
                <h1>{sender?.Email}</h1>
            </div>
            <div>
                <h1> Org.namn: {sender?.Organization_name}</h1>
                <h1> Org.nr: {sender?.Organization_number}</h1>
                <h1> Adress:{sender?.Address1}</h1>
                <h1>Email:{sender?.org_Email}</h1>
                <h1>Tel nr:{sender?.org_Phone}</h1>
            </div>
        </div>
    );
};

export default Sender;
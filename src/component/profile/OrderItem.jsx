import React from 'react';
import style from "./order.module.css";

const OrderItem = ({item}) => {
    const getStatusStyle = (status) => {
        if (status === 'wait') {
            return { backgroundColor: 'yellow' };
        } else if (status.includes('Klart ')) {
            return { backgroundColor: 'green' };
        } else {
            return { backgroundColor: 'red' };
        }
    };
    function formatDateString(inputString) {
        const inputDate = new Date(inputString);
        return inputDate.toISOString().replace(/T/, ' ').substr(0, 16);
    }

    return (
        <div className={style.orderWrapper}>
            <div className={style.orderName}>
                <a href={`/profile/order/${item.id}`}>{item.organizationName}</a>
                <a href={`/profile/order/${item.id}`}>{`${item.First_name} ${item.Last_name}`}</a>
            </div>
            <div className={style.dateWrapper}>
                <div className={style.statusStr}>
                    <div className={style.statusCircle} style={getStatusStyle(item.Status)}/>
                    <h4 className={style.status}>{item.Status}</h4>
                </div>
                <div>
                    <h3>Дата создания: {formatDateString(item.createdAt)}</h3>
                    <h3>Дата изминения: {formatDateString(item.updatedAt)}</h3>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;
import React from 'react';

const DateWrapper = ({ date = '', value = [], event }) => {
    const style = {
        position: 'fixed',
        top: event.clientY-20,
        left: event.clientX+10,
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
    };
    function countOccurrences(arr, target) {
        return arr.reduce((count, element) => {
            return element === target ? count + 1 : count;
        }, 0);
    }

    return (
        <div style={style}>
            {date && <div>Date: {date}</div>}
            {value && <div>{countOccurrences(value, date)}</div>}
        </div>
    );
};

export default DateWrapper;

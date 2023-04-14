import React from 'react';
import FirstBlock from "./block/firstBlock";
import SecondBlock from "./block/secondBlock";
import FourthBlock from "./block/fourthBlock";
import FifthBlock from "./block/fifthBlock";
import ThirdBlock from "./block/ thirdBlock";

const Index = () => {
    return (
        <div>
            <div><FirstBlock/></div>
            <div><SecondBlock/></div>
            <div><ThirdBlock/></div>
            <div><FourthBlock/></div>
            <div><FifthBlock/></div>
        </div>
    );
};

export default Index;
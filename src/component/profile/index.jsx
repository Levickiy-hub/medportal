import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import Order from "./Order";
import Clinic from "./Clinic";
import Informations from "./Informations";
import style from './index.module.css'

const Index = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const navigate = useNavigate(); // Инициализируем useNavigate

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/authorization');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>
            <div className={style.wrapper}>
                <Informations/>
                <div>
                    {/*<Clinic/>*/}
                    <Order/>
                </div>
            </div>
            <button>request order</button>
        </div>
    );
};

export default Index;

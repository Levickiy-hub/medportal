import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHttp} from "../../API";
import style from './information.module.css'
import {ReactComponent as UserIcon} from '../../icon/userIcon.svg'
import {ReactComponent as CityIcon} from '../../icon/cityIcon.svg'
import {ReactComponent as PhoneIcon} from '../../icon/phoneIcon.svg'
import {ReactComponent as EmailPhone} from '../../icon/emailIcon.svg'

const Informations = () => {
    const [user,setUser] = useState(useSelector(state => state.user));
    const [organization, setOrganization] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(null);

    const dispatch = useDispatch();
    const {request}=useHttp()

    useEffect(()=>{
        if(user?.OrganizationID){
            request('/organizations/'+user.OrganizationID,'GET').then(data =>{
                setOrganization(data)
            })
        }
    },[user])
    useEffect(()=>{
        if(user){
            setEditedUser({...user})
        }
    },[user])


    const changeIsEdit =()=>{
        setIsEditing(prev=>!prev)
    }

    const closeEdit =()=>{
        setEditedUser(user)
        changeIsEdit()
    }
    const editHandler = (e, name) => {
        const value = e.target.value;

        setEditedUser(prev => ({
            ...prev,
            [name]: value // Используем динамический ключ на основе переданного имени поля
        }));
    };

    function saveEdit() {
        const userId = user.id;
        request('/users/'+userId,'PUT',editedUser,'Успешно заменено','При редактировании произошла ошибка').then(data =>{
            setUser(data)
            dispatch({ type: 'SET_OR_UPDATE_USER', payload: { ...data } });
        })
    }

    const userData= <>
        <div className={style.strWithIcon}>
            <UserIcon style = {{width:'20px',height:'20px'}}/>
            <h1 className={`${style.textStr} ${style.textName}` }>{user?.First_name} {user?.Last_name}</h1>
        </div>
        <div className={style.strWithIcon}>
            <CityIcon style = {{width:'12px',height:'12px'}}/>
            <h4 className={`${style.textStr} ${style.textDopInfo}` }>{user?.Post_town}</h4>
        </div>
        <div className={style.strWithIcon}>
            <PhoneIcon style = {{width:'12px',height:'12px'}}/>
            <h4 className={`${style.textStr} ${style.textDopInfo}` }>{user?.Mob_number}</h4>
        </div>
        <div className={style.strWithIcon}>
            <EmailPhone style = {{width:'12px',height:'12px'}}/>
            <h4 className={`${style.textStr} ${style.textDopInfo}` }>{user?.Email}</h4>
        </div>
        <h1 className={`${style.textStr} ${style.textDopInfo}`}>{organization?.Organization_name}</h1>
        <button className={`${style.buttonInformation} ${style.buttonEdit}`} onClick={()=>changeIsEdit()}>edit profile</button>

    </>

    const editUserData = (
        <>
            name
            <input type={'text'}
                   value={editedUser?.First_name || ''}
                   onChange={e => editHandler(e, 'First_name')}
                   className={style.editInput}
            />
            last name
            <input type={'text'}
                   value={editedUser?.Last_name || ''}
                   onChange={e => editHandler(e, 'Last_name')}
                   className={style.editInput}
            />
            city
            <input type={'text'}
                   value={editedUser?.Post_town || ''}
                   onChange={e => editHandler(e, 'Post_town')}
                   className={style.editInput}
            />
            phone number
            <input type={'text'}
                   value={editedUser?.Mob_number || ''}
                   onChange={e => editHandler(e, 'Mob_number')}
                   className={style.editInput}
            />
            email
            <input type={'text'}
                   value={editedUser?.Email || ''}
                   onChange={e => editHandler(e, 'Email')}
                   className={style.editInput}
            />
            <h1>{organization?.Organization_name}</h1>
            <div>
                <button onClick={()=>saveEdit()} className={`${style.buttonInformation} ${style.halfButton} ${style.buttonSave}`}>Save</button>
                <button onClick={()=>closeEdit()} className={`${style.buttonInformation} ${style.halfButton}`}>Cancel</button>
            </div>
        </>
    );

    return (
        <div className={`${style.informationBlock} ${style.informationWrapping}`}>
            {!isEditing ? userData : editUserData}
        </div>
    );
};

export default Informations;
import { createStore } from 'redux';

// Начальное состояние
const storedUser = JSON.parse(localStorage.getItem("user"));
const initialState = {
    user: storedUser||null,
    isLoggedIn: !!storedUser,
};

// Редьюсер
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true,
            };
        case 'SET_OR_UPDATE_USER':
            const user = {...action.payload}
            localStorage.setItem("user", JSON.stringify(user));
            return {
                ...state,
                user: user,
                isLoggedIn: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

// Создание хранилища
const store = createStore(rootReducer);

export default store;

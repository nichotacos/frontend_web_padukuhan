/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";


export const UserContext = createContext({
    userData: {},
    setUser: () => { }
});

function userReducer(state, action) {
    if (action.type === 'SET_USER') {
        return {
            ...state,
            userData: action.payload
        }
    }
}

export default function UserContextProvider({ children }) {
    const [userState, userDispatch] = useReducer(
        userReducer,
        {
            userData: JSON.parse(localStorage.getItem('user')) || {}
        }
    );

    function handleSetUser(data) {
        userDispatch({
            type: 'SET_USER',
            payload: data
        });
    }

    const ctxValue = {
        userData: userState.userData,
        setUser: handleSetUser
    }

    return (
        <UserContext.Provider value={ctxValue}>
            {children}
        </UserContext.Provider>
    )
}


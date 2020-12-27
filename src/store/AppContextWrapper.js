import React, { useReducer } from 'react';
import {AppContext}   from './AppContext';    


const initialState = {
    currentSection:"section1"
    
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "changeSection":
           // console.log('state', state)
            state.currentSection = action.payload.section
            return {
                ...state
            }
        default :
        return state;
    }
}

function AppContextWrapper (props){
    const [state, dispatch] = useReducer( reducer, initialState)

    return (
        <AppContext.Provider value={{appState: state, appDispatch: dispatch}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextWrapper
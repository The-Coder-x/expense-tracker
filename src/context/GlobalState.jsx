import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer'
//Initail State

const initialState = {
    transactions:[
        {id:1,text:'Flower',amount:-20},
        {id:2,text:'Salary',amount:52},
        {id:3,text:'Book',amount:45},
        {id:4,text:'Camera',amount:520},
    ]
}



export const GlobalContext  = createContext(initialState);

export const GlobalProvider = ({children}) =>{
const [state,dispatch] = useReducer(AppReducer,initialState)
return (
  <GlobalContext.Provider value={{ transactions:state.transactions }}>
    {children}
  </GlobalContext.Provider>
);
}

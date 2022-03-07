import React, { useContext, useReducer } from 'react';
import reducer from './reducers';
const StoreContext = React.createContext();
const DispatchContext = React.createContext();
export const useStore = () => {
    return useContext(StoreContext);
}
export const useDispatcher = () => {
    return useContext(DispatchContext);
}
export default (props) => {
    const [store, dispatch] = useReducer(reducer, {});
    return (
        <StoreContext.Provider value={store}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </StoreContext.Provider>
    );
}
import { ActionTypes } from "../Constants/constant";
import { useDispatcher } from "../redux";
const loginAction=(data)=>
{
    const dispatch=useDispatcher()
    dispatch({ type: ActionTypes.LOGGED_IN, payload: data})
}
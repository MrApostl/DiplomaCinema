import { IUser, IUserState } from "../../types";
import { SET_USER } from "../action-types/users-action-types";

const initialState = {
    user: {} as IUser
}

export const usersReducer = (state: IUserState = initialState, action: any) =>{
    switch(action.type){
        case SET_USER:{
            const { user } = action;
            
            return ({
                ...state,
                user, 
            })
        }

        case 'LOGOUT_USER':{
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');

            return ({
                ...state,
                user: {} as IUser
            });
        };
            
        default: {
            return state;
        }
    }
}
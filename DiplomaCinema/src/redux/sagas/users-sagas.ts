//email: uefed@mailto.plus
//pass: TAYu5TTD
//user: ssdgdd5fergQR2BtV7d
//token: http://studapi.teachmeskills.by//activate/ODQyMg/c8xmd0-5702fd8fb61a423a3ad832c935d7039d

import { put, takeEvery } from "redux-saga/effects";
import { IUserState } from "../../types";
import { setUser } from "../action-creaters/users-action-creaters";
import { CONFIRM_USER, CREATE_JWT, CREATE_USER, GET_USER } from "../action-types/users-action-types";
import { getToken } from "../../helpers/_utils";

function* fetchCreateUser(action: any){
    const { user } = action;

    console.log(user);
    
    const url = `https://studapi.teachmeskills.by/auth/users/`;
    const response: Response = yield fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    if(response.status === 201 || response.status === 204){
        window.location.pathname = './registrationConfirm';
    }
}

function* fetchConfirmUser(action: any){
    const { activateOptions } = action;
    
    const url = `https://studapi.teachmeskills.by/auth/users/activation/`;
    const response: Response = yield fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(activateOptions),
    });

    console.log(response, activateOptions);
    
    if( response.status === 201 || response.status === 204 || response.status === 403){
        window.location.pathname = './registrationSuccess';
    }
}

function* fetchCreateJwt(action: any){
    const { user } = action;

    console.log(user);
    
    const url = `https://studapi.teachmeskills.by/auth/jwt/create/`;
    const response: Response = yield fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    if( response.status === 200){
        const { access, refresh } = yield response.json();
        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);

        window.location.assign('/movies');
    }
}

function* fetchGetUser(){
    const token: string = yield getToken();
    
    const url = `https://studapi.teachmeskills.by/auth/users/me/`;
    const response: Response = yield fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if( response.status === 200){
        const user: IUserState = yield response.json();
        yield put(setUser(user));
    }
}

export function* watcherUsers() {
    yield takeEvery(CREATE_USER, fetchCreateUser)
    yield takeEvery(CONFIRM_USER, fetchConfirmUser)
    yield takeEvery(CREATE_JWT, fetchCreateJwt)
    yield takeEvery(GET_USER, fetchGetUser)
}
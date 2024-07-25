import { IActivateOptions, ISign, IUserState } from "../../types"
import { CONFIRM_USER, CREATE_JWT, CREATE_USER, GET_USER, SET_USER } from "../action-types/users-action-types"

export const createUser = (user: ISign) =>({
    type: CREATE_USER,
    user,
}) as const

export const confirmUser = (activateOptions: IActivateOptions) =>({
    type: CONFIRM_USER,
    activateOptions,
}) as const

export const createJwt = (user: ISign) =>({
    type: CREATE_JWT,
    user,
}) as const

export const getUser = () =>({
    type: GET_USER,
}) as const

export const setUser = (user: IUserState) =>({
    type: SET_USER,
    user,
}) as const

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
}) as const
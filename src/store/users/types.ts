export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UserState {
    users: User[];
}

export enum UserActionType {
    FETCH_USER = "FETCH_USER",
}

export type UserAction = UserActionType;

export interface UserActionInterface {
    type: UserActionType;
    payload: any;
}
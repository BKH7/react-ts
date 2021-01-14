import { UserActionInterface, UserActionType, UserState } from './types';

const initialState: UserState = {
    users: [],
}

export default function userReducer(state = initialState, action: UserActionInterface): UserState {
    switch (action.type) {
        case UserActionType.FETCH_USER:
            return {
                users: [...state.users, action.payload],
            };
        default:
            return state;
    }
}
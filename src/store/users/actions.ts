import { useDispatch } from "react-redux";

import { axios } from "../../services";
import { UserActionType, User, UserActionInterface } from './types';

const dispatch = useDispatch();

export async function fetchUsers(): Promise<void> {
  const response = await axios.get<User[]>("/users");
  dispatch(fetchUser(response.data));
}

export function fetchUser(user: User[]): UserActionInterface {
    return {
        type: UserActionType.FETCH_USER,
        payload: user
    };
}
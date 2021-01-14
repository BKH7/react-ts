import { UserActionType, User, UserActionInterface } from './types';

export function fetchUser(user: User[]): UserActionInterface {
  return {
    type: UserActionType.FETCH_USER,
    payload: user,
  }
}

export function addUser(user: User): UserActionInterface {
  return {
    type: UserActionType.ADD_USER,
    payload: user,
  }
}

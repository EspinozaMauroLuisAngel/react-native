import { createContext } from 'react';
import { IUser } from './IUser';
import { PropsContext } from './User';

const props : PropsContext = {
    user : new User(0, '', ''),
    updateUser : function (user: IUser) {
        return;
    }
}

export const UserContext = createContext<PropsContext>(props);
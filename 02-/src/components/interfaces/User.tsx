import { IUser } from "./IUser";

export interface PropsContext {
    user: IUser,
    updateUser: (user: IUser ) => void
}
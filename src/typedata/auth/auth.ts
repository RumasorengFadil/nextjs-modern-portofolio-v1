import { User } from "./user";

export interface Auth {
    user?: User,
    access_token?: string,
    refresh_token?: string,
    expires_in?: string,
}

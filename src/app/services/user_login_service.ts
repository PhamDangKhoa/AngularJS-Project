import { Injectable } from '@angular/core';
import { user_login } from "../models/mock_user_login";
@Injectable()
export class UserLoginService {

    constructor() { }
    get_user_login()
    {
        return user_login;
    }
}
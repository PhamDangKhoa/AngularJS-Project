import { Injectable } from '@angular/core';
import { ds_menu } from "../models/mock_menu";
@Injectable()
export class MenuService {

    constructor() { }
    lay_ds_menu()
    {
        return ds_menu;
    }
}
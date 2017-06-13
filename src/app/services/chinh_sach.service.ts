import { Injectable } from '@angular/core';
import { ds_chinh_sach } from "../models/mock_chinh_sach";
@Injectable()
export class ChinhSachService {

    constructor() { }
    lay_ds_chinh_sach()
    {
        return ds_chinh_sach;
    }
}
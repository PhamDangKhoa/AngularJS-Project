import { Injectable } from '@angular/core';
import { ds_don_hang } from "../models/mock_don_hang";
@Injectable()
export class DonHangService {

    constructor() { }
    lay_ds_don_hang()
    {
        return ds_don_hang;
    }
}
import { Injectable } from '@angular/core';
import { ds_nguoi_dung } from "../models/mock_nguoi_dung";
@Injectable()
export class NguoiDungService {

    constructor() { }
    lay_ds_nguoi_dung()
    {
        return ds_nguoi_dung;
    }
}
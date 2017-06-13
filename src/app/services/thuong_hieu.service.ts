import { Injectable } from '@angular/core';
import { ds_thuong_hieu } from "../models/mock_thuong_hieu";
@Injectable()
export class ThuongHieuService {

    constructor() { }
    lay_ds_thuong_hieu(){
        return ds_thuong_hieu;
    }
}
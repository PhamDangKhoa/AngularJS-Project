import { Injectable } from '@angular/core';
import { ds_gio_hang } from "../models/mock_gio_hang";
import { GioHang } from "../models/gio_hang";
@Injectable()
export class GioHangService {
    constructor() { 
    }
    lay_ds_gio_hang()
    {
        return ds_gio_hang;
    }
    reset_ds_gio_hang()
    {
        let len=ds_gio_hang.length;
        for(let i=0;i<len;i++)
        {
            ds_gio_hang.pop();
        }
    }
    set_ds_gio_hang(ds_gio_hang_moi:GioHang[])
    {
        this.reset_ds_gio_hang();
        for(let i=0;i<ds_gio_hang_moi.length;i++)
        {
           ds_gio_hang.push(ds_gio_hang_moi[i]);
        }
    }
}
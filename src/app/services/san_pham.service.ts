import { Injectable } from '@angular/core';
import { SanPham } from "../models/san_pham";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class SanPhamService {
    constructor(private http:Http) { }
    
    //lay ds san pham promise
    lay_ds_san_pham_promise():Promise<SanPham[]>
    {
        return this.http.get("http://dev-er.com/service_api_ban_hang_dien_tu/api_service_san_pham.php")
                        .toPromise()
                        .then(data=>data.json() as SanPham[]);
    }
}
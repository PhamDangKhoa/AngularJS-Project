import { Injectable } from '@angular/core';
import { QuangCao } from "../models/quang_cao";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class QuangCaoService {

    constructor(private http:Http) { }
    //lay danh sach quang cao promise
    lay_danh_sach_quang_cao_promise():Promise<QuangCao[]>
    {
        return this.http.get("http://dev-er.com/service_api_ban_hang_dien_tu/api_slide_banner.php")
                        .toPromise()
                        .then(data=>data.json() as QuangCao[]);
    }
}


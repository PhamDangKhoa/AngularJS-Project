import { Component, OnInit } from '@angular/core';
import { NguoiDung } from "../../models/nguoi_dung";
import { NguoiDungService } from "../../services/nguoi_dung.service";
@Component({
    selector: 'module-register',
    templateUrl: './module_register.component.html',
})
export class ModuleRegisterComponent implements OnInit {
    constructor(private nguoi_dung_service:NguoiDungService) { }
    nguoi_dung : NguoiDung = new NguoiDung("","","","","","","","");
    thong_bao:string;
    ngOnInit() { }
    gui_form_dang_ky()
    {
        this.nguoi_dung_service.lay_ds_nguoi_dung().push(this.nguoi_dung);
        this.thong_bao="Register Success";
        console.log(this.nguoi_dung);
    }
}
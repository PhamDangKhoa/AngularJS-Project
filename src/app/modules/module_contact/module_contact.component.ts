import { Component, OnInit } from '@angular/core';
import { NguoiDung } from "../../models/nguoi_dung";
import { LienHe } from "../../models/lien_he";
import { LienHeService } from "../../services/lien_he.service";
@Component({
    selector: 'module-contact',
    templateUrl: './module_contact.component.html',
})
export class ModuleContactComponent implements OnInit {
    constructor(private lien_he_service:LienHeService) { }
    thong_bao:string="";
    nguoi_dung:NguoiDung=new NguoiDung("","","","","","","","");    
    noi_dung_lien_he:string="";
    lien_he:LienHe=new LienHe();
    ngOnInit() {
       this.lien_he.nguoi_dung=this.nguoi_dung;
       this.lien_he.noi_dung_lien_he=this.noi_dung_lien_he;
     }
    hien_thi_thong_bao()
    {
        this.thong_bao="Thank you for your interestig to us";
        console.log(this.lien_he);
    }


    user: NguoiDung;

}


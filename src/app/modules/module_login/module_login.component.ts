import { Component, OnInit } from '@angular/core';
import { NguoiDung } from "../../models/nguoi_dung";
import { ds_nguoi_dung } from "../../models/mock_nguoi_dung";
import { NguoiDungService } from "../../services/nguoi_dung.service";
import { UserLogin } from "../../models/user_login";
import { UserLoginService } from "../../services/user_login_service";
declare var $:any;
@Component({
    selector: 'module-login',
    templateUrl: './module_login.component.html',
})
export class ModuleLoginComponent implements OnInit {
    constructor(private nguoi_dung_service:NguoiDungService,private user_login_service:UserLoginService) { }
    nguoi_dung:NguoiDung=new NguoiDung("","","","","","","","");
    ds_nguoi_dung:NguoiDung[];
    user_login:UserLogin;
    thong_bao:string="";
    ngOnInit() { 
        this.ds_nguoi_dung=this.nguoi_dung_service.lay_ds_nguoi_dung();
        this.user_login=this.user_login_service.get_user_login();
    }
    gui_form_dang_nhap()
    {
        
        let ds_nguoi_dung=this.ds_nguoi_dung;
        let nguoi_dung =this.nguoi_dung;
        for(let i=0;i<ds_nguoi_dung.length;i++)
        {
            if(nguoi_dung.ten_dang_nhap==ds_nguoi_dung[i].ten_dang_nhap&&nguoi_dung.mat_khau==ds_nguoi_dung[i].mat_khau)
            {
                this.user_login.ten_dang_nhap=nguoi_dung.ten_dang_nhap;
                this.user_login.mat_khau=nguoi_dung.mat_khau;
                $("#my_account").click();
                $("#thong_bao").click();
                return true;
            }
            
        }
        return false;
    }
    hien_thi_ket_qua()
    {
        this.thong_bao="Login Success";
    }
}
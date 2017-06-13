import { Component, OnInit,trigger,state,style,transition,animate } from '@angular/core';
import { MenuService } from "../../services/menu.service";
import { GioHangService } from "../../services/gio_hang.service";
import { GioHang } from "../../models/gio_hang";
import { SanPham } from "../../models/san_pham";
import { SanPhamService } from "../../services/san_pham.service";
import { UserLogin } from "../../models/user_login";
import { UserLoginService } from "../../services/user_login_service";
let bien_toan_cuc =require("../../models/mock_gio_hang");
declare var $:any;

@Component({
    selector: 'module-header',
    templateUrl: './module_header.component.html',
    animations:[
        trigger("hieu_ung_menu",[
            state("an",style({
                height:0,
                padding:0,
            })),
            state("hien",style({
                height:"120px",
                padding:"10px",
            })),
            transition("an=>hien",animate("3s ease")),
            transition("hien=>an",animate("3s ease")),
        ])
    ]
})
export class ModuleHeaderComponent implements OnInit {
    constructor(private menu_service:MenuService,private gio_hang_service:GioHangService,
                private san_pham_service:SanPhamService,private user_login_service:UserLoginService) { }
    array_menu :any[] ;
    array_cart :GioHang[];
    number_item:number;
    total:number;
    user_login:UserLogin;
    ds_san_pham:SanPham[]=[];
    ds_loai:string[]=["SamSung","Canon","Gigabyte","DELL"];
    search_product_array:SanPham[]=[];
    ngOnInit() {
        this.array_menu=this.menu_service.lay_ds_menu();
        this.array_cart=this.gio_hang_service.lay_ds_gio_hang();
        this.thay_doi_gio_hang();        
        this.user_login=this.user_login_service.get_user_login();
        this.user_login.ten_dang_nhap="My account";        
}
        
    hien_thi_menu(id:number){
        //this.an_hien_menu="hien";
        this.array_menu.forEach((menu)=>{
            if(menu.id==id)
            {
                menu.trang_thai="hien";
            }
            else
            {
                menu.trang_thai="an";
            }
        });
    }
    an_menu(id:number){
        //this.an_hien_menu="an";
        this.array_menu.forEach((menu)=>{
            if(menu.id==id)
            {
                menu.trang_thai="an";
            }
        });
    }

    //----------------------------------hien thi gio hang khi thay doi
    thay_doi_gio_hang()
    {
        let ds_gio_hang=this.gio_hang_service.lay_ds_gio_hang();
        let number_item=ds_gio_hang.length;
        let total=0;
        ds_gio_hang.forEach((gio_hang)=>{            
            total+=gio_hang.so_luong_mua*gio_hang.san_pham.don_gia;
        })
        this.total=total;
        this.number_item=number_item;
    }
    hien_thi_nguoi_dung()
    {
        this.user_login=this.user_login_service.get_user_login();
    }
    thay_doi_loai_san_pham()
    {
        $("#thay_doi_loai_san_pham").click();
    }
}
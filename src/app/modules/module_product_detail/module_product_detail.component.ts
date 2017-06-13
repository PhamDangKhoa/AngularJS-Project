import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";
import { SanPhamService } from "../../services/san_pham.service";
import { SanPham } from "../../models/san_pham";
import 'rxjs/add/operator/switchMap';
import { GioHang } from "../../models/gio_hang";
import { GioHangService } from "../../services/gio_hang.service";
declare var $ :any;

@Component({
    selector: 'module-product-detail',
    templateUrl: './module_product_detail.component.html',
})
export class ModuleProductDetailComponent implements OnInit {
    constructor(private route :ActivatedRoute, private san_pham_service:SanPhamService,private gio_hang_service:GioHangService) {  }
    san_pham:SanPham;
    gio_hang:GioHang=new GioHang();
    ds_gio_hang:GioHang[];
    ds_san_pham:SanPham[]=[];
    ngOnInit() {
        if((this.route.snapshot.params['id_san_pham'])!=null)
        {
            this.san_pham_service.lay_ds_san_pham_promise().then(data=>
            {
                this.ds_san_pham=data;
                this.ds_san_pham.forEach((san_pham)=>{
                if(san_pham.ma==this.route.snapshot.params['id_san_pham']) this.san_pham=san_pham;
            });
            });                        
            this.gio_hang.san_pham=this.san_pham;  
            this.gio_hang.so_luong_mua=1;         
        }       
        this.ds_gio_hang=this.gio_hang_service.lay_ds_gio_hang();
    }
    dat_hang(id_san_pham:number)
    {
        let ds_gio_hang=this.ds_gio_hang;
        let kiem_tra=0;
        for(let i=0;i<ds_gio_hang.length;i++)
        {
            if(ds_gio_hang[i].san_pham.ma==id_san_pham)
            {
                ds_gio_hang[i].so_luong_mua=this.gio_hang.so_luong_mua;
                kiem_tra=1;
            }
        }
        if(kiem_tra==0)
        {
            this.gio_hang.id=ds_gio_hang.length+1;
            this.ds_san_pham.forEach((san_pham)=>{
                if(san_pham.ma==id_san_pham) this.gio_hang.san_pham=san_pham;
            }); 
            ds_gio_hang.push(this.gio_hang);
        }
        this.ds_gio_hang=ds_gio_hang;
        $("#thay_doi_gio_hang").click();
    }    
    thay_doi_chi_tiet_san_pham()
    {
        if((this.route.snapshot.params['id_san_pham'])!=null)
        {
            this.san_pham_service.lay_ds_san_pham_promise().then(data=>
            {
                this.ds_san_pham=data;
                this.ds_san_pham.forEach((san_pham)=>{
                if(san_pham.ma==this.route.snapshot.params['id_san_pham']) this.san_pham=san_pham;
            });
            });                        
            this.gio_hang.san_pham=this.san_pham;  
            this.gio_hang.so_luong_mua=1;         
        }
    }
}
import { Component, OnInit } from '@angular/core';
import { SanPham } from "../../models/san_pham";
import {SanPhamService} from "../../services/san_pham.service";
import { GioHang } from "../../models/gio_hang";
import { GioHangService } from "../../services/gio_hang.service";
import { Params, ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/switchMap';
declare var $:any;
@Component({
    selector: 'module-product',
    templateUrl: './module_product.component.html',
})
export class ModuleProductComponent implements OnInit {
    constructor(private route :ActivatedRoute,private san_pham_service:SanPhamService,private gio_hang_service:GioHangService) { }
    product_array:SanPham[]=[];
    ds_gio_hang:GioHang[];
    ds_san_pham:SanPham[]=[];
    ten_loai:string;
    p:number=1;
    ngOnInit() { 
        if((this.route.snapshot.params['loai'])!=null)
        {
            this.san_pham_service.lay_ds_san_pham_promise().then(data=>{
                this.ds_san_pham=data;
                this.ds_san_pham.forEach((san_pham)=>{
                    if(san_pham.ten_san_pham.includes(this.route.snapshot.params['loai']))
                    {
                        this.product_array.push(san_pham);
                    }
                })
            });
            this.ten_loai=this.route.snapshot.params['loai'];
        }
        else
        {
            this.san_pham_service.lay_ds_san_pham_promise().then(data=>this.product_array=data);
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
                ds_gio_hang[i].so_luong_mua+=1;
                kiem_tra=1;
            }
        }
        if(kiem_tra==0)
        {
            let gio_hang=new GioHang();
            gio_hang.id=ds_gio_hang.length+1;
            this.product_array.forEach((san_pham)=>{
                if(san_pham.ma==id_san_pham) gio_hang.san_pham=san_pham;
            });
            gio_hang.so_luong_mua=1;
            ds_gio_hang.push(gio_hang);
        }
        this.ds_gio_hang=ds_gio_hang;
        $("#thay_doi_gio_hang").click();
     }

     thay_doi_loai_san_pham()
     {
         let len=this.product_array.length;
         for(let i=0;i<len;i++)
         {
             this.product_array.pop();
         }
         if((this.route.snapshot.params['loai'])!=null)
        {
            this.san_pham_service.lay_ds_san_pham_promise().then(data=>{
                this.ds_san_pham=data;
                this.ds_san_pham.forEach((san_pham)=>{
                    if(san_pham.ten_san_pham.toUpperCase().includes(this.route.snapshot.params['loai'].toUpperCase()))
                    {
                        this.product_array.push(san_pham);
                    }
                });
                this.ten_loai=this.route.snapshot.params['loai'];
            });
        }
        else
        {
            this.san_pham_service.lay_ds_san_pham_promise().then(data=>this.product_array=data);
        }
     }

}
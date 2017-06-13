import { Component, OnInit } from '@angular/core';
import { GioHang } from "../../models/gio_hang";
import { GioHangService } from "../../services/gio_hang.service";
import { SanPham } from "../../models/san_pham";
import { SanPhamService } from "../../services/san_pham.service";
declare var $:any;
@Component({
    selector: 'module-cart',
    templateUrl: './module_cart.component.html',
})
export class ModuleCartComponent implements OnInit {
    constructor(private gio_hang_service:GioHangService,private san_pham_service:SanPhamService) { }
    ds_gio_hang:GioHang[];
    total:number;
    ds_san_pham_dang_gan_day:SanPham[]=[];
    ds_san_pham:SanPham[]=[];
    ngOnInit() { 
       this.ds_gio_hang=this.gio_hang_service.lay_ds_gio_hang();
       this.tong_tien();
       this.san_pham_service.lay_ds_san_pham_promise().then(data=>{
           this.ds_san_pham=data;
           let len=this.ds_san_pham.length;
           for(let i=0;i<6;i++)
           {
               this.ds_san_pham_dang_gan_day.push(this.ds_san_pham[i]);
           }
       });      
    }
    thay_doi_so_luong(id_gio_hang:number,doi_tuong_input:any)
    {
        this.ds_gio_hang.forEach((gio_hang)=>{
            if(gio_hang.id==id_gio_hang)
            {
                if(doi_tuong_input.target.value>0 && doi_tuong_input.target.value<=100)
                {
                    gio_hang.so_luong_mua=doi_tuong_input.target.value;
                }
                else
                {
                    doi_tuong_input.target.value=gio_hang.so_luong_mua;
                }
                return;
            }
        });
        $("#thay_doi_gio_hang").click();
        this.tong_tien();
    }
    xoa_gio_hang(id_gio_hang:number)
    {
        let ds_gio_hang:GioHang[]=[];
        this.ds_gio_hang.forEach((gio_hang)=>{
            if(gio_hang.id!=id_gio_hang)
            {
                ds_gio_hang.push(gio_hang);
            }
        });
        this.ds_gio_hang=ds_gio_hang;
        this.gio_hang_service.set_ds_gio_hang(ds_gio_hang);
        $("#thay_doi_gio_hang").click();
        this.tong_tien();
    }
    tong_tien()
    {
        let ds_gio_hang=this.gio_hang_service.lay_ds_gio_hang();
        let san_pham:SanPham;        
        let total=0;
        ds_gio_hang.forEach((gio_hang)=>{            
            total+=gio_hang.so_luong_mua*gio_hang.san_pham.don_gia;
        })
        this.total=total;
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
            this.ds_san_pham.forEach((san_pham)=>{
                if(san_pham.ma==id_san_pham) gio_hang.san_pham=san_pham;
            });
            gio_hang.so_luong_mua=1;
            ds_gio_hang.push(gio_hang);
        }
        this.ds_gio_hang=ds_gio_hang;
        $("#thay_doi_gio_hang").click();
        this.tong_tien();
     }
}
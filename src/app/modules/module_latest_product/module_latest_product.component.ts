import { Component, OnInit } from '@angular/core';
import { SanPhamService } from "../../services/san_pham.service";
import { SanPham } from "../../models/san_pham";
import { GioHang } from "../../models/gio_hang";
import { GioHangService } from "../../services/gio_hang.service";
declare var $:any;


@Component({
    selector: 'module-latest-product',
    templateUrl: './module_latest_product.component.html',
})
export class ModuleLatestProductComponent implements OnInit {
    constructor(private san_pham_service:SanPhamService,private gio_hang_service:GioHangService) { }
    lasted_product_array:SanPham[]=[];
    ds_san_pham:SanPham[]=[];
    ds_gio_hang:GioHang[];
    vitri:number;
    so_slide:number;
    ngOnInit() {
        this.san_pham_service.lay_ds_san_pham_promise().then(data=>
        {
            this.ds_san_pham=data;
            this.ds_san_pham.forEach((san_pham)=>{
                if(san_pham.san_pham_moi==1) this.lasted_product_array.push(san_pham);
            })
        });

        this.ds_gio_hang=this.gio_hang_service.lay_ds_gio_hang();
        this.vitri=0;
        this.getSlideNumber();
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
     }
    next()
    {
        if(this.vitri==this.lasted_product_array.length-this.so_slide)
        {
            this.vitri=this.lasted_product_array.length-this.so_slide;
        }
        else
        {
            this.vitri+=1;
        }        
    }
    prev()
    {
        if(this.vitri<=0)
        {
            this.vitri=0;
        }
        else
        {
            this.vitri-=1;
        }
        
    }
    getSlideNumber()
    {
        let i=0;
        let size= window.getComputedStyle(document.body, '::before')
            .getPropertyValue('content')
            .replace(/["']/g, '');
        switch(size)
        {
            case 'small':
            i=2;
            break;
            case 'medium':
            i=4;
            break;            
            case 'large':
            i=4;
            break;            
            default:
            break;
        }
        this.so_slide=i;
    }
    
}


        // console.log(this.so_slide);
        // console.log(window.getComputedStyle(document.body, '::before')
        //     .getPropertyValue('content')
        //     .replace(/["']/g, ''));
        // console.log(this.so_slide);
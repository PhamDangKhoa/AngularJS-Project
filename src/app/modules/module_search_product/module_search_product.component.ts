import { Component, OnInit } from '@angular/core';
import { SanPhamService } from "../../services/san_pham.service";
import { SanPham } from "../../models/san_pham";
declare var $:any;
@Component({
    selector: 'module-search-product',
    templateUrl: './module_search_product.component.html',
})
export class ModuleSearchProductComponent implements OnInit {
    constructor(private san_pham_service:SanPhamService ) { }
    search_product_array:SanPham[]=[];
    recent_post_product_array:SanPham[]=[];
    ds_san_pham:SanPham[]=[];
    ngOnInit() { 
        this.san_pham_service.lay_ds_san_pham_promise().then(data=>{
            this.ds_san_pham=data;
            for(let i=0;i<6;i++)
            {
                this.recent_post_product_array.push(this.ds_san_pham[i]);
            }
    });
    }
    search_product()
    {
        let len=this.search_product_array.length;
        for(let i=0;i<len;i++)
        {
            this.search_product_array.pop();
        }
            this.san_pham_service.lay_ds_san_pham_promise().then(data=>{
                this.ds_san_pham=data;
                this.ds_san_pham.forEach((san_pham)=>{
                if(san_pham.ten_san_pham.toUpperCase().includes($("#ten_san_pham").val().toUpperCase()))
                {
                    this.search_product_array.push(san_pham);
                }            
            });
        });
    }
    thay_doi_chi_tiet_san_pham()
    {
        this.search_product();
        $("#san_pham_lien_quan").click();
    }
}
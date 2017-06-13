import { Component, OnInit } from '@angular/core';
import { SanPham } from "../../models/san_pham";
import { SanPhamService } from "../../services/san_pham.service";
@Component({
    selector: 'module-favorite-product',
    templateUrl: './module_favorite_product.component.html',
})
export class ModuleFavoriteProductComponent implements OnInit {
    top_sell_product_array:SanPham[]=[];
    recently_view_product_array:SanPham[]=[];
    top_new_product_array:SanPham[]=[];
    ds_san_pham:SanPham[]=[];
    constructor( private san_pham_service:SanPhamService){}

    ngOnInit() { 
        this.san_pham_service.lay_ds_san_pham_promise().then(data=>{
            this.ds_san_pham=data;
            for(let i=0;i<3;i++)
            {
                this.top_sell_product_array.push(this.ds_san_pham[i]);
            }
            for(let i=0;i<3;i++)
            {
                this.recently_view_product_array.push(this.ds_san_pham[i+3]);
            }
            for(let i=0;i<3;i++)
            {
                this.top_new_product_array.push(this.ds_san_pham[i+6]);
            }
        });
    }
}
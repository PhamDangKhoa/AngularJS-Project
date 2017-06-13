import { Component, OnInit } from '@angular/core';
import { ChinhSach } from "../../models/chinh_sach";
import { ChinhSachService } from "../../services/chinh_sach.service";
@Component({
    selector: 'module-promotion',
    templateUrl: './module_promotion.component.html',

})
export class ModulePromotionComponent implements OnInit {
    constructor(private chinh_sach_service:ChinhSachService) { }
    promotion_array:ChinhSach[];
    ngOnInit() { 
        this.promotion_array=this.chinh_sach_service.lay_ds_chinh_sach();
    }
}
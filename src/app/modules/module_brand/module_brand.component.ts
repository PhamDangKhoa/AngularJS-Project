import { Component, OnInit } from '@angular/core';
import { ThuongHieu } from "../../models/thuong_hieu";
import { ThuongHieuService } from "../../services/thuong_hieu.service";
declare var $:any;
@Component({
    selector: 'module-brand',
    templateUrl: './module_brand.component.html',
})
export class ModuleBrandComponent implements OnInit {
    constructor(private thuong_hieu_service:ThuongHieuService) { }
    brander_array:ThuongHieu[];
    vitri:number;
    so_slide:number;
    ngOnInit() { 
        this.brander_array=this.thuong_hieu_service.lay_ds_thuong_hieu();
        this.vitri=0;     
        this.getSlideNumber();
    }
    next()
    {
        if(this.vitri==this.thuong_hieu_service.lay_ds_thuong_hieu().length-this.so_slide)
        {
            this.vitri=this.thuong_hieu_service.lay_ds_thuong_hieu().length-this.so_slide;
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
        // console.log(this.so_slide);
        // console.log(window.getComputedStyle(document.body, '::before')
        //     .getPropertyValue('content')
        //     .replace(/["']/g, ''));
        // console.log(this.so_slide);
    }
}

       
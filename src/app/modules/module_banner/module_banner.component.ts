import { Component, OnInit,trigger,state,style,transition,animate } from '@angular/core';
import { QuangCao } from "../../models/quang_cao";
import { QuangCaoService } from "../../services/quang_cao.service";

@Component({
    selector: 'module-banner',
    templateUrl: './module_banner.component.html',
    animations:[
        trigger("slide_banner",[
            state("0",style({
                opacity:0
            })),
            state("1",style({
                opacity:1
            })),
            transition("0<=>1",animate("2s ease"))
        ])
    ]
})
export class ModuleBannerComponent implements OnInit {
    constructor(private quang_cao_service:QuangCaoService) { }
    current_slide:number=1;
    slider_array:QuangCao[];
    ngOnInit() { 
        this.quang_cao_service.lay_danh_sach_quang_cao_promise().then(data=>{
            this.slider_array=data;
            let len=this.slider_array.length;
            for(let i=0;i<len;i++)
            {
                if(i==0) this.slider_array[i].trang_thai=1;
                else this.slider_array[i].trang_thai=0;
            }
        });
        setInterval(()=>{
            
            
            if(this.current_slide>=this.slider_array.length)
            {
                this.current_slide=0;
            }
            for(let i=0;i<this.slider_array.length;i++)
            {
                if(i==this.current_slide)
                {
                    this.slider_array[i].trang_thai=1;
                }
                else
                {
                    this.slider_array[i].trang_thai=0;
                }
            }
            this.current_slide++;
        },5000);
    } 
    thay_doi_trang_thai(id:number)
    {
        setImmediate(()=>{
            this.current_slide=id-1;
            if(this.current_slide>=this.slider_array.length)
            {
                this.current_slide=0;
            }
            for(let i=0;i<this.slider_array.length;i++)
            {
                if(i==this.current_slide)
                {
                    this.slider_array[i].trang_thai=1;
                }
                else
                {
                    this.slider_array[i].trang_thai=0;
                }
            }
        })
        
        
    }   
}

import { Component, OnInit, trigger,state,style,transition,animate } from '@angular/core';

declare var $:any;


@Component({
    selector: 'module-footer',
    templateUrl: './module_footer.component.html',
    animations:[
        trigger("an_hien_form_chat",[
            state("an",style({
                bottom:"-325px"
                
            })),
            state("hien",style({
                bottom:"10px"
            })),
            transition("an=>hien",animate("3s ease")),
            transition("hien=>an",animate("3s ease")),
        ])
    ]
})
export class ModuleFooterComponent implements OnInit {
    constructor() { }

    doan_chat: string = "";

    mang_noi_dung_chat: any[] = [
        {
            noi_dung: "Hello",
            trang_thai: 0
        },
        {
            noi_dung: "Hi!",
            trang_thai: 1
        },
        {
            noi_dung: "How are you?",
            trang_thai: 0
        }
    ];

    an_hien_form:string="an";

    ngOnInit() { }

    gui_gia_tri(event: any)
    {
        //console.log(event);
        if(event.keyCode == 13)
        {
            //alert("gửi nội dung " + event.target.value + " rồi!");
            // this.doan_chat = event.target.value;
            this.mang_noi_dung_chat.push({noi_dung: event.target.value, trang_thai: 0});

            event.target.value = "";

            setTimeout(() => {
                $(".div_chua_noi_dung").scrollTop($(".ds_chat").height());
            }, 50);
        }
    }
    thay_doi_trang_thai_form()
    {
        if(this.an_hien_form=="an")
        {
            this.an_hien_form="hien";
        }
        else
        {
            this.an_hien_form="an";
        }
    }


}
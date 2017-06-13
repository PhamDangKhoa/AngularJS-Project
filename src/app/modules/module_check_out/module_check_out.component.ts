import { Component, OnInit } from '@angular/core';
import { GioHang } from "../../models/gio_hang";
import { GioHangService } from "../../services/gio_hang.service";
import { SanPham } from "../../models/san_pham";
import { SanPhamService } from "../../services/san_pham.service";
import { DonHang } from "../../models/don_hang";
import { DonHangService } from "../../services/don_hang.service";
import { NguoiDung } from "../../models/nguoi_dung";
import { NguoiDungService } from "../../services/nguoi_dung.service";
declare var $:any;
@Component({
    selector: 'module-check-out',
    templateUrl: './module_check_out.component.html',
})
export class ModuleCheckOutComponent implements OnInit {
    constructor(private gio_hang_service:GioHangService,private san_pham_service:SanPhamService,
                private don_hang_service:DonHangService,private nguoi_dung_service:NguoiDungService) { }
    total:number;
    ds_gio_hang:GioHang[];
    nguoi_dung_1:NguoiDung=new NguoiDung("","","","","","","","");
    nguoi_dung_2:NguoiDung=new NguoiDung("","","","","","","","");
    trang_thai:number;
    don_hang:DonHang;
    ghi_chu:string[];
    hinh_thuc_thanh_toan:string;
    thong_bao:string="";
    ngOnInit() {
        this.tong_tien();
        this.ds_gio_hang=this.gio_hang_service.lay_ds_gio_hang();
        this.trang_thai=0; 
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
    thay_doi_trang_thai()
    {
        if(this.trang_thai==0)
        {
            this.trang_thai=1;
        }
        else
        {
            this.trang_thai=0;
        }
    }
    hinh_thuc_thanh_toan_bacs()
    {
        this.hinh_thuc_thanh_toan="Direct Bank Transfer";
    }
    hinh_thuc_thanh_toan_cheque()
    {
        this.hinh_thuc_thanh_toan="Cheque Payment";
    }
    hinh_thuc_thanh_toan_paypal()
    {
        this.hinh_thuc_thanh_toan="PayPal";
    }

    thanh_toan()
    {
        let value =$("#ship-to-different-address-checkbox").val();
        this.don_hang=new DonHang();        
        if(value==0)
        {
            this.don_hang.nguoi_dung=this.nguoi_dung_1;
                    
        }
        else
        {
            this.don_hang.nguoi_dung=this.nguoi_dung_2;
        }
        this.don_hang.nguoi_dung.ten_dang_nhap=this.don_hang.nguoi_dung.email;
        this.don_hang.ds_gio_hang=this.ds_gio_hang;
        this.don_hang.ghi_chu=$("#order_comments").val();
        this.don_hang.hinh_thuc_thanh_toan=this.hinh_thuc_thanh_toan;  
        let kiem_tra:boolean=false;
        let don_hang=this.don_hang;
        if(this.total!=0 && don_hang.hinh_thuc_thanh_toan!=null && don_hang.nguoi_dung.ho_ten!=""
            && don_hang.nguoi_dung.dia_chi!="" && don_hang.nguoi_dung.email!="" && don_hang.nguoi_dung.so_dien_thoai!=""
            && don_hang.nguoi_dung.mat_khau!="")
            {
                kiem_tra=true;
            }
        if(kiem_tra)
        {
            //dua nguoi dang ky vao danh sach nguoi dung
            this.nguoi_dung_service.lay_ds_nguoi_dung().push(this.don_hang.nguoi_dung); 
            //dua don hang vao ds don hang
            this.don_hang_service.lay_ds_don_hang().push(this.don_hang);   
            this.thong_bao="Thank you for your order";
        }
        else
        {
            this.thong_bao="Your order is invalid"
        }
        console.log(this.thong_bao);
        console.log(this.don_hang);

    }


}
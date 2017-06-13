import { NguoiDung } from "../models/nguoi_dung";
import { GioHang } from "../models/gio_hang";
export class DonHang{
    nguoi_dung:NguoiDung;
    ds_gio_hang:GioHang[];
    ghi_chu:string[];
    hinh_thuc_thanh_toan:string;
}
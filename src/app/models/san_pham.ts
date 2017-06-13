export class SanPham{
    ma:number;
    ten_san_pham:string;
    ma_loai:number;
    mo_ta_tom_tat:string;
    mo_ta_chi_tiet:string;
    don_gia:number;
    hinh_san_pham:string;
    san_pham_moi:number;
    so_lan_xem:number;
    ngay_tao:Date;
    trang_thai:number;
    thong_tin_khuyen_mai:string;
    Compare(a:SanPham,b:SanPham)
    {
        return a.so_lan_xem>b.so_lan_xem?a:b;
    }
}

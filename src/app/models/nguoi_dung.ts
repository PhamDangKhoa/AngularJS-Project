export class NguoiDung{
    ho_ten : string;
    ten_dang_nhap : string;
    mat_khau : string;
    ngay_sinh : string;
    noi_sinh : string;
    email: string;
    so_dien_thoai : string;
    dia_chi:string;
    constructor(ho_ten : string,ten_dang_nhap : string,mat_khau : string,ngay_sinh : string,noi_sinh : string, email: string, so_dien_thoai : string,dia_chi:string){
        this.ho_ten = ho_ten;
        this.ten_dang_nhap = ten_dang_nhap;
        this.mat_khau = mat_khau;
        this.ngay_sinh = ngay_sinh;
        this.noi_sinh = noi_sinh;
        this.email = email;
        this.so_dien_thoai = so_dien_thoai;
        this.dia_chi=dia_chi;
    }
}
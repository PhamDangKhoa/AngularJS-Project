import { RouterModule,Routes } from "@angular/router";
import { TrangChuComponent } from "./pages/trang_chu/trang_chu.component";
import { TrangChiTietComponent } from "./pages/trang_chi_tiet/trang_chi_tiet.component";
import { TrangGioHangComponent } from "./pages/trang_gio_hang/trang_gio_hang.component";
import { TrangSanPhamComponent } from "./pages/trang_san_pham/trang_san_pham.component";
import { TrangThanhToanComponent } from "./pages/trang_thanh_toan/trang_thanh_toan.component";
import { TrangDangKyComponent } from "./pages/trang_dang_ky/trang_dang_ky.component";
import { TrangDangNhapComponent } from "./pages/trang_dang_nhap/trang_dang_nhap.component";
import { TrangLienHeComponent } from "./pages/trang_lien_he/trang_lien_he.component";
const appRoute: Routes = [
    {path:'',component:TrangChuComponent},
    {path:'chitiet',component:TrangChiTietComponent},
    {path:'chitiet/:id_san_pham',component:TrangChiTietComponent},
    {path:'giohang',component:TrangGioHangComponent},
    {path:'sanpham',component:TrangSanPhamComponent},
    {path:'sanpham/:loai',component:TrangSanPhamComponent},
    {path:'thanhtoan',component:TrangThanhToanComponent},
    {path:'dangky',component:TrangDangKyComponent},
    {path:'dangnhap',component:TrangDangNhapComponent},
    {path:'lienhe',component:TrangLienHeComponent},
]

export const routing=RouterModule.forRoot(appRoute);
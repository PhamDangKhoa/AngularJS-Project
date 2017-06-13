import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
//thu vien Form 
import { FormsModule } from "@angular/forms";
import { AppComponent }  from './app.component';
//trang chu
import { TrangChuComponent } from "./pages/trang_chu/trang_chu.component";
import { ModuleHeaderComponent } from "./modules/module_header/module_header.component";
import { ModuleFooterComponent } from "./modules/module_footer/module_footer.component";
import { ModuleBannerComponent } from "./modules/module_banner/module_banner.component";
import { ModulePromotionComponent } from "./modules/module_promotion/module_promotion.component";
import { ModuleLatestProductComponent } from "./modules/module_latest_product/module_latest_product.component";
import { ModuleBrandComponent } from "./modules/module_brand/module_brand.component";
import { ModuleFavoriteProductComponent } from "./modules/module_favorite_product/module_favorite_product.component";
//trang gio hang
import { TrangGioHangComponent } from "./pages/trang_gio_hang/trang_gio_hang.component";
import { ModuleSearchProductComponent } from "./modules/module_search_product/module_search_product.component";
import { ModuleCartComponent } from "./modules/module_cart/module_cart.component";
//trang thanh toan
import { TrangThanhToanComponent } from "./pages/trang_thanh_toan/trang_thanh_toan.component";
import { ModuleCheckOutComponent } from "./modules/module_check_out/module_check_out.component";
//trang san pham
import { TrangSanPhamComponent } from "./pages/trang_san_pham/trang_san_pham.component";
import { ModuleProductComponent } from "./modules/module_product/module_product.component";
//trang chi tiet san pham
import { TrangChiTietComponent } from "./pages/trang_chi_tiet/trang_chi_tiet.component";
import { ModuleProductDetailComponent } from "./modules/module_product_detail/module_product_detail.component";
import { ModuleRelatedProductComponent } from "./modules/module_related_product/module_related_product.component";
//Khai bao trang dang ky
import { TrangDangKyComponent } from "./pages/trang_dang_ky/trang_dang_ky.component";
import { ModuleRegisterComponent } from "./modules/module_register/module_register.component";
//Khai bao trang dang nhap
import { TrangDangNhapComponent } from "./pages/trang_dang_nhap/trang_dang_nhap.component";
import { ModuleLoginComponent } from "./modules/module_login/module_login.component";
//Khai bao trang lien he
import { TrangLienHeComponent } from "./pages/trang_lien_he/trang_lien_he.component";
import { ModuleContactComponent } from "./modules/module_contact/module_contact.component";
//khai bao quang cao service
import { QuangCaoService } from "./services/quang_cao.service";
//Khai bao menu service
import { MenuService } from "./services/menu.service";
//khai bao nguoi dung service
import { NguoiDungService } from "./services/nguoi_dung.service";
//Khai bao thuong hieu service
import { ThuongHieuService } from "./services/thuong_hieu.service";
//Khai bao san pham service
import { SanPhamService } from "./services/san_pham.service";
//Khai bao chinh sach service
import { ChinhSachService } from "./services/chinh_sach.service";
//Khai bao gio hang service
import { GioHangService } from "./services/gio_hang.service";
//Khai bao user login service
import { UserLoginService } from "./services/user_login_service";
//Khai bao lien he service
import { LienHeService } from "./services/lien_he.service";
//Khai bao don hang service
import { DonHangService } from "./services/don_hang.service";
//Tao routing
import { routing } from "./routing";
//chen thu vien ben thu 3
import { Ng2PaginationModule } from "ng2-pagination";


@NgModule({
  imports:      [ BrowserModule,RouterModule,routing,FormsModule,HttpModule,Ng2PaginationModule ],
  declarations: [ AppComponent,TrangChuComponent,ModuleHeaderComponent,ModuleFooterComponent,
                  ModuleBannerComponent,ModulePromotionComponent,ModuleLatestProductComponent,
                  ModuleBrandComponent,ModuleFavoriteProductComponent,TrangGioHangComponent,
                  ModuleSearchProductComponent,ModuleCartComponent,TrangThanhToanComponent,
                  ModuleCheckOutComponent,TrangSanPhamComponent,ModuleProductComponent,
                  TrangChiTietComponent,ModuleProductDetailComponent,ModuleRelatedProductComponent,
                  TrangDangKyComponent,ModuleRegisterComponent,TrangDangNhapComponent,ModuleLoginComponent,
                  TrangLienHeComponent,ModuleContactComponent],
  providers:[QuangCaoService,MenuService,NguoiDungService,ThuongHieuService,SanPhamService,ChinhSachService,
             GioHangService,UserLoginService,LienHeService,DonHangService],                
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

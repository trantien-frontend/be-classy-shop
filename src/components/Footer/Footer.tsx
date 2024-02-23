import {} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/be-classy-logo.png";
import bct from "../../assets/images/bct.png";
import FooterWidget from "./components/FooterWidget";

export interface FooterProps {}

export function Footer({}: FooterProps) {
  const addressList: string[] = [
    "73 Lý Tự Trọng, Quận 1, Tp. HCM",
    "13 Nguyễn Thiện Thuật, Quận 3, TP. HCM",
    "210B Hồ Văn Huê, Quận Phú Nhuận, TP. HCM",
    "261 Phố Huế, Quận Hai Bà Trưng, Hà Nội",
    "371 Lê Duẩn, Quận Thanh Khê, Đà Nẵng",
    "0898 515 689",
    "hello@beclassy.vn",
  ];

  const widgetSecond: string[] = [
    "HƯỚNG DẪN MUA HÀNG",
    "GIAO NHẬN VÀ THANH TOÁN",
    "ĐỔI TRẢ VÀ BẢO HÀNH",
    "ĐĂNG KÍ THÀNH VIÊN",
    "TRA CỨU ĐƠN HÀNG",
  ];

  return (
    <footer className="bg-mid-white">
      <div className="container mx-auto">
        <div className="footer-top py-4 md:flex">
          <FooterWidget imageSrc={Logo} list={addressList} />
          <FooterWidget title="hướng dẫn" list={widgetSecond} imageSrc={bct} />
          <FooterWidget title="chinh sách" list={widgetSecond} />
          <FooterWidget title="đăng ký nhận tin" list={widgetSecond} />
        </div>
        <div className="footer-bottom"></div>
      </div>
    </footer>
  );
}

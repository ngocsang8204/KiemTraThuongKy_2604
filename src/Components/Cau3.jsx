import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import "./footer.css"

export default function Cau3() {
  return (
    <footer className="university-footer py-4">
      <div className="container">
        <div className="row">
          {/* Column 1: Contact Information */}
          <div className="col-md-3">
            <h5 className="footer-heading">LIÊN HỆ</h5>
            <div className="footer-content">
              <p className="mb-1 fw-bold">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
              <p className="mb-1">Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
              <p className="mb-1">
                Điện thoại: <a href="tel:02838940390">028 3894 0390</a> - 100
              </p>
              <p className="mb-1">
                Tuyển sinh: <a href="tel:02839851932">028 3985 1932</a> - <a href="tel:02838955858">028 3895 5858</a> -{" "}
                <a href="tel:02839851917">028 3985 1917</a>
              </p>
              <p className="mb-1">
                Email: <a href="mailto:dhcn@iuh.edu.vn">dhcn@iuh.edu.vn</a>
              </p>
            </div>
          </div>

          {/* Column 2: Other Activities */}
          <div className="col-md-3">
            <h5 className="footer-heading">HOẠT ĐỘNG KHÁC</h5>
            <div className="footer-content">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Hoạt động phục vụ cộng đồng</a>
                </li>
                <li>
                  <a href="#">Sinh viên tình nguyện</a>
                </li>
                <li>
                  <a href="#">CLB/Đội/Nhóm sinh viên</a>
                </li>
                <li>
                  <a href="#">Kết nối doanh nghiệp</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Extended Information */}
          <div className="col-md-3">
            <h5 className="footer-heading">THÔNG TIN MỞ RỘNG</h5>
            <div className="footer-content">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Bảo chí viết về IUH</a>
                </li>
                <li>
                  <a href="#">Khám phá IUH</a>
                </li>
                <li>
                  <a href="#">Kỹ năng mềm</a>
                </li>
                <li>
                  <a href="#">Bộ sưu tập</a>
                </li>
                <li>
                  <a href="#">Dịch vụ sinh viên</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Useful Documents */}
          <div className="col-md-3">
            <h5 className="footer-heading">VĂN BẢN TIỆN ÍCH</h5>
            <div className="footer-content">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Quy chế-Quy định-Quy trình</a>
                </li>
                <li>
                  <a href="#">Ba công khai</a>
                </li>
                <li>
                  <a href="#">Biểu mẫu đào tạo</a>
                </li>
                <li>
                  <a href="#">Quản lý khoa học</a>
                </li>
                <li>
                  <a href="#">Phản hồi</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

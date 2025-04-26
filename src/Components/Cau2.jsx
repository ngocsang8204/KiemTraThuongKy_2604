import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import { Home, Search } from "lucide-react"
import "./navigation.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Cau2() {
  return (
    <nav className="navbar navbar-expand-lg university-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Home size={18} />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                GIỚI THIỆU
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Tổng quan
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Lịch sử phát triển
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cơ cấu tổ chức
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Thành tựu
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ĐÀO TẠO
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Đại học
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sau đại học
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Chương trình quốc tế
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Đào tạo từ xa
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TUYỂN SINH
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Thông tin tuyển sinh
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Đăng ký xét tuyển
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Học phí - Học bổng
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Câu hỏi thường gặp
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                NGHIÊN CỨU
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Đề tài nghiên cứu
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Công bố khoa học
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hợp tác quốc tế
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sự kiện khoa học
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SINH VIÊN
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Thông báo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Lịch học - Lịch thi
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hoạt động sinh viên
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cựu sinh viên
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                GIẢNG VIÊN
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Đội ngũ giảng viên
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Lịch giảng dạy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tài liệu giảng dạy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Nghiên cứu và phát triển
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                VĂN BẰNG
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Tra cứu văn bằng
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cấp bản sao
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Xác minh văn bằng
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Quy định về văn bằng
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex search-form" role="search">
            <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">
              <Search size={16} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

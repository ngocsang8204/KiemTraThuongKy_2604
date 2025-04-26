import React from 'react'
import Logo from "../photos/logo.png"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import { Image } from "react-bootstrap"

export default function Cau4() {
  return (
    <footer className="university-footer">
      <div className="container">
        {/* Main footer content */}
        <div className="footer-top py-2">
          <div className="row align-items-center">
            {/* University Logo */}
            <div className="col-md-4">
              <div className="university-logo">
                <Image
                  src={Logo}
                  alt="Industrial University of Ho Chi Minh City Logo"
                  width={180}
                  height={60}
                  className="logo-img"
                />
              </div>
            </div>

            {/* Statistics */}
            <div className="col-md-6">
              <div className="statistics">
                <p className="mb-1">
                  <i className="bi bi-bar-chart-fill me-2"></i>
                  Số lượt truy cập: <strong>288,835,360</strong>
                </p>
                <p className="mb-1">
                  <i className="bi bi-calendar-check me-2"></i>
                  Hôm nay: <strong>21,714</strong>
                  <span className="mx-3">|</span>
                  <i className="bi bi-eye me-2"></i>
                  Đang xem: <strong>73</strong>
                </p>
              </div>
            </div>

            {/* Share section - without social media icons as requested */}
            <div className="col-md-2 text-end">
              <div className="share-section">
                <p className="mb-0">Chia sẻ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="footer-bottom py-2">
          <div className="row">
            <div className="col-12">
              <p className="copyright mb-1">© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
              <p className="disclaimer mb-0">
                Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại
                học Công nghiệp Thành phố Hồ Chí Minh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import React from 'react'
import { Globe, Mail, Monitor } from "lucide-react"
import Logo from "../photos/logo.png"
import { Image } from "react-bootstrap"
import VietNam from "../photos/icons8-vietnam-48.png"
import English from "../photos/icons8-british-flag-48.png"

export default function Cau1() {
  return (
    <div className="university-header">
      {/* Top navigation bar */}
      <div className="top-nav bg-dark text-white py-2">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <a href="#" className="text-white text-decoration-none d-flex align-items-center">
              <Monitor className="me-1" size={16} />
              <span>E-OFFICE</span>
            </a>
            <a href="#" className="text-white text-decoration-none d-flex align-items-center">
              <Mail className="me-1" size={16} />
              <span>EMAIL</span>
            </a>
            <a href="#" className="text-white text-decoration-none d-flex align-items-center">
              <Globe className="me-1" size={16} />
              <span>THƯ VIỆN - THÔNG TIN</span>
            </a>
          </div>
          <div className="d-flex align-items-center">
            <span className="me-3">KẾT NỐI | LIÊN HỆ</span>
            <div className="language-selector d-flex gap-2">
              <a href="#" className="flag">
                <Image src={VietNam} alt="Vietnamese" width={30} height={20} />
              </a>
              <a href="#" className="flag">
                <Image src={English} alt="English" width={30} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="main-header py-3" style={{ backgroundColor: "#e6f0f5" }}>
        <div className="container-fluid d-flex align-items-center">
          <div className="logo me-4">
            <Image src={Logo} alt="University Logo" width={200} height={80} />
          </div>
          <div className="header-text text-center flex-grow-1">
            <h4 className="mb-1 fw-bold text-primary">BỘ CÔNG THƯƠNG</h4>
            <h2 className="mb-1 fw-bold text-primary">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h2>
            <p className="mb-0 text-danger">Đổi mới tư duy, làm giàu thêm trí thức - đời sống</p>
          </div>
        </div>
      </div>
    </div>
  )
}

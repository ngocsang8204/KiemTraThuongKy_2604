import "bootstrap/dist/css/bootstrap.min.css"
import"bootstrap/dist/js/bootstrap.bundle.min.js"
import { useEffect, useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import "./sidebar.css"

export default function Cau7() {
    // useEffect(() => {
    //     // Import Bootstrap JavaScript on the client side
    //     require("bootstrap/dist/js/bootstrap.bundle.min.js")
    //   }, [])
    
      // State to track which menu is expanded
      const [expandedMenu, setExpandedMenu] = useState(null)
    
      // Toggle menu expansion
      const toggleMenu = (menuId) => {
        if (expandedMenu === menuId) {
          setExpandedMenu(null)
        } else {
          setExpandedMenu(menuId)
        }
      }
    
      // Check if a menu is expanded
      const isExpanded = (menuId) => expandedMenu === menuId
    
  return (
    <div className="university-layout">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left Sidebar - Organizational Structure */}
          <div className="col-md-3">
            <div className="org-structure-sidebar">
              {/* Sidebar Header */}
              <div className="sidebar-header">
                <h3>CƠ CẤU TỔ CHỨC</h3>
              </div>

              {/* Sidebar Menu Items with Submenus */}
              <ul className="sidebar-menu">
                {/* LÃNH ĐẠO */}
                <li className="sidebar-item">
                  <a
                    href="#"
                    className={`sidebar-link ${isExpanded("leadership") ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleMenu("leadership")
                    }}
                  >
                    <span>LÃNH ĐẠO</span>
                    {isExpanded("leadership") ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </a>
                  <div className={`submenu ${isExpanded("leadership") ? "show" : ""}`}>
                    <ul>
                      <li>
                        <a href="#">Ban Giám hiệu</a>
                      </li>
                      <li>
                        <a href="#">Hội đồng Trường</a>
                      </li>
                      <li>
                        <a href="#">Đảng ủy</a>
                      </li>
                      <li>
                        <a href="#">Ban Tư vấn</a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* CÁC PHÒNG BAN */}
                <li className="sidebar-item">
                  <a
                    href="#"
                    className={`sidebar-link ${isExpanded("departments") ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleMenu("departments")
                    }}
                  >
                    <span>CÁC PHÒNG BAN</span>
                    {isExpanded("departments") ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </a>
                  <div className={`submenu ${isExpanded("departments") ? "show" : ""}`}>
                    <ul>
                      <li>
                        <a href="#">Phòng Đào tạo</a>
                      </li>
                      <li>
                        <a href="#">Phòng Công tác Sinh viên</a>
                      </li>
                      <li>
                        <a href="#">Phòng Tài chính - Kế toán</a>
                      </li>
                      <li>
                        <a href="#">Phòng Tổ chức - Hành chính</a>
                      </li>
                      <li>
                        <a href="#">Phòng Khoa học Công nghệ</a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* CÁC KHOA */}
                <li className="sidebar-item">
                  <a
                    href="#"
                    className={`sidebar-link ${isExpanded("faculties") ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleMenu("faculties")
                    }}
                  >
                    <span>CÁC KHOA</span>
                    {isExpanded("faculties") ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </a>
                  <div className={`submenu ${isExpanded("faculties") ? "show" : ""}`}>
                    <ul>
                      <li>
                        <a href="#">Khoa Công nghệ Thông tin</a>
                      </li>
                      <li>
                        <a href="#">Khoa Điện - Điện tử</a>
                      </li>
                      <li>
                        <a href="#">Khoa Cơ khí</a>
                      </li>
                      <li>
                        <a href="#">Khoa Quản trị Kinh doanh</a>
                      </li>
                      <li>
                        <a href="#">Khoa Kế toán - Kiểm toán</a>
                      </li>
                      <li>
                        <a href="#">Khoa Ngoại ngữ</a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* CÁC VIỆN */}
                <li className="sidebar-item">
                  <a
                    href="#"
                    className={`sidebar-link ${isExpanded("institutes") ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleMenu("institutes")
                    }}
                  >
                    <span>CÁC VIỆN</span>
                    {isExpanded("institutes") ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </a>
                  <div className={`submenu ${isExpanded("institutes") ? "show" : ""}`}>
                    <ul>
                      <li>
                        <a href="#">Viện Nghiên cứu Khoa học Công nghệ</a>
                      </li>
                      <li>
                        <a href="#">Viện Đào tạo Quốc tế</a>
                      </li>
                      <li>
                        <a href="#">Viện Công nghệ Cao</a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* CÁC TRUNG TÂM */}
                <li className="sidebar-item">
                  <a
                    href="#"
                    className={`sidebar-link ${isExpanded("centers") ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleMenu("centers")
                    }}
                  >
                    <span>CÁC TRUNG TÂM</span>
                    {isExpanded("centers") ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </a>
                  <div className={`submenu ${isExpanded("centers") ? "show" : ""}`}>
                    <ul>
                      <li>
                        <a href="#">Trung tâm Ngoại ngữ</a>
                      </li>
                      <li>
                        <a href="#">Trung tâm Tin học</a>
                      </li>
                      <li>
                        <a href="#">Trung tâm Hợp tác Doanh nghiệp</a>
                      </li>
                      <li>
                        <a href="#">Trung tâm Thư viện</a>
                      </li>
                      <li>
                        <a href="#">Trung tâm Đào tạo Thực hành</a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* CÁC PHÂN HIỆU */}
                <li className="sidebar-item">
                  <a
                    href="#"
                    className={`sidebar-link ${isExpanded("branches") ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleMenu("branches")
                    }}
                  >
                    <span>CÁC PHÂN HIỆU</span>
                    {isExpanded("branches") ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </a>
                  <div className={`submenu ${isExpanded("branches") ? "show" : ""}`}>
                    <ul>
                      <li>
                        <a href="#">Phân hiệu Quảng Ngãi</a>
                      </li>
                      <li>
                        <a href="#">Phân hiệu Thanh Hóa</a>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* ĐOÀN THỂ */}
                <li className="sidebar-item">
                  <a
                    href="#"
                    className={`sidebar-link ${isExpanded("organizations") ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleMenu("organizations")
                    }}
                  >
                    <span>ĐOÀN THỂ</span>
                    {isExpanded("organizations") ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </a>
                  <div className={`submenu ${isExpanded("organizations") ? "show" : ""}`}>
                    <ul>
                      <li>
                        <a href="#">Công đoàn Trường</a>
                      </li>
                      <li>
                        <a href="#">Đoàn Thanh niên</a>
                      </li>
                      <li>
                        <a href="#">Hội Sinh viên</a>
                      </li>
                      <li>
                        <a href="#">Hội Cựu chiến binh</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Placeholder for the rest of the layout */}
          <div className="col-md-9">
            <div className="content-placeholder">
              <p>Content area for other sections</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

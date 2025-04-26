import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import {Image} from "react-bootstrap"
import { Play } from "lucide-react"
import "./panel.css"
import QN from "../photos/qn.jpg"
import TH from "../photos/th.jpg"
import Video from "../photos/vd.jpg"

export default function Cau6() {
  return (
    <div className="campus-panels-section">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Quang Ngai Branch Panel */}
          <div className="col-md-4">
            <div className="campus-panel">
              <h3 className="panel-title">PHÂN HIỆU QUẢNG NGÃI</h3>
              <div className="panel-content">
                <Image
                  src={QN}
                  alt="Phân hiệu Quảng Ngãi"
                  width={400}
                  height={300}
                  className="panel-image"
                />
              </div>
            </div>
          </div>

          {/* Thanh Hoa Campus Panel */}
          <div className="col-md-4">
            <div className="campus-panel">
              <h3 className="panel-title">CƠ SỞ THANH HÓA</h3>
              <div className="panel-content">
                <Image
                  src={TH}
                  alt="Cơ sở Thanh Hóa"
                  width={400}
                  height={300}
                  className="panel-image"
                />
              </div>
            </div>
          </div>

          {/* Video and Images Panel */}
          <div className="col-md-4">
            <div className="campus-panel">
              <h3 className="panel-title">
                VIDEO VÀ HÌNH ẢNH
                <a href="#" className="view-all-btn">
                  xem tất cả
                </a>
              </h3>
              <div className="panel-content">
                <div className="video-container">
                  <Image
                    src={Video}
                    alt="Video và hình ảnh"
                    width={400}
                    height={300}
                    className="panel-image"
                  />
                  <div className="play-button">
                    <Play size={40} color="white" fill="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import HT from "../photos/hoptac.jpg";

export default function Cau9() {
  return (
    <div className="container mt-4">
      {/* TUYỂN SINH */}
      <Card className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold text-primary">TUYỂN SINH</h5>
            <Button variant="light" size="sm" className="border">
              xem tất cả
            </Button>
          </div>
          <hr />
          <ul className="list-unstyled">
            <li className="mb-2">
              <span className="text-danger">●</span>{" "}
              Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình...
              <span className="text-muted ms-2">28-03-2025</span>
            </li>
            <li className="mb-2">
              <span className="text-danger">●</span>{" "}
              Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025
              <span className="text-muted ms-2">20-03-2025</span>
            </li>
          </ul>
        </Card.Body>
      </Card>

      {/* HỢP TÁC QUỐC TẾ */}
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold text-primary">HỢP TÁC QUỐC TẾ</h5>
            <Button variant="light" size="sm" className="border">
              xem tất cả
            </Button>
          </div>
          <hr />
          <div className="text-center mb-3">
            <img
              src={HT}
              alt="Hợp tác quốc tế"
              className="img-fluid rounded"
            />
          </div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <span className="text-danger">●</span>{" "}
              Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc...
              <span className="text-muted ms-2">24-03-2025</span>
            </li>
            <li className="mb-2">
              <span className="text-danger">●</span>{" "}
              Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus
              <span className="text-muted ms-2">19-03-2025</span>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

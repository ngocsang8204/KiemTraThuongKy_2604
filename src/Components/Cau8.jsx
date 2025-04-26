import React from 'react';
import { Card, Button, ListGroup, Row, Col, Badge, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Anh1 from "../photos/tr1.jpg"

const Cau8 = () => {
  return (
    <div className="p-3">

      {/* Thông báo */}
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center bg-white border-0">
          <h5 className="m-0 text-primary fw-bold">THÔNG BÁO</h5>
          <Button variant="link" className="p-0 text-decoration-none">xem tất cả</Button>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div>
              <div>Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025</div>
              <small className="text-muted">24-04-2025</small>
            </div>
            <Badge bg="danger" className="ms-2">new</Badge>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div>
              <div>Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội...</div>
              <small className="text-muted">21-04-2025</small>
            </div>
            <Badge bg="danger" className="ms-2">new</Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      {/* Tin tức - Sự kiện */}
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center bg-white border-0">
          <h5 className="m-0 text-primary fw-bold">TIN TỨC - SỰ KIỆN</h5>
          <Button variant="link" className="p-0 text-decoration-none">xem tất cả</Button>
        </Card.Header>
        <Card.Body className="pt-0">
          <Image 
            src={Anh1}
            fluid 
            className="mb-3" 
          />

          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div>
                <div>AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp...</div>
                <small className="text-muted">25-04-2025</small>
              </div>
              <Badge bg="danger" className="ms-2">new</Badge>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div>
                <div>Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức mạnh AI trong...</div>
                <small className="text-muted">22-04-2025</small>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

    </div>
  );
};

export default Cau8;

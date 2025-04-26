import React from 'react';
import Cau7 from './Cau7'; // Đảm bảo đường dẫn chính xác
import Cau8 from './Cau8'; // Đảm bảo đường dẫn chính xác
import Cau9 from './Cau9'; // Đảm bảo đường dẫn chính xác

export default function Cau10() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Cau7 />
        </div>
        <div className="col-md-4">
          <Cau8 />
        </div>
        <div className="col-md-4">
          <Cau9 />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import caro1 from '../photos/carosel/caro1.jpg';
import caro2 from '../photos/carosel/caro2.png';
import caro3 from '../photos/carosel/caro3.jpg';

export default function Cau5() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ảnh 1</h3>
          <p>Mô tả cho ảnh 1</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Ảnh 2</h3>
          <p>Mô tả cho ảnh 2</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caro3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Ảnh 3</h3>
          <p>Mô tả cho ảnh 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

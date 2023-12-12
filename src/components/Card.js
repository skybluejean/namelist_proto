import React from 'react';
import './Card.css'; // CSS 파일을 import 합니다.

const Card = () => {
  return (
    <div className="card">
      <div className="name">Jin</div>
      <div className="job-title">Developer</div>
      <div className="contact-info">
        전화: 010-2627-7336<br />
        이메일: herj@euclidspft.co.kr
      </div>
    </div>
  );
};

export default Card;

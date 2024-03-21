import React from 'react';

const TailorDetails = () => {
  return (
    <div className="visit-tailor-area fix" style={{ backgroundColor: '#080021', marginLeft: '200px',  display: 'flex', alignItems: 'center'}}>
      {/* Left Contents */}
      <img className="tailor-offers" src="/logo1.jpg" style={{ borderRadius: '5px', marginRight: '80px'}} />

      {/* Right Contents */}
      <div className="tailor-details">
        <div>
          <div className="details-single">
            <span>
                <p style={{ color: '#FFFFFF', fontSize: '30px' }}>Về chúng tôi</p>
            </span>
            <h2 style={{ color: '#c8ff00', fontSize: '50px'  }}>MP Solutions- Công nghệ kiến tạo giá trị tốt đẹp</h2>
            <br /> <br />
            <div style={{ textAlign: 'justify' }}>
                <p style={{ color: '#FFFFFF', fontSize: '30px'  }}>Công ty cổ phần giải pháp Minh Phúc - MP Solutions (công ty thành viên trong hệ sinh thái MPGroup, hình thành và phát triển từ năm 2002) được thành lập với mục tiêu cung cấp giải pháp Công nghệ thông tin hiện đại, tối ưu và tiên phong trong xu hướng Chuyển đổi số của Việt Nam và khu vực.</p><br />
                <p style={{ color: '#FFFFFF', fontSize: '30px'  }}>Trải qua quá trình xây dựng và phát triển; kiên định với giá trị cốt lõi “Khách hàng là trung tâm” và phương châm “Không ngừng đổi mới, sáng tạo”; MP Solutions luôn đầu tư nghiên cứu và áp dụng những công nghệ hiện đại vào thực hiện thực tiễn tốt nhất, để cung cấp các Giải pháp công nghệ thông tin chất lượng cao, hiệu quả về chi phí, đáp ứng vượt trội các yêu cầu của khách hàng.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailorDetails;

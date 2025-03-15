import { DatePicker, Row, Col, Button, Input, Space, Checkbox, Radio, Select } from 'antd';
import { useState } from 'react';
import { bookRoom } from '../../services/bookRoomService';
const { RangePicker } = DatePicker;

function BookRoom() {
  const [data, setData] = useState({
    time: "14 giờ",
  });


  const optionsTime = [];

  for (let i = 7; i <= 24; i++) {
    optionsTime.push({
      value: i > 9 ? `${i} giờ` : `0${i} giờ`,
      label: i > 9 ? `${i} giờ` : `0${i} giờ`
    });
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    const object = {
      ...data,
      [name]: value
    }
    setData(object);
  };

  const handleChangeCheckBox = (e) => {
    const object = {
      ...data,
      services: e
    }
    setData(object);
  };

  const handleChangeDate = (dates, dateStrings) => {
    const object = {
      ...data,
      date: dateStrings
    }
    setData(object);
  };

  const handleChangeSelect = (value) => {
    const object = {
      ...data,
      time: value
    }
    setData(object);
  }

  const handleSubmit = async () => {
    const response = await bookRoom(data);
    if (response) {
      alert("Đặt phòng thành công");
    }
    else {
      alert("Đặt phòng thất bại");
    }
  }
  return (
    <>
      <h2>Đặt phòng</h2>

      <Row gutter={[20, 20]}>
        <Col span={24}>
          <p>Họ tên</p>
          <Input name='fullname' placeholder="Ví dụ: Le Van A" onChange={handleChangeInput} />
        </Col>
        <Col span={12}>
          <p>Số điện thoại</p>
          <Input name='phone' placeholder="Ví dụ: 0121345234" onChange={handleChangeInput} />
        </Col>
        <Col span={12}>
          <p>Email</p>
          <Input name='email' placeholder="Ví dụ: levana@gmail.com" onChange={handleChangeInput} />
        </Col>
        <Col span={12}>
          <p>Dịch vụ thêm</p>
          <Checkbox.Group name="services" onChange={handleChangeCheckBox}>
            <Space direction="vertical">
              <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
              <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>

        <Col span={12}>
          <p>Quà tặng</p>
          <Radio.Group name='gift' onChange={handleChangeInput}>
            <Space direction="vertical">
              <Radio value="Áo cộc">Áo cộc</Radio>
              <Radio value="Mũ">Mũ</Radio>
              <Radio value="Kem chỗng nắng">Kem chỗng nắng</Radio>
            </Space>
          </Radio.Group>
        </Col>

        <Col span={12}>
          <p>Chọn ngày</p>
          <RangePicker placeholder={["Nhận phòng", "Trả phòng"]} format="DD/MM/YYYY" onChange={handleChangeDate} />
        </Col>

        <Col span={12}>
          <p>Giờ nhận phòng</p>
          <Select style={{ width: "100%", }}
            defaultValue={data.time}
            options={optionsTime} 
            onChange={handleChangeSelect}  
          />
        </Col>

        <Col span={24}>
          <Button type="primary" onClick={handleSubmit}>Đặt phòng</Button>
        </Col>
      </Row>
    </>
  )
}

export default BookRoom;
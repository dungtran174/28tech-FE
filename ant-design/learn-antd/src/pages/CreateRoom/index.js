import { Button, Form, Input, InputNumber, Select, Switch } from 'antd';
import { createRoom } from '../../services/roomsService';
const { Option } = Select;

function CreateRoom() {
  const [form] = Form.useForm();
  const rules = [
    {
      required: true,
      message: 'Bắt buộc nhập!',
    },
  ];

  const handleSubmit = async (values) => {
    const response = await createRoom(values);
    if (response) {
      form.resetFields();
    }
  };

  return (
    <>
      <h2>Thêm phòng mới</h2>
      <Form layout="vertical" name='create-room' onFinish={handleSubmit} form={form}>

        <Form.Item
          label="Tên phòng"
          name="roomName"
          rules={rules}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số lượng giường"
          name="quantityBed"
          rules={rules}
        >
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item
          label="Số người tối đa"
          name="quantityPeople"
          rules={rules}
        >
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="description"
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          label="Tiện ích"
          name="utils"
        >
          <Select
            mode='multiple'
            allowClear
           style={{ width: '100%' }}
          >
            <Option value="wifi">wifi</Option>
            <Option value="Nóng lạnh">Nóng lạnh</Option>
            <Option value="Điều hòa">Điều hòa</Option>
          </Select>
        </Form.Item>

        <Form.Item
          valuePropName='checked'
          label="Trạng thái"
          name="status"
        >
          <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
        </Form.Item>

        <Form.Item
          valuePropName='checked'
          label="Loại phòng"
          name="typeRoom"
        >
          <Switch checkedChildren="Vip" unCheckedChildren="Thường"/>
        </Form.Item>
          

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Tạo phòng
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateRoom;
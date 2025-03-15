import { Button, message, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteRoom } from "../../services/roomsService";
function DeleteRoom(props) {
  const { record, onReload } = props;
  const handleDelete = async () => {
    const response = await deleteRoom(record.id);
    if (response) {
      onReload();
      message.success("Xóa phòng thành công");
    } else {
      message.error("Xóa phòng thất bại");
    }
  }
  return (
    <>
      <Popconfirm title="Bạn có chắc chắn muốn xóa phòng này không?" onConfirm={handleDelete}>
        <Button danger icon={<DeleteOutlined />}/>
      </Popconfirm>
    </>
  );
}

export default DeleteRoom;
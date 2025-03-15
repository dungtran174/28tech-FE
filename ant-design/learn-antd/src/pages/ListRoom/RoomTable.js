import { Badge, Table, Tag, Tooltip } from 'antd';
import DeleteRoom from './DeleteRoom';

function RoomTable(props) {
  const { rooms, onReload } = props;
  const columns = [
    {
      title: 'Tên phòng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số giường',
      dataIndex: 'quantityBed',
      key: 'quantityBed',
    },
    {
      title: 'Số người',
      dataIndex: 'quantityPeople',
      key: 'quantityPeople',
    },
    {
      title: 'Loại phòng',
      dataIndex: 'typeRoom',
      key: 'typeRoom',
      render: (typeRoom) => {
        return typeRoom ? (
          <>
            <Tooltip title="Phòng VIP">
              <Tag color="blue">Vip</Tag>
            </Tooltip>
            {/* <Badge status="success" text="VIP" /> */}
          </>
        ) : (
          <>
            <Tag color="default">Thường</Tag>
            {/* <Badge status="default" text="Thường" /> */}
          </>
        )
      }
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        return status ? (
          <Badge status="success" text="Còn phòng" />
        ) : (
          <Badge status="error" text="Hết phòng" />
        )
      }
    },
    {
      title: 'Hành động',
      key: 'actions',
      render: (record) => {
        return (
          <>
            <DeleteRoom record={record}/>
          </>
        )
      }
    }
  ];

  return (
    <>
      <Table dataSource={rooms} columns={columns} rowKey="id"
        onReload={onReload}/>
    </>
  )
}

export default RoomTable;
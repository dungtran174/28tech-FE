import { Menu } from "antd";
import { AppstoreOutlined, DashboardOutlined, FormOutlined, PlusCircleOutlined, UnorderedListOutlined, WechatWorkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function MenuSider() {
  const items = [
    {
      label: "Menu 1",
      icon: <DashboardOutlined />,
      key: "menu-1",
      children: [
        {
          label: <Link to="/">Dashboard</Link>,
          key: "/"
        },
        {
          label: "Menu 1.2",
          key: "menu-1-2"
        },
        {
          label: "Menu 1.3",
          key: "menu-1-3"
        }
      ]
    },
    {
      label: "Menu 2",
      icon: <AppstoreOutlined />,
      key: "menu-2",
      children: [
        {
          label: "Menu 2.1",
          key: "menu-2-1"
        },
        {
          label: "Menu 2.2",
          key: "menu-2-2"
        },
        {
          label: "Menu 2.3",
          key: "menu-2-3"
        }
      ]
    },
    {
      label: "Menu 3",
      icon: <WechatWorkOutlined />,
      key: "menu-3",
      children: [
        {
          label: "Menu 3.1",
          key: "menu-3-1"
        },
        {
          label: "Menu 3.2",
          key: "menu-3-2"
        },
        {
          label: "Menu 3.3",
          key: "menu-3-3"
        }
      ]
    },
    {
      label: <Link to="/book-room">Book Room</Link>,
      icon: <FormOutlined />,
      key: "/book-room",
    },
    {
      label: <Link to="/create-room">Create Room</Link>,
      icon: <PlusCircleOutlined />,
      key: "/create-room",
    },
    {
      label: <Link to="/list-room">List Room</Link>,
      icon: <UnorderedListOutlined />,
      key: "/list-room",
    },
  ];

  return (
    <>
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={["menu-1"]}
      />
    </>
  )
}

export default MenuSider;
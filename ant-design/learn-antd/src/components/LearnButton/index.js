import { useState } from 'react';
import { Button } from 'antd';
import { ExpandAltOutlined } from '@ant-design/icons';
function LearnButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {

      setLoading(false);
      // window.open("https://www.youtube.com/", "_blank");
    }, 2000);
  };
  return (
    <>
      <Button type="primary" loading={loading}
        onClick={handleClick} disabled={loading}
        size='large'>Primary Button</Button>

      <Button icon={<ExpandAltOutlined rotate={45} spin={true} />}>
        Button
      </Button>
    </>
  )
}

export default LearnButton;
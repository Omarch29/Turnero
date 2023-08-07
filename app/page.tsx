import Image from 'next/image'
import { Button, Space, DatePicker, version } from 'antd';

export default function Home() {
  return (
   <main>
       <div style={{ padding: '0 24px' }}>
    <h1>antd version: {version}</h1>
    <Space>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </Space>
  </div>
   </main>
  )
}
